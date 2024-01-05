import { useEffect, useState } from "react";
import React from "react";
import emailjs from '@emailjs/browser';
function Digital(){
  
    // Example JavaScript code using EmailJS
const templateParams = {
    user: 'John Doe',
  };
  
  emailjs.send('service_2nrmpj7', 'template_dkhnmur', templateParams, 'YqyHpfeECsAI5B1c8')
    .then(response => console.log('Email sent successfully:', response))
    .catch(error => console.error('Email failed to send:', error));

}
export default Digital;