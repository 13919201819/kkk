// // 'use client';

// // import { useState } from 'react';
// // import ContactForm from './ContactForm';
// // import styles from './contact.module.css';

// // export default function Contact() {
// //   const [submitted, setSubmitted] = useState(false);

// //   return (
// //     <section className={`${styles.contact} py-20 px-6`} id="contact">
// //       <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
// //       <div className="max-w-2xl mx-auto">
// //         {submitted ? (
// //           <p className="text-center text-lg">Thank you! We’ll get back to you soon.</p>
// //         ) : (
// //           <ContactForm setSubmitted={setSubmitted} />
// //         )}
// //       </div>
// //     </section>
// //   );
// // }







// 'use client';

// import { useState } from 'react';
// import { ChevronDown, Building2, GraduationCap, Eye, Users, Send, CheckCircle } from 'lucide-react';

// const userRoles = [
//   {
//     id: 'client',
//     label: 'Business Client',
//     icon: Building2,
//     description: 'Looking for enterprise solutions',
//     fields: ['company', 'position', 'budget', 'timeline', 'requirements']
//   },
//   {
//     id: 'student',
//     label: 'Student/Graduate',
//     icon: GraduationCap,
//     description: 'Seeking jobs or apprenticeships',
//     fields: ['university', 'degree', 'experience', 'skills', 'availability']
//   },
//   {
//     id: 'demo',
//     label: 'Demo Request',
//     icon: Eye,
//     description: 'Want to see our solutions',
//     fields: ['interest', 'useCase', 'teamSize', 'timeline']
//   },
//   {
//     id: 'other',
//     label: 'Other Inquiry',
//     icon: Users,
//     description: 'General questions or partnerships',
//     fields: ['inquiryType', 'organization', 'message']
//   }
// ];

// const fieldLabels = {
//   company: 'Company Name',
//   position: 'Your Position',
//   budget: 'Project Budget Range',
//   timeline: 'Expected Timeline',
//   requirements: 'Project Requirements',
//   university: 'University/Institution',
//   degree: 'Degree/Field of Study',
//   experience: 'Years of Experience',
//   skills: 'Technical Skills',
//   availability: 'Availability to Start',
//   interest: 'Area of Interest',
//   useCase: 'Primary Use Case',
//   teamSize: 'Team Size',
//   inquiryType: 'Type of Inquiry',
//   organization: 'Organization (if applicable)',
//   message: 'Your Message'
// };

// const fieldTypes = {
//   budget: 'select',
//   timeline: 'select',
//   experience: 'select',
//   teamSize: 'select',
//   inquiryType: 'select',
//   requirements: 'textarea',
//   skills: 'textarea',
//   message: 'textarea'
// };

// const selectOptions = {
//   budget: ['Under $10K', '$10K - $50K', '$50K - $100K', '$100K - $500K', '$500K+'],
//   timeline: ['1-2 weeks', '1 month', '2-3 months', '3-6 months', '6+ months'],
//   experience: ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'],
//   teamSize: ['1-5 people', '6-20 people', '21-50 people', '51-200 people', '200+ people'],
//   inquiryType: ['Partnership', 'Investment', 'Media/Press', 'Technical Support', 'General Question']
// };

// export default function Contact() {
//   const [selectedRole, setSelectedRole] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleRoleSelect = (role) => {
//     setSelectedRole(role);
//     // Reset dynamic fields when role changes
//     const newFormData = { name: formData.name, email: formData.email, phone: formData.phone };
//     setFormData(newFormData);
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     setSubmitted(true);
//   };

//   const renderField = (fieldKey) => {
//     const label = fieldLabels[fieldKey];
//     const type = fieldTypes[fieldKey] || 'text';
//     const value = formData[fieldKey] || '';

//     if (type === 'select') {
//       return (
//         <div key={fieldKey} className="mb-6">
//           <label className="block text-white mb-2 font-medium">{label}</label>
//           <div className="relative">
//             <select
//               value={value}
//               onChange={(e) => handleInputChange(fieldKey, e.target.value)}
//               className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//               required
//             >
//               <option value="" className="text-gray-800">Select {label}</option>
//               {selectOptions[fieldKey]?.map(option => (
//                 <option key={option} value={option} className="text-gray-800">{option}</option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//           </div>
//         </div>
//       );
//     }

