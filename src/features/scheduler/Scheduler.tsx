// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { Calendar, Clock, User, Mail, Phone, Building2, MessageSquare, Check, ChevronLeft, ChevronRight, X } from 'lucide-react';
// import { countries, phonePrefixesByCountry } from '../contact/CountryData';
// import styles from './scheduler.module.css';

// interface TimeSlot {
//   time: string;
//   available: boolean;
// }

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   country: string;
//   company: string;
//   message: string;
//   date: string;
//   time: string;
// }

// export default function Scheduler() {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string>('');
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone: '',
//     country: '',
//     company: '',
//     message: '',
//     date: '',
//     time: ''
//   });
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [meetLink, setMeetLink] = useState<string>('');
//   const formRef = useRef<HTMLFormElement>(null);

//   // Get user's timezone on component mount
//   const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (showConfirmation) {
//       document.body.style.overflow = 'hidden';
//       window.dispatchEvent(new Event('modalOpen'));
//     } else {
//       document.body.style.overflow = 'unset';
//       window.dispatchEvent(new Event('modalClose'));
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//       window.dispatchEvent(new Event('modalClose'));
//     };
//   }, [showConfirmation]);

//   // Generate time slots (24-hour format with AM/PM)
//   const timeSlots: TimeSlot[] = [
//     { time: '09:00 AM', available: true },
//     { time: '10:00 AM', available: true },
//     { time: '11:00 AM', available: true },
//     { time: '12:00 PM', available: true },
//     { time: '01:00 PM', available: true },
//     { time: '02:00 PM', available: true },
//     { time: '03:00 PM', available: true },
//     { time: '04:00 PM', available: true },
//     { time: '05:00 PM', available: true },
//     { time: '06:00 PM', available: true },
//     { time: '07:00 PM', available: true },
//     { time: '08:00 PM', available: true },
//     { time: '09:00 PM', available: true },
//     { time: '10:00 PM', available: true }
//   ];

//   const getDaysInMonth = (date: Date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     const startingDayOfWeek = firstDay.getDay();

//     return { daysInMonth, startingDayOfWeek };
//   };

//   const formatDate = (date: Date) => {
//     return date.toLocaleDateString('en-US', { 
//       weekday: 'long', 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric' 
//     });
//   };

//   const isDateDisabled = (day: number) => {
//     const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     return date < today;
//   };

//   const handlePreviousMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
//   };

//   const handleNextMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
//   };

//   const handleDateSelect = (day: number) => {
//     if (!isDateDisabled(day)) {
//       const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
//       setSelectedDate(selected);
//       setSelectedTime('');
//       setError(null);
//     }
//   };

