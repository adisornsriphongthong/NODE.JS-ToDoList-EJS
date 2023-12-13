const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {list})
})

let count = 0;
let list = []; // lst [{number : 1}]
app.post('/hello', (req, res) => {
    count += 1;
    list.push(count)
    res.render('index', {list})

    app.post('/delete', (req, res) => {
        const value = req.body.button;
        list = list.filter((e) => {
            return value == e ? false : true;
        })
    
    res.render('index', {list})
    })
})


const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port)
})