//     if (type === 'textarea') {
//       return (
//         <div key={fieldKey} className="mb-6">
//           <label className="block text-white mb-2 font-medium">{label}</label>
//           <textarea
//             value={value}
//             onChange={(e) => handleInputChange(fieldKey, e.target.value)}
//             className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm resize-none"
//             rows={4}
//             placeholder={`Enter ${label.toLowerCase()}...`}
//             required
//           />
//         </div>
//       );
//     }

//     return (
//       <div key={fieldKey} className="mb-6">
//         <label className="block text-white mb-2 font-medium">{label}</label>
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => handleInputChange(fieldKey, e.target.value)}
//           className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//           placeholder={`Enter ${label.toLowerCase()}...`}
//           required
//         />
//       </div>
//     );
//   };

//   if (submitted) {
//     return (
//       <section className="min-h-screen w-full relative bg-black py-20 px-6" id="contact">
//         {/* Indigo Cosmos Background with Top Glow */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
//           }}
//         />
        
//         <div className="relative z-10 max-w-2xl mx-auto text-center">
//           <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
//             <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
//             <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
//             <p className="text-gray-300 text-lg mb-6">
//               Your message has been received. Our AI system is processing your request based on your profile.
//             </p>
//             <p className="text-indigo-300">
//               We'll get back to you within 24 hours with a personalized response.
//             </p>
//             <button
//               onClick={() => {
//                 setSubmitted(false);
//                 setSelectedRole(null);
//                 setFormData({ name: '', email: '', phone: '' });
//               }}
//               className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
//             >
//               Send Another Message
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen w-full relative bg-black py-20 px-6" id="contact">
//       {/* Indigo Cosmos Background with Top Glow */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
//         }}
//       />
      
//       <div className="relative z-10 max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
//           <p className="text-xl text-gray-300">
//             Our AI-powered system will customize your experience based on your needs
//           </p>
//         </div>

//         {!selectedRole ? (
//           // Role Selection
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
//             {userRoles.map((role) => {
//               const IconComponent = role.icon;
//               return (
//                 <button
//                   key={role.id}
//                   onClick={() => handleRoleSelect(role)}
//                   className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105"
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="bg-indigo-500/20 p-3 rounded-xl group-hover:bg-indigo-500/30 transition-colors">
//                       <IconComponent className="w-6 h-6 text-indigo-400" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-white mb-2">{role.label}</h3>
//                       <p className="text-gray-400">{role.description}</p>
//                     </div>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         ) : (
//           // Dynamic Form
//           <div className="max-w-2xl mx-auto">
//             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center space-x-3">
//                   {(() => {
//                     const IconComponent = selectedRole.icon;
//                     return <IconComponent className="w-6 h-6 text-indigo-400" />;
//                   })()}
//                   <h3 className="text-2xl font-bold text-white">{selectedRole.label}</h3>
//                 </div>
//                 <button
//                   onClick={() => setSelectedRole(null)}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Change Role
//                 </button>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Basic Fields */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-white mb-2 font-medium">Full Name</label>
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={(e) => handleInputChange('name', e.target.value)}
//                       className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//                       placeholder="Enter your full name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-white mb-2 font-medium">Email Address</label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => handleInputChange('email', e.target.value)}
//                       className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//                       placeholder="Enter your email"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-white mb-2 font-medium">Phone Number</label>
//                   <input
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => handleInputChange('phone', e.target.value)}
//                     className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//                     placeholder="Enter your phone number"
//                     required
//                   />
//                 </div>

//                 {/* Dynamic Fields Based on Role */}
//                 <div className="border-t border-white/10 pt-6">
//                   <h4 className="text-lg font-semibold text-white mb-4">
//                     Additional Information
//                   </h4>
//                   {selectedRole.fields.map(renderField)}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//                 >
//                   {isSubmitting ? (
//                     <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }





// 'use client';

// import { useState } from 'react';
// import { ChevronDown, Building2, GraduationCap, Eye, Users, Send, CheckCircle, LucideIcon } from 'lucide-react';

// // Type definitions
// interface UserRole {
//   id: string;
//   label: string;
//   icon: LucideIcon;
//   description: string;
//   fields: string[];
// }

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   [key: string]: string;
// }

// interface FieldLabels {
//   [key: string]: string;
// }

// interface FieldTypes {
//   [key: string]: 'text' | 'select' | 'textarea';
// }

