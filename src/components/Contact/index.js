import { Form, Input, Textarea } from 'react-form-lite';

import { Container } from "./styles";
import Title from "../Title";
import { useState } from 'react';

function Contact() {
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState({});
  const [formData, setFormData] = useState({});

  function phoneMask(oldValue) {
    let value = oldValue.replace(/\D/g,"");
    value = value.replace(/^(\d{2})(\d)/g,"($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2");

    if (value.length > 15)
      return oldValue.substring(0, 15);

    return value;
  }

  function handleChange(data) {
    setFormData(formData => {
      if (data.phone)
        data.phone = phoneMask(data.phone);

      return data;
    });
  }

  function handleSubmit(body) {
    setDisabled(true);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch(`https://consultx.net.br/api/contact`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => {
      setMessage({
        text: res.message,
        success: true
      })
    })
    .catch(err => {
      setMessage({
        text: err.message,
        success: false
      })
    })
    .finally(() => setDisabled(false));
  }

  return (
    <Container id="contact">
      <Title>FALE CONOSCO</Title>
      <p>Entre em contato conosco e receba um retorno em menos de 2 horas.</p>

      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        {message.text &&
          <div className={`alert ${message.success ? 'success' : 'error'}`}>
            { message.text }
          </div>
        }

        <label>
          <span>Nome</span>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu nome..."
            required
            value={formData['name']}
            className="form-input"
          />
        </label>

        <label>
          <span>E-mail</span>
          <Input
            type="email"
            name="email"
            placeholder="Digite seu email..."
            required
            value={formData['email']}
            className="form-input"
          />
        </label>

        <label>
          <span>Telefone</span>
          <Input
            type="numeric"
            name="phone"
            placeholder="Digite seu telefone..."
            required
            value={formData['phone']}
            className="form-input"
          />
        </label>

        <label>
          <span>Message</span>
          <Textarea
            name="message"
            value={formData['message']}
            required
            className="form-input"
          />
        </label>

        <button type="submit" className="form-button" disabled={disabled}>
          { disabled ? 'ENVIANDO...' : 'ENVIAR' }
        </button>
      </Form>
    </Container>
  );
}

export default Contact;
