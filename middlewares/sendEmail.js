const nodeMailer=require("nodemailer")
exports.sendEmail=async(options)=>{
    var transport = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "e0f762a57f26b1",
          pass: "94900b5734312d"
        }
      });
    const mailOptions={
        from: process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,
    }
    await transport.sendMail(mailOptions)
}

// this is som