// interface SelectOptions {
//   [key: string]: string[];
// }

// const userRoles: UserRole[] = [
//   {
//     id: 'client',
//     label: 'Business Client',
//     icon: Building2,
//     description: 'Looking for enterprise solutions',
//     fields: ['company', 'position', 'budget', 'timeline', 'requirements']
//   },
//   {
//     id: 'student',
//     label: 'Student/Graduate',
//     icon: GraduationCap,
//     description: 'Seeking jobs or apprenticeships',
//     fields: ['university', 'degree', 'experience', 'skills', 'availability']
//   },
//   {
//     id: 'demo',
//     label: 'Demo Request',
//     icon: Eye,
//     description: 'Want to see our solutions',
//     fields: ['interest', 'useCase', 'teamSize', 'timeline']
//   },
//   {
//     id: 'other',
//     label: 'Other Inquiry',
//     icon: Users,
//     description: 'General questions or partnerships',
//     fields: ['inquiryType', 'organization', 'message']
//   }
// ];

// const fieldLabels: FieldLabels = {
//   company: 'Company Name',
//   position: 'Your Position',
//   budget: 'Project Budget Range',
//   timeline: 'Expected Timeline',
//   requirements: 'Project Requirements',
//   university: 'University/Institution',
//   degree: 'Degree/Field of Study',
//   experience: 'Years of Experience',
//   skills: 'Technical Skills',
//   availability: 'Availability to Start',
//   interest: 'Area of Interest',
//   useCase: 'Primary Use Case',
//   teamSize: 'Team Size',
//   inquiryType: 'Type of Inquiry',
//   organization: 'Organization (if applicable)',
//   message: 'Your Message'
// };

// const fieldTypes: FieldTypes = {
//   budget: 'select',
//   timeline: 'select',
//   experience: 'select',
//   teamSize: 'select',
//   inquiryType: 'select',
//   requirements: 'textarea',
//   skills: 'textarea',
//   message: 'textarea'
// };

// const selectOptions: SelectOptions = {
//   budget: ['Under $10K', '$10K - $50K', '$50K - $100K', '$100K - $500K', '$500K+'],
//   timeline: ['1-2 weeks', '1 month', '2-3 months', '3-6 months', '6+ months'],
//   experience: ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'],
//   teamSize: ['1-5 people', '6-20 people', '21-50 people', '51-200 people', '200+ people'],
//   inquiryType: ['Partnership', 'Investment', 'Media/Press', 'Technical Support', 'General Question']
// };

// export default function Contact() {
//   const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone: ''
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleRoleSelect = (role: UserRole) => {
//     setSelectedRole(role);
//     // Reset dynamic fields when role changes
//     const newFormData: FormData = { name: formData.name, email: formData.email, phone: formData.phone };
//     setFormData(newFormData);
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     setSubmitted(true);
//   };

//   const renderField = (fieldKey: string) => {
//     const label = fieldLabels[fieldKey];
//     const type = fieldTypes[fieldKey] || 'text';
//     const value = formData[fieldKey] || '';

//     if (type === 'select') {
//       return (
//         <div key={fieldKey} className="mb-6">
//           <label className="block text-white mb-2 font-medium">{label}</label>
//           <div className="relative">
//             <select
//               value={value}
//               onChange={(e) => handleInputChange(fieldKey, e.target.value)}
//               className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//               required
//               aria-label={label}
//             >
//               <option value="" className="text-gray-800">Select {label}</option>
//               {selectOptions[fieldKey]?.map(option => (
//                 <option key={option} value={option} className="text-gray-800">{option}</option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//           </div>
//         </div>
//       );
//     }

//     if (type === 'textarea') {
//       return (
//         <div key={fieldKey} className="mb-6">
//           <label className="block text-white mb-2 font-medium">{label}</label>
//           <textarea
//             value={value}
//             onChange={(e) => handleInputChange(fieldKey, e.target.value)}
//             className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm resize-none"
//             rows={4}
//             placeholder={`Enter ${label.toLowerCase()}...`}
//             required
//           />
//         </div>
//       );
//     }

//     return (
//       <div key={fieldKey} className="mb-6">
//         <label className="block text-white mb-2 font-medium">{label}</label>
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => handleInputChange(fieldKey, e.target.value)}
//           className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//           placeholder={`Enter ${label.toLowerCase()}...`}
//           required
//         />
//       </div>
//     );
//   };

