import express from 'express'
import bodyParser from 'body-parser'
import pg from 'pg'
import axios from 'axios';

const app = express();
const port = 3000

const options = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {
      s: 'Avengers Endgame',
      r: 'json',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }

app.listen(port ,()=>{
    console.log(`listening on port ${port}`)
})