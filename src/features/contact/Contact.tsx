  // 'use client';

  // import { useState, useRef, useMemo } from 'react';
  // import { ChevronDown, Building2, GraduationCap, Eye, Users, Send, CheckCircle, LucideIcon, Phone, Mail, MapPin } from 'lucide-react';
  // import { countries, budgetOptionsByCountry, phonePrefixesByCountry } from './CountryData';

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
  //   country?: string;
  //   resume?: File | null;
  //   cv?: File | null;
  //   [key: string]: string | File | null | undefined;
  // }

  // interface FieldLabels {
  //   [key: string]: string;
  // }

  // interface FieldTypes {
  //   [key: string]: 'text' | 'select' | 'textarea' | 'file';
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
  //     fields: ['country', 'company', 'position', 'budget', 'timeline', 'requirements'],
  //   },
  //   {
  //     id: 'student',
  //     label: 'Student/Graduate',
  //     icon: GraduationCap,
  //     description: 'Seeking jobs or apprenticeships',
  //     fields: ['university', 'degree', 'experience', 'skills', 'availability', 'resume', 'cv'],
  //   },
  //   {
  //     id: 'demo',
  //     label: 'Demo Request',
  //     icon: Eye,
  //     description: 'Want to see our solutions',
  //     fields: ['interest', 'useCase', 'teamSize', 'timeline'],
  //   },
  //   {
  //     id: 'other',
  //     label: 'Other Inquiry',
  //     icon: Users,
  //     description: 'General questions or partnerships',
  //     fields: ['inquiryType', 'organization', 'message'],
  //   },
  // ];

  // const fieldLabels: FieldLabels = {
  //   country: 'Country',
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
  //   message: 'Your Message',
  //   resume: 'Resume',
  //   cv: 'CV (Optional)',
  // };

  // const fieldTypes: FieldTypes = {
  //   country: 'select',
  //   budget: 'select',
  //   timeline: 'select',
  //   experience: 'select',
  //   teamSize: 'select',
  //   inquiryType: 'select',
  //   requirements: 'textarea',
  //   skills: 'textarea',
  //   message: 'textarea',
  //   resume: 'file',
  //   cv: 'file',
  // };

  // const selectOptions: SelectOptions = {
  //   timeline: ['1-2 weeks', '1 month', '2-3 months', '3-6 months', '6+ months'],
  //   experience: ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'],
  //   teamSize: ['1-5 people', '6-20 people', '21-50 people', '51-200 people', '200+ people'],
  //   inquiryType: ['Partnership', 'Investment', 'Media/Press', 'Technical Support', 'General Question'],
  // };

  // export default function Contact() {
  //   const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  //   const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', country: '' });
  //   const [submitted, setSubmitted] = useState(false);
  //   const [error, setError] = useState<string | null>(null);
  //   const formRef = useRef<HTMLFormElement>(null);

  //   const getBudgetOptions = useMemo(() => {
  //     return (country: string | undefined) =>
  //       country && budgetOptionsByCountry[country] ? budgetOptionsByCountry[country] : budgetOptionsByCountry['Other'];
  //   }, []);

  //   const handleRoleSelect = (role: UserRole) => {
  //     setSelectedRole(role);
  //     const newFormData: FormData = { name: formData.name, email: formData.email, phone: formData.phone };
  //     if (role.id === 'client') {
  //       newFormData.country = formData.country || '';
  //     }
  //     setFormData(newFormData);
  //     setError(null);
  //   };

  //   const handleInputChange = (field: string, value: string | File | null) => {
  //     setFormData((prev) => ({ ...prev, [field]: value }));
  //     setError(null);
  //   };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     if (!selectedRole) {
  //       setError('Please select a role first.');
  //       return;
  //     }
  //     // For static sites, simulate submission success
  //     setSubmitted(true);
  //     if (formRef.current) {
  //       formRef.current.reset();
  //     }
  //     setFormData({ name: '', email: '', phone: '', country: '' });
  //   };

  //   const renderField = (fieldKey: string) => {
  //     const label = fieldLabels[fieldKey];
  //     const type = fieldTypes[fieldKey] || 'text';
  //     const value = formData[fieldKey] || '';

  //     if (type === 'select') {
  //       const options = fieldKey === 'budget' ? getBudgetOptions(formData.country) : fieldKey === 'country' ? countries : selectOptions[fieldKey];
  //       return (
  //         <div key={fieldKey} className="mb-6">
  //           <label className="block text-white mb-2 font-medium">{label}</label>
  //           <div className="relative">
  //             <select
  //               name={fieldKey}
  //               value={typeof value === 'string' ? value : ''}
  //               onChange={(e) => handleInputChange(fieldKey, e.target.value)}
  //               className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
  //               required={fieldKey !== 'country'}
  //               aria-label={label}
  //             >
  //               <option value="" className="text-gray-800">
  //                 Select {label}
  //               </option>
  //               {options?.map((option) => (
  //                 <option key={option} value={option} className="text-gray-800">
  //                   {option}
  //                 </option>
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
  //             name={fieldKey}
  //             value={typeof value === 'string' ? value : ''}
  //             onChange={(e) => handleInputChange(fieldKey, e.target.value)}
  //             className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm resize-none"
  //             rows={4}
  //             placeholder={`Enter ${label.toLowerCase()}...`}
  //             required
  //           />
  //         </div>
  //       );
  //     }

  //     if (type === 'file') {
  //       return (
  //         <div key={fieldKey} className="mb-6">
  //           <label className="block text-white mb-2 font-medium">{label}</label>
  //           <input
  //             type="file"
  //             name={fieldKey}
  //             onChange={(e) => handleInputChange(fieldKey, e.target.files ? e.target.files[0] : null)}
  //             className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
  //             accept=".pdf,.doc,.docx"
  //             required={fieldKey === 'resume'}
  //             title={`Upload your ${label.toLowerCase()}`}
  //           />
  //         </div>
  //       );
  //     }

  //     return (
  //       <div key={fieldKey} className="mb-6">
  //         <label className="block text-white mb-2 font-medium">{label}</label>
  //         <input
  //           type="text"
  //           name={fieldKey}
  //           value={typeof value === 'string' ? value : ''}
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
  //       <section className="min-h-screen w-full relative bg-black pt-32 pb-20 px-6" id="contact">
  //         <div
  //           className="absolute inset-0 z-0"
  //           style={{
  //             background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000',
  //           }}
  //         />
  //         <div className="relative z-10 max-w-2xl mx-auto text-center">
  //           <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
  //             <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
  //             <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
  //             <p className="text-gray-300 text-lg mb-6">
  //               Your message has been received. Our AI system is processing your request based on your profile.
  //             </p>
  //             <p className="text-indigo-300">We will get back to you within 24 hours with a personalized response.</p>
  //             <button
  //               onClick={() => {
  //                 setSubmitted(false);
  //                 setSelectedRole(null);
  //                 setFormData({ name: '', email: '', phone: '', country: '' });
  //                 setError(null);
  //               }}
  //               className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
  //             >
  //               Send Another Message
  //             </button>
  //           </div>
  //           <div className="mt-12">
  //             <h2 className="text-5xl font-bold text-white mb-4 text-center">Let&apos;s Connect</h2>
  //             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 max-w-5xl mx-auto">
  //               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
  //                 <Phone className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
  //                 <h3 className="text-xl font-semibold text-white mb-2">Company Number</h3>
  //                 <a href="tel:+917622817924" className="text-gray-300 hover:text-indigo-400 transition-colors block">
  //                   +917622817924
  //                 </a>
  //               </div>
  //               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
  //                 <Mail className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
  //                 <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
  //                 <a href="mailto:info@clumoss.com" className="text-gray-300 hover:text-indigo-400 transition-colors block">
  //                   info@clumoss.com
  //                 </a>
  //               </div>
  //               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
  //                 <MapPin className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
  //                 <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
  //                 <span className="text-gray-300 block">India</span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     );
  //   }


  //   return (
  //     <section className="min-h-screen w-full relative bg-black pt-32 pb-20 px-6" id="contact">
  //       <div
  //         className="absolute inset-0 z-0"
  //         style={{
  //           background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000',
  //         }}
  //       />
  //       <div className="relative z-10 max-w-4xl mx-auto">
  //         <div className="text-center mb-12">
  //           <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
  //           <p className="text-xl text-gray-300">Our AI-powered system will customize your experience based on your needs</p>
  //         </div>
  //         {error && (
  //           <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
  //             {error}
  //           </div>
  //         )}
  //         {!selectedRole ? (
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
  //                 <button onClick={() => setSelectedRole(null)} className="text-gray-400 hover:text-white transition-colors">
  //                   Change Role
  //                 </button>
  //               </div>
  //               <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
  //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //                   <div>
  //                     <label className="block text-white mb-2 font-medium">Full Name</label>
  //                     <input
  //                       type="text"
  //                       name="name"
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
  //                       name="email"
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
  //                   <div className="flex items-center">
  //                     {formData.country && phonePrefixesByCountry[formData.country] && (
  //                       <span className="inline-block w-16 p-4 bg-white/10 border border-white/20 rounded-l-lg text-gray-400">
  //                         {phonePrefixesByCountry[formData.country]}
  //                       </span>
  //                     )}
  //                     <input
  //                       type="tel"
  //                       name="phone"
  //                       value={formData.phone}
  //                       onChange={(e) => handleInputChange('phone', e.target.value)}
  //                       className={`w-full p-4 bg-white/10 border border-white/20 ${
  //                         formData.country && phonePrefixesByCountry[formData.country] ? 'rounded-r-lg' : 'rounded-lg'
  //                       } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm`}
  //                       placeholder="Enter your phone number"
  //                       required
  //                     />
  //                   </div>
  //                 </div>
  //                 <div className="border-t border-white/10 pt-6">
  //                   <h4 className="text-lg font-semibold text-white mb-4">Additional Information</h4>
  //                   {selectedRole.fields.map(renderField)}
  //                 </div>
  //                 <button
  //                   type="submit"
  //                   className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
  //                 >
  //                   <Send className="w-5 h-5" />
  //                   <span>Send Message</span>
  //                 </button>
  //               </form>
  //             </div>
  //           </div>
  //         )}
  //         <div className="mt-16">
  //           <h2 className="text-5xl font-bold text-white mb-4 text-center">Let&apos;s Connect!</h2>
  //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10 max-w-5xl mx-auto">
  //             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
  //               <Phone className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
  //               <h3 className="text-xl font-semibold text-white mb-2">Company Number</h3>
  //               <a href="tel:+917622817924" className="text-gray-300 hover:text-indigo-400 transition-colors block">
  //                 +917622817924
  //               </a>
  //             </div>
  //             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
  //               <Mail className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
  //               <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
  //               <a href="mailto:info@clumoss.com" className="text-gray-300 hover:text-indigo-400 transition-colors block">
  //                 info@clumoss.com
  //               </a>
  //             </div>
  //             <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
  //               <MapPin className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
  //               <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
  //               <span className="text-gray-300 block">India</span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }


















  // AppA: src/app/contact/page.tsx
