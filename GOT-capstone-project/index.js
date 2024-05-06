import express from "express"
import axios from "axios"
import bodyParser from "body-parser"

const app = express()
const port = 3000
const baseUrl = "https://anapioficeandfire.com/api/characters/"
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static("public"))


app.get('/', async (req, res) =>{
    try {
        const actor = character()
    function character(){
        return Math.floor(Math.random()* 600)+1
    }
        const result = await axios.get(baseUrl + actor)
        res.render("index.ejs", {content: result.data})
        console.log(result)
    } catch (error) {
        console.error("Error fetchin data: ", error.message)
    }
})

app.listen(port, ()=>{
    console.log("listen at port "+ port)
})