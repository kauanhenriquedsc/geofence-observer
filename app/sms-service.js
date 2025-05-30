const twilio = require('twilio');


const accountSid = '-';
const authToken = '-';
const twilioNumber = '-'; 

const client = twilio(accountSid, authToken);

async function sendSMS(to, message) {
    try {
        await client.messages.create({
            body: message,
            from: twilioNumber,
            to: to
        });
        console.log('send sms', to);
    } catch (err) {
        console.error('erro for send sms:', err.message);
    }
}


module.exports = { sendSMS };