//   if (submitted) {
//     return (
//       <section className="min-h-screen w-full relative bg-black py-20 px-6" id="contact">
//         {/* Indigo Cosmos Background with Top Glow */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
//           }}
//         />
        
//         <div className="relative z-10 max-w-2xl mx-auto text-center">
//           <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
//             <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
//             <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
//             <p className="text-gray-300 text-lg mb-6">
//               Your message has been received. Our AI system is processing your request based on your profile.
//             </p>
//             <p className="text-indigo-300">
//               Well get back to you within 24 hours with a personalized response.
//             </p>
//             <button
//               onClick={() => {
//                 setSubmitted(false);
//                 setSelectedRole(null);
//                 setFormData({ name: '', email: '', phone: '' });
//               }}
//               className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
//             >
//               Send Another Message
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen w-full relative bg-black py-20 px-6" id="contact">
//       {/* Indigo Cosmos Background with Top Glow */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
//         }}
//       />
      
//       <div className="relative z-10 max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
//           <p className="text-xl text-gray-300">
//             Our AI-powered system will customize your experience based on your needs
//           </p>
//         </div>

//         {!selectedRole ? (
//           // Role Selection
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
//             {userRoles.map((role) => {
//               const IconComponent = role.icon;
//               return (
//                 <button
//                   key={role.id}
//                   onClick={() => handleRoleSelect(role)}
//                   className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105"
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="bg-indigo-500/20 p-3 rounded-xl group-hover:bg-indigo-500/30 transition-colors">
//                       <IconComponent className="w-6 h-6 text-indigo-400" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-white mb-2">{role.label}</h3>
//                       <p className="text-gray-400">{role.description}</p>
//                     </div>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         ) : (
//           // Dynamic Form
//           <div className="max-w-2xl mx-auto">
//             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center space-x-3">
//                   {(() => {
//                     const IconComponent = selectedRole.icon;
//                     return <IconComponent className="w-6 h-6 text-indigo-400" />;
//                   })()}
//                   <h3 className="text-2xl font-bold text-white">{selectedRole.label}</h3>
//                 </div>
//                 <button
//                   onClick={() => setSelectedRole(null)}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Change Role
//                 </button>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Basic Fields */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-white mb-2 font-medium">Full Name</label>
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={(e) => handleInputChange('name', e.target.value)}
//                       className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//                       placeholder="Enter your full name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-white mb-2 font-medium">Email Address</label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => handleInputChange('email', e.target.value)}
//                       className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//                       placeholder="Enter your email"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-white mb-2 font-medium">Phone Number</label>
//                   <input
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => handleInputChange('phone', e.target.value)}
//                     className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
//                     placeholder="Enter your phone number"
//                     required
//                   />
//                 </div>

//                 {/* Dynamic Fields Based on Role */}
//                 <div className="border-t border-white/10 pt-6">
//                   <h4 className="text-lg font-semibold text-white mb-4">
//                     Additional Information
//                   </h4>
//                   {selectedRole.fields.map(renderField)}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//                 >
//                   {isSubmitting ? (
//                     <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from 'react';
import { ChevronDown, Building2, GraduationCap, Eye, Users, Send, CheckCircle, LucideIcon } from 'lucide-react';

// Type definitions
interface UserRole {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
  fields: string[];
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  [key: string]: string;
}

interface FieldLabels {
  [key: string]: string;
}

interface FieldTypes {
  [key: string]: 'text' | 'select' | 'textarea';
}

interface SelectOptions {
  [key: string]: string[];
}

const userRoles: UserRole[] = [
  {
    id: 'client',
    label: 'Business Client',
    icon: Building2,
    description: 'Looking for enterprise solutions',
    fields: ['company', 'position', 'budget', 'timeline', 'requirements']
  },
  {
    id: 'student',
    label: 'Student/Graduate',
    icon: GraduationCap,
    description: 'Seeking jobs or apprenticeships',
    fields: ['university', 'degree', 'experience', 'skills', 'availability']
  },
  {
    id: 'demo',
    label: 'Demo Request',
    icon: Eye,
    description: 'Want to see our solutions',
    fields: ['interest', 'useCase', 'teamSize', 'timeline']
  },
  {
    id: 'other',
    label: 'Other Inquiry',
    icon: Users,
    description: 'General questions or partnerships',
    fields: ['inquiryType', 'organization', 'message']
  }
];

