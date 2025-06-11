// // // 'use client';

// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { useRouter } from 'next/navigation';

// // export default function AIAssistant() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [message, setMessage] = useState('');
// //   const router = useRouter();

// //   const handleVoiceCommand = () => {
// //     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// //     recognition.onresult = (event: SpeechRecognitionEvent) => {
// //       const command = event.results[0][0].transcript.toLowerCase();
// //       setMessage(command);
// //       if (command.includes('go to contact')) {
// //         router.push('/contact');
// //       } else if (command.includes('go to projects')) {
// //         router.push('/projects');
// //       }
// //     };
// //     recognition.start();
// //   };

// //   return (
// //     <div className="fixed bottom-6 right-6 z-50">
// //       <motion.button
// //         className="glassmorphism p-4 rounded-full"
// //         onClick={() => setIsOpen(!isOpen)}
// //         whileHover={{ scale: 1.1 }}
// //       >
// //         💬
// //       </motion.button>
// //       {isOpen && (
// //         <motion.div
// //           className="glassmorphism p-4 rounded-lg mt-2 w-64"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //         >
// //           <button onClick={handleVoiceCommand} className="mb-2 text-blue-400">
// //             🎙️ Voice Command
// //           </button>
// //           <input
// //             type="text"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 mb-2"
// //             placeholder="Type or speak..."
// //           />
// //           <button
// //             onClick={() => {
// //               if (message.toLowerCase().includes('contact')) {
// //                 router.push('/contact');
// //               } else if (message.toLowerCase().includes('projects')) {
// //                 router.push('/projects');
// //               }
// //             }}
// //             className="glassmorphism px-4 py-2 rounded-full hover:bg-blue-500"
// //           >
// //             Send
// //           </button>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // }


// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion'; // Already using named import
// import { useRouter } from 'next/navigation';

// export default function AIAssistant() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const router = useRouter();

//   const handleVoiceCommand = () => {
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.onresult = (event: SpeechRecognitionEvent) => {
//       const command = event.results[0][0].transcript.toLowerCase();
//       setMessage(command);
//       if (command.includes('go to contact')) {
//         router.push('/contact');
//       } else if (command.includes('go to projects')) {
//         router.push('/projects');
//       }
//     };
//     recognition.start();
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <motion.button
//         className="glassmorphism p-4 rounded-full"
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.1 }}
//       >
//         💬
//       </motion.button>
//       {isOpen && (
//         <motion.div
//           className="glassmorphism p-4 rounded-lg mt-2 w-64"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <button onClick={handleVoiceCommand} className="mb-2 text-blue-400">
//             🎙️ Voice Command
//           </button>
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 mb-2"
//             placeholder="Type or speak..."
//           />
//           <button
//             onClick={() => {
//               if (message.toLowerCase().includes('contact')) {
//                 router.push('/contact');
//               } else if (message.toLowerCase().includes('projects')) {
//                 router.push('/projects');
//               }
//             }}
//             className="glassmorphism px-4 py-2 rounded-full hover:bg-blue-500"
//           >
//             Send
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// }




'use client';

import { useState} from 'react';
import { motion } from 'framer-motion'; // Already using named import
import { useRouter } from 'next/navigation';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleVoiceCommand = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const command = event.results[0][0].transcript.toLowerCase();
      setMessage(command);
      if (command.includes('go to contact')) {
        router.push('/contact');
      } else if (command.includes('go to projects')) {
        router.push('/projects');
      }
    };
    recognition.start();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        className="glassmorphism p-4 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
      >
        💬
      </motion.button>
      {isOpen && (
        <motion.div
          className="glassmorphism p-4 rounded-lg mt-2 w-64"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button onClick={handleVoiceCommand} className="mb-2 text-blue-400">
            🎙️ Voice Command
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 mb-2"
            placeholder="Type or speak..."
          />
          <button
            onClick={() => {
              if (message.toLowerCase().includes('contact')) {
                router.push('/contact');
              } else if (message.toLowerCase().includes('projects')) {
                router.push('/projects');
              }
            }}
            className="glassmorphism px-4 py-2 rounded-full hover:bg-blue-500"
          >
            Send
          </button>
        </motion.div>
      )}
    </div>
  );
}