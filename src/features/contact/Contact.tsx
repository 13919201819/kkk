'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import styles from './contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className={`${styles.contact} py-20 px-6`} id="contact">
      <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="max-w-2xl mx-auto">
        {submitted ? (
          <p className="text-center text-lg">Thank you! We’ll get back to you soon.</p>
        ) : (
          <ContactForm setSubmitted={setSubmitted} />
        )}
      </div>
    </section>
  );
}