//   const handleTimeSelect = (time: string) => {
//     setSelectedTime(time);
//     setError(null);
//   };

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     setError(null);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!selectedDate || !selectedTime) {
//       setError('Please select both date and time for your demo');
//       return;
//     }

//     setIsSubmitting(true);
//     setError(null);

//     // Format date in user's local timezone (YYYY-MM-DD)
//     const year = selectedDate.getFullYear();
//     const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
//     const day = String(selectedDate.getDate()).padStart(2, '0');
//     const formattedDate = `${year}-${month}-${day}`;

//     // Convert 12-hour time to 24-hour format for backend
//     const convertTo24Hour = (time12h: string): string => {
//       const [time, period] = time12h.split(' ');
//       let [hours, minutes] = time.split(':');
      
//       if (period === 'PM' && hours !== '12') {
//         hours = String(parseInt(hours) + 12);
//       } else if (period === 'AM' && hours === '12') {
//         hours = '00';
//       }
      
//       return `${hours.padStart(2, '0')}:${minutes}`;
//     };

//     const time24h = convertTo24Hour(selectedTime);

//     const submissionData = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.country && phonePrefixesByCountry[formData.country] 
//         ? `${phonePrefixesByCountry[formData.country]} ${formData.phone}`
//         : formData.phone,
//       country: formData.country,
//       company: formData.company,
//       message: formData.message,
//       date: formattedDate,
//       time: time24h,
//       timezone: userTimezone
//     };

//     console.log('Submitting booking:', {
//       ...submissionData,
//       userLocalTime: `${formattedDate} ${selectedTime}`,
//       timezone: userTimezone
//     });

//     try {
//       const response = await fetch('https://contat-email-backend.vercel.app/api/book-meeting', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(submissionData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to book demo');
//       }

//       console.log('Demo booked successfully:', data);
//       setMeetLink(data.meetLink || '');
//       setShowConfirmation(true);
//     } catch (err) {
//       console.error('Error booking demo:', err);
//       setError(err instanceof Error ? err.message : 'Failed to book demo. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCloseConfirmation = () => {
//     setShowConfirmation(false);
//     setSelectedDate(null);
//     setSelectedTime('');
//     setMeetLink('');
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       country: '',
//       company: '',
//       message: '',
//       date: '',
//       time: ''
//     });
//     formRef.current?.reset();
//   };

//   const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
//   const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

//   return (
//     <section className={styles.schedulerSection}>
//       <div className={styles.schedulerBackground} />
      
//       <div className={styles.schedulerContainer}>
//         <div className={styles.schedulerHeader}>
//           <h2 className={styles.schedulerTitle}>Schedule Your Demo</h2>
//           <p className={styles.schedulerDescription}>
//             Book a personalized consultation with our team to explore how we can help your business grow
//           </p>
//         </div>

//         {error && (
//           <div className={styles.errorMessage} role="alert">
//             {error}
//           </div>
//         )}

//         <div className={styles.schedulerContent}>
//           {/* Calendar Section */}
//           <div className={styles.calendarSection}>
//             <div className={styles.calendarHeader}>
//               <button 
//                 onClick={handlePreviousMonth}
//                 className={styles.calendarNavButton}
//                 aria-label="Previous month"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <h3 className={styles.calendarMonth}>{monthName}</h3>
//               <button 
//                 onClick={handleNextMonth}
//                 className={styles.calendarNavButton}
//                 aria-label="Next month"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>

//             <div className={styles.calendarGrid}>
//               {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//                 <div key={day} className={styles.calendarDayLabel}>{day}</div>
//               ))}
              
//               {Array.from({ length: startingDayOfWeek }).map((_, i) => (
//                 <div key={`empty-${i}`} className={styles.calendarDayEmpty} />
//               ))}
              
//               {Array.from({ length: daysInMonth }).map((_, i) => {
//                 const day = i + 1;
//                 const isDisabled = isDateDisabled(day);
//                 const isSelected = selectedDate?.getDate() === day && 
//                                  selectedDate?.getMonth() === currentDate.getMonth() &&
//                                  selectedDate?.getFullYear() === currentDate.getFullYear();
                
//                 return (
//                   <button
//                     key={day}
//                     onClick={() => handleDateSelect(day)}
//                     disabled={isDisabled}
//                     className={`${styles.calendarDay} ${isSelected ? styles.selected : ''} ${isDisabled ? styles.disabled : ''}`}
//                     aria-label={`Select ${day}`}
//                   >
//                     {day}
//                   </button>
//                 );
//               })}
//             </div>

//             {selectedDate && (
//               <div className={styles.selectedDateDisplay}>
//                 <Calendar className="w-5 h-5 text-indigo-400" />
//                 <span>{formatDate(selectedDate)}</span>
//               </div>
//             )}
//           </div>

//           {/* Time Slots Section */}
//           <div className={styles.timeSection}>
//             <h3 className={styles.timeSectionTitle}>
//               <Clock className="w-5 h-5" />
//               Select Time Slot
//             </h3>
            
//             {!selectedDate ? (
//               <p className={styles.timeSectionPlaceholder}>Please select a date first</p>
//             ) : (
//               <div className={styles.timeSlotsGrid}>
//                 {timeSlots.map(slot => (
//                   <button
//                     key={slot.time}
//                     onClick={() => slot.available && handleTimeSelect(slot.time)}
//                     disabled={!slot.available}
//                     className={`${styles.timeSlot} ${selectedTime === slot.time ? styles.selected : ''} ${!slot.available ? styles.unavailable : ''}`}
//                   >
//                     {slot.time}
//                     {!slot.available && <span className={styles.unavailableBadge}>Booked</span>}
//                   </button>
//                 ))}
//                 {userTimezone && (
//                   <div className={styles.timezoneInfo}>
//                     Your timezone: {userTimezone}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Form Section */}
//         <form ref={formRef} onSubmit={handleSubmit} className={styles.schedulerForm}>
//           <h3 className={styles.formSectionTitle}>Your Information</h3>
          
//           <div className={styles.formGrid}>
//             <div className={styles.formField}>
//               <label htmlFor="name" className={styles.formLabel}>
//                 <User className="w-4 h-4" />
//                 Full Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//                 className={styles.formInput}
//                 placeholder="Enter your full name"
//                 required
//                 disabled={isSubmitting}
//               />
//             </div>

//             <div className={styles.formField}>
//               <label htmlFor="email" className={styles.formLabel}>
//                 <Mail className="w-4 h-4" />
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//                 className={styles.formInput}
//                 placeholder="your.email@example.com"
//                 required
//                 disabled={isSubmitting}
//               />
//             </div>

//             <div className={styles.formField}>
//               <label htmlFor="country" className={styles.formLabel}>
//                 Country
//               </label>
//               <select
//                 id="country"
//                 value={formData.country}
//                 onChange={(e) => handleInputChange('country', e.target.value)}
//                 className={styles.formSelect}
//                 required
//                 disabled={isSubmitting}
//               >
//                 <option value="">Select your country</option>
//                 {countries.map((country: string) => (
//                   <option key={country} value={country}>{country}</option>
//                 ))}
//               </select>
//             </div>

//             <div className={styles.formField}>
//               <label htmlFor="phone" className={styles.formLabel}>
//                 <Phone className="w-4 h-4" />
//                 Phone Number
//               </label>
//               <div className={styles.phoneInputWrapper}>
//                 {formData.country && phonePrefixesByCountry[formData.country] && (
//                   <span className={styles.phonePrefix}>
//                     {phonePrefixesByCountry[formData.country]}
//                   </span>
//                 )}
//                 <input
//                   id="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => handleInputChange('phone', e.target.value)}
//                   className={`${styles.formInput} ${formData.country && phonePrefixesByCountry[formData.country] ? styles.withPrefix : ''}`}
//                   placeholder="Enter phone number"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
//             </div>

//             <div className={`${styles.formField} ${styles.formFieldFull}`}>
//               <label htmlFor="company" className={styles.formLabel}>
//                 <Building2 className="w-4 h-4" />
//                 Company Name
//               </label>
//               <input
//                 id="company"
//                 type="text"
//                 value={formData.company}
//                 onChange={(e) => handleInputChange('company', e.target.value)}
//                 className={styles.formInput}
//                 placeholder="Your company name"
//                 required
//                 disabled={isSubmitting}
//               />
//             </div>

//             <div className={`${styles.formField} ${styles.formFieldFull}`}>
//               <label htmlFor="message" className={styles.formLabel}>
//                 <MessageSquare className="w-4 h-4" />
//                 Message (Optional)
//               </label>
//               <textarea
//                 id="message"
//                 value={formData.message}
//                 onChange={(e) => handleInputChange('message', e.target.value)}
//                 className={styles.formTextarea}
//                 placeholder="Tell us about your requirements..."
//                 rows={4}
//                 disabled={isSubmitting}
//               />
//             </div>
//           </div>

//           <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
//             {isSubmitting ? (
//               <>
//                 <div className={styles.spinner} />
//                 Booking...
//               </>
//             ) : (
//               <>
//                 <Calendar className="w-5 h-5" />
//                 Book Demo
//               </>
//             )}
//           </button>
//         </form>
//       </div>

//       {/* Confirmation Modal */}
//       {showConfirmation && (
//         <div className={styles.modalOverlay} onClick={handleCloseConfirmation}>
//           <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//             <button 
//               onClick={handleCloseConfirmation}
//               className={styles.modalClose}
//               aria-label="Close"
//             >
//               <X className="w-6 h-6" />
//             </button>
            
//             <div className={styles.modalIcon}>
//               <Check className="w-12 h-12 text-green-500" />
//             </div>
            
//             <h3 className={styles.modalTitle}>Demo Scheduled Successfully!</h3>
//             <p className={styles.modalDescription}>
//               Your demo has been confirmed for
//             </p>
            
//             <div className={styles.confirmationDetails}>
//               <div className={styles.confirmationItem}>
//                 <Calendar className="w-5 h-5 text-indigo-400" />
//                 <span>{selectedDate && formatDate(selectedDate)}</span>
//               </div>
//               <div className={styles.confirmationItem}>
//                 <Clock className="w-5 h-5 text-indigo-400" />
//                 <span>{selectedTime}</span>
//               </div>
//               {meetLink && meetLink !== 'Meet link not generated' && (
//                 <div className={styles.confirmationItem}>
//                   <a 
//                     href={meetLink} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className={styles.meetLink}
//                   >
//                     🔗 Join Google Meet
//                   </a>
//                 </div>
//               )}
//             </div>
            
//             <p className={styles.modalFooter}>
//               We have sent a confirmation email to <strong>{formData.email}</strong> with the meeting details and Google Meet link.
//             </p>
            
//             <button onClick={handleCloseConfirmation} className={styles.modalButton}>
//               Got it, Thanks!
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }








