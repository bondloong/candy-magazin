const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);


const timeMiddleware = (req, res, next) => {
    req.date = Date.now();
    next();
};

app.use(timeMiddleware);

app.get('/about', (req, res, next) => {
    res.send('about ' + req.date);
})




app.listen(port, () => console.log(`listening on http://localhost:${port}`));