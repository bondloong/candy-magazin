const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var fs = require('fs')
const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    console.log(req.body)
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Детали контакта </h3>
        <ul>
            <li>Имя: ` + req.body._fName + `<li>
            <li>Фамилия: ` + req.body._sName + `<li>
            <li>Email: ` + req.body._mail + `<li>
        </ul>
        <h3>Сообщение</h3>
        <p>` + req.body.message + `<p>
        `

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "gmail login",
                pass: "gmail password"
            }
        })

        let mailOptions = {
            from: 'example@gmail.com',
            to: ['client@gmail.com', req.body._mail],
            // replayTo: 'test@testaccount.com',
            subject: 'Товары',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log('Сообщение отправлено: %s', info.message)
            console.log('URL Сообщения: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001



app.listen(PORT, () => {
    console.log(`Sever listening on port ${PORT}`)
})