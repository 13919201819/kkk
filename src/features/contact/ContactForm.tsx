// // import { useState } from 'react';
// // import styles from './contact.module.css';

// // export default function ContactForm() {
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     alert('Form submitted! (This is a demo)');
// //     setFormData({ name: '', email: '', message: '' });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className={styles.form}>
// //       <div className={styles.formGroup}>
// //         <label htmlFor="name" className={styles.label}>Name</label>
// //         <input
// //           type="text"
// //           id="name"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           className={styles.input}
// //           required
// //         />
// //       </div>
// //       <div className={styles.formGroup}>
// //         <label htmlFor="email" className={styles.label}>Email</label>
// //         <input
// //           type="email"
// //           id="email"
// //           name="email"
// //           value={formData.email}
// //           onChange={handleChange}
// //           className={styles.input}
// //           required
// //         />
// //       </div>
// //       <div className={styles.formGroup}>
// //         <label htmlFor="message" className={styles.label}>Message</label>
// //         <textarea
// //           id="message"
// //           name="message"
// //           value={formData.message}
// //           onChange={handleChange}
// //           className={styles.textarea}
// //           rows={5}
// //           required
// //         />
// //       </div>
// //       <button type="submit" className={styles.button}>Send Message</button>
// //     </form>
// //   );
// // }

// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion'; // Already using named import

// interface ContactFormProps {
//   setSubmitted: (value: boolean) => void;
// }

// export default function ContactForm({ setSubmitted }: ContactFormProps) {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       if (res.ok) {
//         setSubmitted(true);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <motion.form
//       className="glassmorphism p-6 rounded-lg space-y-4"
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div>
//         <label htmlFor="name" className="block text-sm mb-1">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email" className="block text-sm mb-1">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="message" className="block text-sm mb-1">
//           Message
//         </label>
//         <textarea
//           id="message"
//           value={formData.message}
//           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//           className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
//           rows={4}
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="glassmorphism px-6 py-2 rounded-full hover:bg-blue-500 transition-colors"
//       >
//         Send Message
//       </button>
//     </motion.form>
//   );
// }






'use client';

import { useState } from 'react';
import { motion } from 'framer-motion'; // Already using named import

interface ContactFormProps {
  setSubmitted: (value: boolean) => void;
}

export default function ContactForm({ setSubmitted }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.form
      className="glassmorphism p-6 rounded-lg space-y-4"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-1">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="glassmorphism px-6 py-2 rounded-full hover:bg-blue-500 transition-colors"
      >
        Send Message
      </button>
    </motion.form>
  );
}