'use client';

import { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, Building2, MessageSquare, Check, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { countries, phonePrefixesByCountry } from '../contact/CountryData';
import styles from './scheduler.module.css';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  message: string;
  date: string;
  time: string;
}

export default function Scheduler() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    message: '',
    date: '',
    time: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [meetLink, setMeetLink] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  // Get user's timezone on component mount
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showConfirmation) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new Event('modalOpen'));
    } else {
      document.body.style.overflow = 'unset';
      window.dispatchEvent(new Event('modalClose'));
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.dispatchEvent(new Event('modalClose'));
    };
  }, [showConfirmation]);

  // Generate time slots (24-hour format with AM/PM)
  const timeSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '01:00 PM', available: true },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: true },
    { time: '04:00 PM', available: true },
    { time: '05:00 PM', available: true },
    { time: '06:00 PM', available: true },
    { time: '07:00 PM', available: true },
    { time: '08:00 PM', available: true },
    { time: '09:00 PM', available: true },
    { time: '10:00 PM', available: true }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateSelect = (day: number) => {
    if (!isDateDisabled(day)) {
      const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      setSelectedDate(selected);
      setSelectedTime('');
      setError(null);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setError(null);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      setError('Please select both date and time for your demo');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Format date in user's local timezone (YYYY-MM-DD)
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // Convert 12-hour time to 24-hour format for backend
    const convertTo24Hour = (time12h: string): string => {
      const [time, period] = time12h.split(' ');
      
      // FIX: Destructure into 'const' and use a separate 'let' for reassignable 'hours'
      const [h, minutes] = time.split(':');
      let hours = h;
      
      if (period === 'PM' && hours !== '12') {
        hours = String(parseInt(hours) + 12);
      } else if (period === 'AM' && hours === '12') {
        hours = '00';
      }
      
      return `${hours.padStart(2, '0')}:${minutes}`;
    };

    const time24h = convertTo24Hour(selectedTime);

    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.country && phonePrefixesByCountry[formData.country] 
        ? `${phonePrefixesByCountry[formData.country]} ${formData.phone}`
        : formData.phone,
      country: formData.country,
      company: formData.company,
      message: formData.message,
      date: formattedDate,
      time: time24h,
      timezone: userTimezone
    };

    console.log('Submitting booking:', {
      ...submissionData,
      userLocalTime: `${formattedDate} ${selectedTime}`,
      timezone: userTimezone
    });

    try {
      const response = await fetch('https://contat-email-backend.vercel.app/api/book-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to book demo');
      }

      console.log('Demo booked successfully:', data);
      setMeetLink(data.meetLink || '');
      setShowConfirmation(true);
    } catch (err) {
      console.error('Error booking demo:', err);
      setError(err instanceof Error ? err.message : 'Failed to book demo. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setSelectedDate(null);
    setSelectedTime('');
    setMeetLink('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      company: '',
      message: '',
      date: '',
      time: ''
    });
    formRef.current?.reset();
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section className={styles.schedulerSection}>
      <div className={styles.schedulerBackground} />
      
      <div className={styles.schedulerContainer}>
        <div className={styles.schedulerHeader}>
          <h2 className={styles.schedulerTitle}>Schedule Your Demo</h2>
          <p className={styles.schedulerDescription}>
            Book a personalized consultation with our team to explore how we can help your business grow
          </p>
        </div>

        {error && (
          <div className={styles.errorMessage} role="alert">
            {error}
          </div>
        )}

        <div className={styles.schedulerContent}>
          {/* Calendar Section */}
          <div className={styles.calendarSection}>
            <div className={styles.calendarHeader}>
              <button 
                onClick={handlePreviousMonth}
                className={styles.calendarNavButton}
                aria-label="Previous month"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className={styles.calendarMonth}>{monthName}</h3>
              <button 
                onClick={handleNextMonth}
                className={styles.calendarNavButton}
                aria-label="Next month"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className={styles.calendarGrid}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className={styles.calendarDayLabel}>{day}</div>
              ))}
              
              {Array.from({ length: startingDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className={styles.calendarDayEmpty} />
              ))}
              
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isDisabled = isDateDisabled(day);
                const isSelected = selectedDate?.getDate() === day && 
                                 selectedDate?.getMonth() === currentDate.getMonth() &&
                                 selectedDate?.getFullYear() === currentDate.getFullYear();
                
                return (
                  <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    disabled={isDisabled}
                    className={`${styles.calendarDay} ${isSelected ? styles.selected : ''} ${isDisabled ? styles.disabled : ''}`}
                    aria-label={`Select ${day}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <div className={styles.selectedDateDisplay}>
                <Calendar className="w-5 h-5 text-indigo-400" />
                <span>{formatDate(selectedDate)}</span>
              </div>
            )}
          </div>

          {/* Time Slots Section */}
          <div className={styles.timeSection}>
            <h3 className={styles.timeSectionTitle}>
              <Clock className="w-5 h-5" />
              Select Time Slot
            </h3>
            
            {!selectedDate ? (
              <p className={styles.timeSectionPlaceholder}>Please select a date first</p>
            ) : (
              <div className={styles.timeSlotsGrid}>
                {timeSlots.map(slot => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && handleTimeSelect(slot.time)}
                    disabled={!slot.available}
                    className={`${styles.timeSlot} ${selectedTime === slot.time ? styles.selected : ''} ${!slot.available ? styles.unavailable : ''}`}
                  >
                    {slot.time}
                    {!slot.available && <span className={styles.unavailableBadge}>Booked</span>}
                  </button>
                ))}
                {userTimezone && (
                  <div className={styles.timezoneInfo}>
                    Your timezone: {userTimezone}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Form Section */}
        <form ref={formRef} onSubmit={handleSubmit} className={styles.schedulerForm}>
          <h3 className={styles.formSectionTitle}>Your Information</h3>
          
          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <label htmlFor="name" className={styles.formLabel}>
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={styles.formInput}
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="email" className={styles.formLabel}>
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={styles.formInput}
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="country" className={styles.formLabel}>
                Country
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className={styles.formSelect}
                required
                disabled={isSubmitting}
              >
                <option value="">Select your country</option>
                {countries.map((country: string) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <div className={styles.formField}>
              <label htmlFor="phone" className={styles.formLabel}>
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <div className={styles.phoneInputWrapper}>
                {formData.country && phonePrefixesByCountry[formData.country] && (
                  <span className={styles.phonePrefix}>
                    {phonePrefixesByCountry[formData.country]}
                  </span>
                )}
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`${styles.formInput} ${formData.country && phonePrefixesByCountry[formData.country] ? styles.withPrefix : ''}`}
                  placeholder="Enter phone number"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className={`${styles.formField} ${styles.formFieldFull}`}>
              <label htmlFor="company" className={styles.formLabel}>
                <Building2 className="w-4 h-4" />
                Company Name
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className={styles.formInput}
                placeholder="Your company name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className={`${styles.formField} ${styles.formFieldFull}`}>
              <label htmlFor="message" className={styles.formLabel}>
                <MessageSquare className="w-4 h-4" />
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={styles.formTextarea}
                placeholder="Tell us about your requirements..."
                rows={4}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className={styles.spinner} />
                Booking...
              </>
            ) : (
              <>
                <Calendar className="w-5 h-5" />
                Book Demo
              </>
            )}
          </button>
        </form>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className={styles.modalOverlay} onClick={handleCloseConfirmation}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={handleCloseConfirmation}
              className={styles.modalClose}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className={styles.modalIcon}>
              <Check className="w-12 h-12 text-green-500" />
            </div>
            
            <h3 className={styles.modalTitle}>Demo Scheduled Successfully!</h3>
            <p className={styles.modalDescription}>
              Your demo has been confirmed for
            </p>
            
            <div className={styles.confirmationDetails}>
              <div className={styles.confirmationItem}>
                <Calendar className="w-5 h-5 text-indigo-400" />
                <span>{selectedDate && formatDate(selectedDate)}</span>
              </div>
              <div className={styles.confirmationItem}>
                <Clock className="w-5 h-5 text-indigo-400" />
                <span>{selectedTime}</span>
              </div>
              {meetLink && meetLink !== 'Meet link not generated' && (
                <div className={styles.confirmationItem}>
                  <a 
                    href={meetLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.meetLink}
                  >
                    🔗 Join Google Meet
                  </a>
                </div>
              )}
            </div>
            
            <p className={styles.modalFooter}>
              We have sent a confirmation email to <strong>{formData.email}</strong> with the meeting details and Google Meet link.
            </p>
            
            <button onClick={handleCloseConfirmation} className={styles.modalButton}>
              Got it, Thanks!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}