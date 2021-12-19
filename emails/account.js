// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "quote.it@outlook.com",
//     pass: process.env.EMAIL_PASSWORD
//   }
// })

// const sendWelcomeEmail = (email, name, role) => transporter.sendMail({
//   from: "lokitavarma282@gmail.com",
//   to: email,
//   subject: "Welcome to QuoteIT",
//   text: `Thanks for joining us, ${name}. QuoteIT is the best place for the best prices! Get started now by ${user.role === 'client' ? 'raising a query' : 'posting a quotation' } ! Regards, QuoteIT`
// }, (err, info) => {
//   if(err){
//     console.log('ERROR')
//     return console.log(err)
//   }
//   console.log("Message sent: %s", info.messageId);
// })

// const sendNotification = (email, quoteOf) => transporter.sendMail({
//     from: "quote.it@outlook.com",
//     to: email,
//     subject: "A vendor replied to your query!",
//     text: `A vendor has replied to your query of ${quoteOf}. Login yo your dashboard to get the best prices. Regards, QuoteIT`
//   }, (err, info) => {
//     if(err){
//       console.log('ERROR')
//       return console.log(err)
//     }
//     console.log("Message sent: %s", info.messageId)
// })

// export {
//   sendWelcomeEmail,
//   sendNotification
// }
