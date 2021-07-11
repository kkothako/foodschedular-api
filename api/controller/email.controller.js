const nodemailer = require('nodemailer');
const emailModel = require('../model/email.model')
exports.sendEmail = ((request, response) => {

    const model = new emailModel(request.body);

    var mailOptions = {
        from: '"Food Schedular" <foodschedule126@gmail.com>',
        to: model.to,
        bcc: model.bcc,
        subject: model.subject,
        html: model.body
    };

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: false,
        auth: {
            user: 'foodschedule126@gmail.com',
            pass: 'Margolive2022!'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    transporter.sendMail(mailOptions, (error, info) => {
        debugger;
        if (error) {
            response.status(400);
            response.json({ status: false, error: "Failed to send email"+ error });
        } else {
            console.log("Email has been sent");
            response.json({status: true, data: `Email has been sent to ${model.to}`});
        }
    });
});