import express from 'express';

import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';

const app = express();

app.use(express.static('public'));


//Create middleware 
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Start APIs
app.get('/api/word_game', (req, res) => {

    const sentence = req.query.sentence;

    if(!sentence){
        res.json({
            error : 'Please insert a sentence'
        })
    }
    
    res.json({
        'message' : sentence.toLowerCase(),
        'longestWord' : longestWord(sentence),
        'shortestWord' : shortestWord(sentence),
        'sum' : sentence.length
    });
});

let callP = 2.75
let smsP = 0.65
app.post('/api/phonebill/total', (req, res) => {
    console.log('called post route...')

    const bill = req.body.bill
    console.log(req.body)
    
    res.json ({
        total: totalPhoneBill(bill, callP, smsP)
    })

    //const totalPhoneBill = req.body.totalPhoneBill

});

app.get('/api/phonebill/prices', (req, res) => {

    res.json({
        call : callP,
        sms : smsP
    })
})

app.post('/api/phonebill/price', (req, res) => {

    const type = req.body.type
    const price = req.body.price

    if(type === 'sms') {
        smsP = price
    } 
    else if(type === 'call') {
        callP = price
    }

    res.json ({
        type, price
    })
})


// app.get('/api/phonebill/total', (req, res) => {
//     const alerts = req.query.bill;
//     console.log(alerts)
//     res.json({
//         total: totalPhoneBill(alerts)
//     })
// });

app.get('/api/phonebill/prices', (req, res) => {
    
});

// app.post('/api/phonebill/prices', (req, res) => {

// })
const port = process.env.PORT || 6007;
app.listen(port, () => console.log(`listen on port ${port}...`))