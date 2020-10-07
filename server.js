require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'example@gmail.com',
    to: 'client@gmail.com',
    subject: 'Новый заказ',
    text: 'Works'
}

// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         console.log('Error');
//     } else {
//         console.log('Sent');
//     }
// })

transporter.sendMail(mailOptions)
    .then(response => {
        console.log('Sent');
    })
    .catch(error => {
        console.log('Error', error)
    });