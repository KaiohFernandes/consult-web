const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  const key = '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';

  sgMail.setApiKey(key);
  const content = {
    to: 'kaiohfernandes15@gmail.com',
    from: 'kaiohfernandes15@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
