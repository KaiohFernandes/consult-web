const mailjet = require('node-mailjet')
.connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(404).send({ error: "Page not found" });
    return;
  }

  try {
    const { email, name, message, phone } = req.body;

    const body = `
      <b>Nome: </b> ${name} <br/>
      <b>Email: </b> ${email} <br/>
      <b>Telefone: </b> ${phone} <br/>
      <b>Mensagem: </b> ${message}
    `;

    const request = mailjet
      .post("send", {'version': 'v3.1'})
      .request({
        "Messages":[
          {
            "From": {
              "Email": process.env.EMAIL_SENDER,
              "Name": "Consult - Contato"
            },
            "To": [
              {
                "Email": process.env.EMAIL_RECEIVER,
                "Name": "Consult - Crédito Inteligente"
              }
            ],
            "Subject": "Contato pelo site",
            "TextPart": "",
            "HTMLPart": body,
            "CustomID": "AppGettingStartedTest"
          }
        ]
      })

    request
      .then(result => {
        res.json({ message: "Mensagem enviada com sucesso." });
      })
      .catch(err => {
        throw new Error(err);
      });

  } catch(err) {
    res
      .status(404)
      .send({ message: "Falha ao enviar a mensagem" });
  }


}
