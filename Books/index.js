import express from 'express'
import bodyParser from 'body-parser'
import pg from 'pg'
import axios from 'axios';

const app = express();
const port = 3000

app.get('/', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://football-prediction-api.p.rapidapi.com/api/v2/head-to-head/81930',
        params: { limit: '10' },
        headers: {
            'X-RapidAPI-Key': '57f062c3e9mshc7f3b282bac97a3p17b51fjsna7c4067e0fbc',
            'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.get(options.url);
        const bookData = response.data; // Assuming this response contains book data including the image
        res.render('book-review', { bookData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching book data');
    }
});


app.listen(port ,()=>{
    console.log(`listening on port ${port}`)
})