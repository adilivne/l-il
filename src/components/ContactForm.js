//  import React from 'react';
//  import { useForm, ValidationError } from '@formspree/react';
//  const sgMail = require('@sendgrid/mail');
//   //Form.js
// class ContactForm extends React.Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//     sendmail();

//     function sendmail() {
      
//       sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//       const msg = {
//         to: 'adi.livne@gmail.com',
//         from: 'adi.livne@gmail.com',
//         subject: 'Sending with SendGrid is Fun',
//         text: 'and easy to do anywhere, even with Node.js',
//         html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//       };

//       sgMail.send(msg);

//   }

//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);

//     fetch('www.google.com', {
//       method: 'POST',
//       body: data,
//     });
  
  
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="username">Enter username</label>
//         <input id="username" name="username" type="text" />

//         <label htmlFor="email">Enter your email</label>
//         <input id="email" name="email" type="email" />

//         <label htmlFor="birthdate">Enter your birth date</label>
//         <input id="birthdate" name="birthdate" type="text" />

//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }
 

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mgerayoy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
      <div id="contact" style={{ backgroundColor: "#e8eaf6" }}>
    <form action="https://formspree.io/f/mgerayoy" method="post">
  <label for="email">Your Email</label>
  <input name="Email" id="email" type="email"></input>
  <button type="submit">Submit</button>

</form>
</div>
  );
}

 export default ContactForm;

