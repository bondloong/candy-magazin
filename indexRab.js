const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {

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
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'joy.douglas4@ethereal.email',
                pass: 'ptQWFnA7sVv2rG6Vjr'
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'joy.douglas4@ethereal.email',
            replayTo: 'test@testaccount.com',
            subject: 'New Message',
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