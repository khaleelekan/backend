import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Raheemjr@123",
  port: 5432
})

db.connect();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted(){
  const result = await db.query( "SELECT country_code FROM visited_countries ")
  const countries = []
  result.rows.forEach(country => {
    countries.push(country.country_code)
})
return countries
}

app.get("/", async (req, res) => {
  //Write your code here.
const countries = await checkVisisted()
res.render("index.ejs",{countries : countries , total: countries.length})
});

app.post("/add", async (req, res)=>{
  const input = req.body["country"]
  const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1 ",[input])

  if (result.rows.length !== 0){
    const data = result.rows[0]
    const countryCode = data.country_code;

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)" ,[countryCode])
  }
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
