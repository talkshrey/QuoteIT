import nodemailer from 'nodemailer';

import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD
  }
})

const sendWelcomeEmail = (email, name, role) => transporter.sendMail({
  from: process.env.EMAIL_ACCOUNT,
  to: email,
  subject: "Welcome to QuoteIT",
  text: `Thanks for joining us, ${name}. 
  
  QuoteIT is the best place for the best prices! Get started now by ${role === 'client' ? 'raising a query' : 'posting a quotation' }!
  
  Regards, QuoteIT`
}, (err, info) => {
  if(err){
    return console.log(err)
  }
  console.log("Message sent: %s", info.messageId);
})

const sendNotification = (email, quoteOf) => transporter.sendMail({
    from: process.env.EMAIL_ACCOUNT,
    to: email,
    subject: "A vendor replied to your query!",
    text: `A vendor has replied to your query of ${quoteOf}.
    
    Login to your dashboard to get the best prices.
    
    Regards, QuoteIT.`
  }, (err, info) => {
    if(err){
      console.log('ERROR')
      return console.log(err)
    }
    console.log("Message sent: %s", info.messageId)
})

export {
  sendWelcomeEmail,
  sendNotification
}
