import time
import json
import hashlib
import re
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import ElementClickInterceptedException
from webdriver_manager.chrome import ChromeDriverManager

# Generate a hashed post ID from content
def generate_post_id(content):
    return hashlib.sha256(content.encode('utf-8')).hexdigest()[:10]

# Initialize Selenium WebDriver
def initialize_driver():
    chrome_options = Options()
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--use-gl=swiftshader")
    chrome_options.add_argument("--window-size=1920,1080")

    try:
        driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()),
            options=chrome_options
        )
        return driver
    except Exception as e:
        print(f"Failed to initialize driver: {e}")
        return None

# Click 'See more' button

def click_see_more(driver, element):
    try:
        driver.execute_script("arguments[0].scrollIntoView(true);", element)
        time.sleep(1)
        element.click()
    except ElementClickInterceptedException:
        try:
            driver.execute_script("arguments[0].click();", element)
        except Exception:
            try:
                actions = ActionChains(driver)
                actions.move_to_element(element).click().perform()
            except Exception as e:
                print(f"Click failed: {e}")
                return False
    return True


def scrape_linkedin_posts(driver, top_post_id=""):
    if not driver:
        return None

    url = "https://www.linkedin.com/company/agrixagrotech/posts/"
    try:
        driver.get(url)
        wait = WebDriverWait(driver, 5)
        driver.find_element(By.ID, "username").send_keys("rajrishicharan11@gmail.com")
        driver.find_element(By.ID, "password").send_keys("linkedin@raj22")
        driver.find_element(By.XPATH, "//button[@type='submit']").click()

        # Accept cookies if prompted
        try:
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.ID, "ember252"))
            ).click()
        except Exception:
            pass

        time.sleep(2)

        for _ in range(0):
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(3)

        # Expand 'See more' content
        see_more_buttons = driver.find_elements(By.XPATH, "//button[contains(@class, 'see-more-less')]")
        for btn in see_more_buttons:
            click_see_more(driver, btn)

        time.sleep(2)
        posts_elements = driver.find_elements(By.CLASS_NAME, "fie-impression-container")
        posts = []

        for post_element in posts_elements:
            try:
                post_text_elem = post_element.find_element(
                    By.XPATH,
                    ".//div[contains(@class, 'update-components-text')]//span[contains(@class, 'break-words')]"
                )
                raw_text = post_text_elem.get_attribute("innerText")

                lines = raw_text.strip().splitlines()
                content_lines = []
                hashtags = []

                for line in lines:
                    if line.strip().startswith("#"):
                        hashtags.append(line.strip())
                    elif "hashtag" not in line.lower():
                        line = re.sub(r'\\u[0-9a-fA-F]{4}', '', line)
                        content_lines.append(line.strip())

                content = "\n".join(content_lines)
                post_id = generate_post_id(content)

                if post_id == top_post_id:
                    print("Stopping scrape as it matches the top post.")
                    return posts

                img_elements = post_element.find_elements(By.TAG_NAME, "img")
                img_urls = [img.get_attribute("src") for img in img_elements if (
                    "agrixagrotech_logo" not in img.get_attribute("src") and
                    "profile-displayphoto" not in img.get_attribute("src") and
                    img.get_attribute("src").startswith("https://media.licdn.com")
                )]

                if post_element.find_elements(By.TAG_NAME, "video"):
                    poster = post_element.find_element(By.CLASS_NAME, "vjs-poster-background")
                    poster_style = poster.get_attribute("style")
                    if poster_style:
                        poster_url = poster_style.split('url("')[1].split('")')[0]
                        img_urls.append(poster_url)

                post_data = {
                    "post_id": post_id,
                    "content": content,
                    "hashtags": hashtags,
                    "images": img_urls
                }

                posts.append(post_data)
                print(f"✅ Post extracted: {post_id}")

            except Exception as e:
                print(f"❌ Failed to extract post: {e}")

        return posts

    except Exception as e:
        print(f"Scraping error: {e}")
        return None

# -------------------------------------
# Main Execution
# -------------------------------------
if __name__ == "__main__":
    driver = initialize_driver()
    file_path = "posts.json"

    try:
        top_post_id = ""
        existing_posts = []

        try:
            with open(file_path, "r", encoding="utf-8") as file:
                existing_posts = json.load(file)
                if existing_posts:
                    top_post_id = existing_posts[-1].get("post_id", "")
        except (FileNotFoundError, json.JSONDecodeError):
            print("⚠️ 'posts.json' not found or invalid. Starting fresh.")

        new_posts = scrape_linkedin_posts(driver, top_post_id)

        if new_posts:
            for post in new_posts:
                print(f"Post ID: {post['post_id']}")
                print(f"Hashtags: {post['hashtags']}")
                print(f"Content:\n{post['content']}\n")
                print(f"Images: {post['images']}\n")

            all_posts = new_posts + existing_posts
            with open(file_path, "w", encoding="utf-8") as file:
                json.dump(all_posts[::-1], file, indent=4, ensure_ascii=False)

            print(f"{len(new_posts)} new post(s) saved.")
        else:
            print("No new posts found.")

    except Exception as e:
        print(f"Main error: {e}")

    finally:
        if driver:
            driver.quit()
        print("Driver closed.")