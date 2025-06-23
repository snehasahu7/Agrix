import express, {JSON} from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({
    origin:'https://agrixagrotech.netlify.app',
    methods:['POST', 'GET']
}));

app.post("/send", async(req,res)=>{
    const {name, email, subject, message} = req.body;
    console.log("recieved:",{name,email, subject, message});
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.GMAIL_USER,
            pass:process.env.GMAIL_PASS
        
        }
        
    });
 
    const mailoptions = {
        from:`"${req.body.name} via Website" ${email}`,
        to:process.env.GMAIL_USER,
        subject:`Agrix Web Contact: ${subject}`,
        text:`From:${name} <${email}>\n\n${message}`
    };

    try{
        await transporter.sendMail(mailoptions);
        res.status(200).json({message:'Message sent successfully'});
    
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'Message failed to send',error});
    }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fetchposts=async()=> {

  try {
    const jsonPath = path.join(__dirname, 'posts.json');
    const data = fs.readFileSync(jsonPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(' Failed to load events.json:', err.message);
    return [];
  }
}

let cachedEvents = [];


(async () => {
  try {
    cachedEvents = await fetchposts();
    console.log(`Initial scrape: ${cachedEvents.length} events.` );
  } catch (err) {
    console.error("Initial scrape failed:", err.message);
  }
})();

app.get('/api/postlist',(req,res)=>{
   res.json(cachedEvents);
});


app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});