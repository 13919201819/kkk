// // import styles from './partner.module.css';
// // import { Handshake } from "lucide-react";

// // export default function Partner() {
// //   return (
// //     <section id="partner" className={`${styles.section} relative`}>
// //       {/* Indigo Cosmos Background */}
// //       <div
// //         className="absolute inset-0 z-0"
// //         style={{
// //           background:
// //             "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
// //         }}
// //       />

// //       {/* Content */}
// //       <div className="container mx-auto relative z-10 text-center">
// //         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //           Accelerate your journey through CLUMOSS
// //         </h2>
// //         <button className={`${styles.button} flex items-center justify-center mx-auto`}>
// //           <Handshake className="mr-2 w-5 h-5" />
// //           Lets Partner Up
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import React from "react";
// import styles from "./partner.module.css";
// import Button from "@/components/ui/Button";
// import { Handshake } from "lucide-react"; // example icon

// const Partner = () => {
//   return (
//     <section className={styles.partnerSection}>
//       <div className={styles.partnerContainer}>
//         <h2 className={styles.partnerHeading}>
//           Accelerate your journey <br /> through CLUMOSS
//         </h2>

//         <Button
//           text="Let's Partner Up"
//           icon={<Handshake size={20} />}
//           className="mt-6"
//         />
//       </div>
//     </section>
//   );
// };

// export default Partner;



import styles from "./partner.module.css";
import { Users } from "lucide-react";
import Button from "@/components/ui/Button";
import { Handshake } from "lucide-react";

export default function Partner() {
  return (
    <section
      id="partner"
      className={`${styles.section} relative flex items-center justify-center`}
    >
      {/* Indigo Cosmos Background (same as About section) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-snug">
          Accelerate your journey <br /> through CLUMOSS
        </h2>
        <Button 
          text="Let's Partner Up" 
          icon={<Handshake size={20} />} 
        />
      </div>
    </section>
  );
}

