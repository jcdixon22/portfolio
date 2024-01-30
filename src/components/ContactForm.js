import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

  // Functions that change the contact page upon submission
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call both sendEmail and setSubmitted
    sendEmail(e);
    setSubmitted(true);
  };

  // Functions that send the email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hcdk96x', 'template_j6y0g9o', form.current, '7C_pkEcud8D_XGfqr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // Functions to adjust message box height dynamically
  const [message, setMessage] = useState('');
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const calculateRowCount = () => {
    const rowCount = (message.match(/\n/g) || []).length + 1;
    return rowCount < 3 ? 3 : rowCount;
  };

  return (
    <div>
        {!submitted && (
            <form className='contact-row' ref={form} onSubmit={handleSubmit}>
            <label className='contact-header'>Name</label>
            <input className='contact-general' required type="text" name="user_name" />
            <label className='contact-header'>Email</label>
            <input className='contact-general' required type="email" name="user_email" />
            <label className='contact-header'>Message</label>
            <textarea 
                value={message}
                className='contact-message'
                required
                spellCheck="true"
                name="message"
                onChange={handleMessageChange}
                rows={calculateRowCount()}/>
            <input className='contact-submit' type="submit" value="Send" />
            </form>
        )}
        {submitted && (
        <div>
            <div className='contact-recieved'>
                Thank you for your message. I will respond as soon as possible.
            </div>
            <div className='contact-recieved'>
                In the meantime, feel free to check out some of my projects <a className='contact-project-link' href='/engineering'>here</a>.
            </div>

        </div>
      )}
    </div>
  );
}

export default ContactForm;