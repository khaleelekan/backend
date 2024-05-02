import express from "express";
import bodyParser from "body-parser"

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=> {
    let today = new Date()
    let day = today.getDate()

    let type =" weekdays"
    let adv = "its time to work hard"

    if (day == 0 || day == 6){
         type = "weekend"
         adv = "its time to flex"
    }
   

    res.render("index.ejs",{
        dayType: type,
        advice: adv
    } )
})

app.listen(port, ()=>{
    console.log("listening on port" + port)
})