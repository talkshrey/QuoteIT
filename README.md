# QuoteIT


## Purpose of the Application:
 
 Most of our time is spent finding the best prices from suppliers. To make it easier for a company to send their requirements and get the prices from multiple vendors, we have created a web and app portal. When a client raises a request for a good, a vendor gets a WhatsApp notification. The link on the WhatsApp notification asks the Vendor to Sign in and see the Requirement Document and Post a quote. We have allowed the Client to create the document and assign fields for Name & Quantity which the vendor can fill. The client can see all the vendor bids easily and select one of them.

## Installation and Running
### Setup backend server

Clone the repository in your local machine.

#### ENV Variables
Create a .env file in the root directory and then add the following

PORT=The port at which you want to run the backend server on

DATABASE_URL=the link of your MongoDB database

TWILIO_ACCOUNT_SID=your Twilio account sid for sending the WhatsApp message (available in your Twilio console)

TWILIO_AUTH_TOKEN=your Twilio account authentication token for sending the WhatsApp message (available in your Twilio console)

TOKEN_SECRET=your jwt secret

EMAIL_ACCOUNT=your email account which is to be used for the auto-emailing service

EMAIL_PASSWORD=the password for the email account which is used for the auto-email service

#### Installing dependencies
Install all the dependencies required for the backend to run, by the command:
```bash
npm install
```
#### Run
To run the server, use the command:
```bash
npm run dev
```

If you get a message like below in the terminal, it means that your backend server is up and running and you can continue with the rest of the project

[![image.png](https://i.postimg.cc/5NkK1qcr/image.png)](https://postimg.cc/qzyxxKvc)


### Functionalities Included:
     1. Login and Signup with Authentication, where the user can select its Role.
     2. Customized welcome email send to the user on Signup (depending on whether he/she is a client or a vendor)
     3. E-Market space allows the Client to browse through various categories and narrow down to final choices.
     4. The Client finalizes the choices and posts a query, to which a WhatsApp notification(which includes link to QuoteIT's 
     App or Web) is sent to all the Potential vendors who sell the product which the client is looking for.
     5. The vendor receives the WhatsApp notification and the link will redirect the vendor to register on the QuoteIT's Platform.
     6. The Vendor uploads the quotation for the query, from his dashboard.
     7. The client receives an email notification stating that their query has been responded with a quotation.
     8. The client can check their dashboard where the quotation posted by the vendor is reflected.
