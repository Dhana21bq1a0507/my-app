import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [otp, setOtp] = useState(null);

  const generateOTP = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const sendOTP = (email) => {
    const generatedOtp = generateOTP();
    setOtp(generatedOtp);

  

  

    emailjs.send('service_hn0rv12', 'template_ys3qyuo', { to: email }, 'eDkVE9ZXBi_ftgNxt')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const userEnteredOtp = formData.get('otp');

    if (userEnteredOtp && parseInt(userEnteredOtp) === otp) {
      window.alert('OTP is correct. Sending email...');
      // Proceed with sending the email using emailjs or perform other actions.
    } else {
      window.alert('Incorrect OTP. Please try again.');
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="to" />
      <button type="button" onClick={() => sendOTP(form.current['to'].value)}>Send OTP</button>
      <label>Enter OTP</label>
      <input type="text" name="otp" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;