import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express()
const port = 8000

app.use(cors());

app.get('/kanyeshibaquote', async (req, res) => {
	const quoteRes = await fetch('https://api.kanye.rest/');
	const quoteData = await quoteRes.json();
	const shibaRes = await fetch('http://shibe.online/api/shibes?count=1');
	const shibaPic = await shibaRes.json();
	res.send({pic: shibaPic[0], quote: quoteData.quote});
})

app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
})