'use client';

import { useState, useRef, useMemo } from 'react';
import { ChevronDown, Building2, GraduationCap, Eye, Users, Send, CheckCircle, LucideIcon, Phone, Mail, MapPin } from 'lucide-react';
import { countries, budgetOptionsByCountry, phonePrefixesByCountry } from './CountryData';

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
  country?: string;
  resume?: File | null;
  cv?: File | null;
  [key: string]: string | File | null | undefined;
}

interface FieldLabels {
  [key: string]: string;
}

interface FieldTypes {
  [key: string]: 'text' | 'select' | 'textarea' | 'file';
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
    fields: ['country', 'company', 'position', 'budget', 'timeline', 'requirements'],
  },
  {
    id: 'student',
    label: 'Student/Graduate',
    icon: GraduationCap,
    description: 'Seeking jobs or apprenticeships',
    fields: ['university', 'degree', 'experience', 'skills', 'availability', 'resume', 'cv'],
  },
  {
    id: 'demo',
    label: 'Demo Request',
    icon: Eye,
    description: 'Want to see our solutions',
    fields: ['interest', 'useCase', 'teamSize', 'timeline'],
  },
  {
    id: 'other',
    label: 'Other Inquiry',
    icon: Users,
    description: 'General questions or partnerships',
    fields: ['inquiryType', 'organization', 'message'],
  },
];