const fieldLabels: FieldLabels = {
  company: 'Company Name',
  position: 'Your Position',
  budget: 'Project Budget Range',
  timeline: 'Expected Timeline',
  requirements: 'Project Requirements',
  university: 'University/Institution',
  degree: 'Degree/Field of Study',
  experience: 'Years of Experience',
  skills: 'Technical Skills',
  availability: 'Availability to Start',
  interest: 'Area of Interest',
  useCase: 'Primary Use Case',
  teamSize: 'Team Size',
  inquiryType: 'Type of Inquiry',
  organization: 'Organization (if applicable)',
  message: 'Your Message'
};

const fieldTypes: FieldTypes = {
  budget: 'select',
  timeline: 'select',
  experience: 'select',
  teamSize: 'select',
  inquiryType: 'select',
  requirements: 'textarea',
  skills: 'textarea',
  message: 'textarea'
};

const selectOptions: SelectOptions = {
  budget: ['Under $10K', '$10K - $50K', '$50K - $100K', '$100K - $500K', '$500K+'],
  timeline: ['1-2 weeks', '1 month', '2-3 months', '3-6 months', '6+ months'],
  experience: ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'],
  teamSize: ['1-5 people', '6-20 people', '21-50 people', '51-200 people', '200+ people'],
  inquiryType: ['Partnership', 'Investment', 'Media/Press', 'Technical Support', 'General Question']
};

export default function Contact() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    // Reset dynamic fields when role changes
    const newFormData: FormData = { name: formData.name, email: formData.email, phone: formData.phone };
    setFormData(newFormData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const renderField = (fieldKey: string) => {
    const label = fieldLabels[fieldKey];
    const type = fieldTypes[fieldKey] || 'text';
    const value = formData[fieldKey] || '';

    if (type === 'select') {
      return (
        <div key={fieldKey} className="mb-6">
          <label className="block text-white mb-2 font-medium">{label}</label>
          <div className="relative">
            <select
              value={value}
              onChange={(e) => handleInputChange(fieldKey, e.target.value)}
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
              required
              aria-label={label}
            >
              <option value="" className="text-gray-800">Select {label}</option>
              {selectOptions[fieldKey]?.map(option => (
                <option key={option} value={option} className="text-gray-800">{option}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      );
    }

    if (type === 'textarea') {
      return (
        <div key={fieldKey} className="mb-6">
          <label className="block text-white mb-2 font-medium">{label}</label>
          <textarea
            value={value}
            onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm resize-none"
            rows={4}
            placeholder={`Enter ${label.toLowerCase()}...`}
            required
          />
        </div>
      );
    }

    return (
      <div key={fieldKey} className="mb-6">
        <label className="block text-white mb-2 font-medium">{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => handleInputChange(fieldKey, e.target.value)}
          className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
          placeholder={`Enter ${label.toLowerCase()}...`}
          required
        />
      </div>
    );
  };

  if (submitted) {
    return (
      <section className="min-h-screen w-full relative bg-black pt-32 pb-20 px-6" id="contact">
        {/* Indigo Cosmos Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
          }}
        />
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 text-lg mb-6">
              Your message has been received. Our AI system is processing your request based on your profile.
            </p>
            <p className="text-indigo-300">
              We will get back to you within 24 hours with a personalized response.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedRole(null);
                setFormData({ name: '', email: '', phone: '' });
              }}
              className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
          <section className="min-h-screen w-full relative bg-black pt-32 pb-20 px-6" id="contact">
      {/* Indigo Cosmos Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300">
            Our AI-powered system will customize your experience based on your needs
          </p>
        </div>

        {!selectedRole ? (
          // Role Selection
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {userRoles.map((role) => {
              const IconComponent = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role)}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-500/20 p-3 rounded-xl group-hover:bg-indigo-500/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{role.label}</h3>
                      <p className="text-gray-400">{role.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          // Dynamic Form
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  {(() => {
                    const IconComponent = selectedRole.icon;
                    return <IconComponent className="w-6 h-6 text-indigo-400" />;
                  })()}
                  <h3 className="text-2xl font-bold text-white">{selectedRole.label}</h3>
                </div>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Change Role
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Dynamic Fields Based on Role */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Additional Information
                  </h4>
                  {selectedRole.fields.map(renderField)}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}