import express, {json} from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    methods:['POST']
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

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});