const fieldLabels: FieldLabels = {
  country: 'Country',
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
  message: 'Your Message',
  resume: 'Resume',
  cv: 'CV (Optional)',
};

const fieldTypes: FieldTypes = {
  country: 'select',
  budget: 'select',
  timeline: 'select',
  experience: 'select',
  teamSize: 'select',
  inquiryType: 'select',
  requirements: 'textarea',
  skills: 'textarea',
  message: 'textarea',
  resume: 'file',
  cv: 'file',
};

const selectOptions: SelectOptions = {
  timeline: ['1-2 weeks', '1 month', '2-3 months', '3-6 months', '6+ months'],
  experience: ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'],
  teamSize: ['1-5 people', '6-20 people', '21-50 people', '51-200 people', '200+ people'],
  inquiryType: ['Partnership', 'Investment', 'Media/Press', 'Technical Support', 'General Question'],
};

export default function Contact() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', country: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const getBudgetOptions = useMemo(() => {
    return (country: string | undefined) =>
      country && budgetOptionsByCountry[country] ? budgetOptionsByCountry[country] : budgetOptionsByCountry['Other'];
  }, []);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    const newFormData: FormData = { name: formData.name, email: formData.email, phone: formData.phone };
    if (role.id === 'client') {
      newFormData.country = formData.country || '';
    }
    setFormData(newFormData);
    setError(null);
  };

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedRole) {
      setError('Please select a role first.');
      return;
    }

    const submitData = new FormData();
    submitData.append('role', selectedRole.id);
    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== undefined) {
        submitData.append(key, formData[key] as string | Blob);
      }
    }

    if (formData.country && phonePrefixesByCountry[formData.country]) {
      submitData.set('phone', `${phonePrefixesByCountry[formData.country]} ${formData.phone}`);
    }

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        // const response = await fetch('https://contat-email-backend-6qaa07xmd-abcs-projects-fa462338.vercel.app/api/send-email', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', country: '' });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setError('An error occurred. Please check your connection and try again.');
    }
  };

  const renderField = (fieldKey: string) => {
    const label = fieldLabels[fieldKey];
    const type = fieldTypes[fieldKey] || 'text';
    const value = formData[fieldKey] || '';

    if (type === 'select') {
      const options = fieldKey === 'budget' ? getBudgetOptions(formData.country) : fieldKey === 'country' ? countries : selectOptions[fieldKey];
      return (
        <div key={fieldKey} className="mb-6">
          <label className="block text-white mb-2 font-medium">{label}</label>
          <div className="relative">
            <select
              name={fieldKey}
              value={typeof value === 'string' ? value : ''}
              onChange={(e) => handleInputChange(fieldKey, e.target.value)}
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
              required={fieldKey !== 'country'}
              aria-label={label}
            >
              <option value="" className="text-gray-800">
                Select {label}
              </option>
              {options?.map((option) => (
                <option key={option} value={option} className="text-gray-800">
                  {option}
                </option>
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
            name={fieldKey}
            value={typeof value === 'string' ? value : ''}
            onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm resize-none"
            rows={4}
            placeholder={`Enter ${label.toLowerCase()}...`}
            required
          />
        </div>
      );
    }

    if (type === 'file') {
      return (
        <div key={fieldKey} className="mb-6">
          <label className="block text-white mb-2 font-medium">{label}</label>
          <input
            type="file"
            name={fieldKey}
            onChange={(e) => handleInputChange(fieldKey, e.target.files ? e.target.files[0] : null)}
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
            accept=".pdf,.doc,.docx"
            required={fieldKey === 'resume'}
            title={`Upload your ${label.toLowerCase()}`}
          />
        </div>
      );
    }

    return (
      <div key={fieldKey} className="mb-6">
        <label className="block text-white mb-2 font-medium">{label}</label>
        <input
          type="text"
          name={fieldKey}
          value={typeof value === 'string' ? value : ''}
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
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 text-lg mb-6">
              Your message has been received. Our AI system is processing your request based on your profile.
            </p>
            <p className="text-indigo-300">We will get back to you within 24 hours with a personalized response.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedRole(null);
                setFormData({ name: '', email: '', phone: '', country: '' });
                setError(null);
              }}
              className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Send Another Message
            </button>
          </div>
          <div className="mt-12">
            <h2 className="text-5xl font-bold text-white mb-4 text-center">Let&apos;s Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
                <Phone className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Company Number</h3>
                <a href="tel:+917622817924" className="text-gray-300 hover:text-indigo-400 transition-colors block">
                  +917622817924
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
                <Mail className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:info@clumoss.com" className="text-gray-300 hover:text-indigo-400 transition-colors block">
                  info@clumoss.com
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
                <MapPin className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <span className="text-gray-300 block">India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full relative bg-black pt-32 pb-20 px-6" id="contact">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300">Our AI-powered system will customize your experience based on your needs</p>
        </div>
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
            {error}
          </div>
        )}
        {!selectedRole ? (
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
                <button onClick={() => setSelectedRole(null)} className="text-gray-400 hover:text-white transition-colors">
                  Change Role
                </button>
              </div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="name"
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
                      name="email"
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
                  <div className="flex items-center">
                    {formData.country && phonePrefixesByCountry[formData.country] && (
                      <span className="inline-block w-16 p-4 bg-white/10 border border-white/20 rounded-l-lg text-gray-400">
                        {phonePrefixesByCountry[formData.country]}
                      </span>
                    )}
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full p-4 bg-white/10 border border-white/20 ${
                        formData.country && phonePrefixesByCountry[formData.country] ? 'rounded-r-lg' : 'rounded-lg'
                      } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm`}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Additional Information</h4>
                  {selectedRole.fields.map(renderField)}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        )}
        <div className="mt-16">
          <h2 className="text-5xl font-bold text-white mb-4 text-center">Let&apos;s Connect!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
              <Phone className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Company Number</h3>
              <a href="tel:+917622817924" className="text-gray-300 hover:text-indigo-400 transition-colors block">
                +917622817924
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
              <Mail className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:info@clumoss.com" className="text-gray-300 hover:text-indigo-400 transition-colors block">
                info@clumoss.com
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
              <MapPin className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <span className="text-gray-300 block">India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}