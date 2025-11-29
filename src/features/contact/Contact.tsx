'use client';

import { useState, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Building2, GraduationCap, Eye, Users, Send, CheckCircle, Phone, Mail, MapPin, LucideIcon } from 'lucide-react';
import { countries, budgetOptionsByCountry, phonePrefixesByCountry } from './CountryData';

interface UserRole {
  id: string;
  label: string;
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

interface SelectOptions {
  [key: string]: string[];
}

interface ConnectItem {
  title: string;
  value: string;
  href?: string;
}

export default function Contact() {
  const { t } = useTranslation();
  
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', country: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const userRoles = t('contact.roles', { returnObjects: true }) as UserRole[];
  const fieldLabels = t('contact.fieldLabels', { returnObjects: true }) as FieldLabels;
  const selectOptions = t('contact.selectOptions', { returnObjects: true }) as SelectOptions;
  const connectItems = t('contact.connect.items', { returnObjects: true }) as ConnectItem[];

  const roleIcons: LucideIcon[] = [Building2, GraduationCap, Eye, Users];

  const getBudgetOptions = useMemo(() => {
    return (country: string | undefined) =>
      country && budgetOptionsByCountry[country] ? budgetOptionsByCountry[country] : budgetOptionsByCountry['Other'];
  }, []);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    const newFormData: FormData = { name: formData.name, email: formData.email, phone: formData.phone };
    if (role.id === 'client') newFormData.country = formData.country || '';
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
      setError(t('contact.error.noRole'));
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
      const response = await fetch('https://contat-email-backend.vercel.app/api/send-email', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', country: '' });
        formRef.current?.reset();
      } else {
        const errorData = await response.json();
        setError(errorData.error || t('contact.error.failed'));
      }
    } catch {
      setError(t('contact.error.network'));
    }
  };

  const fieldTypes: { [key: string]: 'text' | 'select' | 'textarea' | 'file' } = {
    country: 'select', budget: 'select', timeline: 'select', experience: 'select',
    teamSize: 'select', inquiryType: 'select', requirements: 'textarea',
    skills: 'textarea', message: 'textarea', resume: 'file', cv: 'file'
  };

  const renderField = (fieldKey: string) => {
    const label = fieldLabels[fieldKey];
    const type = fieldTypes[fieldKey] || 'text';
    const value = formData[fieldKey] || '';

    if (type === 'select') {
      const options = fieldKey === 'budget' ? getBudgetOptions(formData.country) : 
                     fieldKey === 'country' ? countries : selectOptions[fieldKey];
      return (
        <div key={fieldKey} className="mb-6">
          <label htmlFor={fieldKey} className="block text-white mb-2 font-medium">{label}</label>
          <div className="relative">
            <select
              id={fieldKey}
              name={fieldKey}
              value={typeof value === 'string' ? value : ''}
              onChange={(e) => handleInputChange(fieldKey, e.target.value)}
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-sm"
              required={fieldKey !== 'country'}
              aria-label={label}
            >
              <option value="" className="text-gray-800">Select {label}</option>
              {options?.map((option: string) => (
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
          <label htmlFor={fieldKey} className="block text-white mb-2 font-medium">{label}</label>
          <textarea
            id={fieldKey}
            name={fieldKey}
            value={typeof value === 'string' ? value : ''}
            onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-sm resize-none"
            rows={4}
            placeholder={`Enter ${label.toLowerCase()}...`}
            required
            aria-label={label}
          />
        </div>
      );
    }

    if (type === 'file') {
      return (
        <div key={fieldKey} className="mb-6">
          <label htmlFor={fieldKey} className="block text-white mb-2 font-medium">{label}</label>
          <input
            id={fieldKey}
            type="file"
            name={fieldKey}
            onChange={(e) => handleInputChange(fieldKey, e.target.files?.[0] || null)}
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
            accept=".pdf,.doc,.docx"
            required={fieldKey === 'resume'}
            aria-label={label}
          />
        </div>
      );
    }

    return (
      <div key={fieldKey} className="mb-6">
        <label htmlFor={fieldKey} className="block text-white mb-2 font-medium">{label}</label>
        <input
          id={fieldKey}
          type="text"
          name={fieldKey}
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => handleInputChange(fieldKey, e.target.value)}
          className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-sm"
          placeholder={`Enter ${label.toLowerCase()}...`}
          required
          aria-label={label}
        />
      </div>
    );
  };

  if (submitted) {
    return (
      <section className="min-h-screen w-full relative bg-black pt-32 pb-20 px-6" id="contact">
        <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000' }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-white mb-4">{t('contact.successMessage.title')}</h2>
            <p className="text-gray-300 text-lg mb-6">{t('contact.successMessage.description')}</p>
            <p className="text-indigo-300">{t('contact.successMessage.followUp')}</p>
            <button
              onClick={() => { setSubmitted(false); setSelectedRole(null); setFormData({ name: '', email: '', phone: '', country: '' }); setError(null); }}
              className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              {t('contact.successMessage.button')}
            </button>
          </div>
          <div className="mt-12">
            <h2 className="text-5xl font-bold text-white mb-4 text-center">{t('contact.connect.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 max-w-5xl mx-auto">
              {connectItems.map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
                  {i === 0 && <Phone className="w-6 h-6 text-indigo-400 mx-auto mb-4" aria-hidden="true" />}
                  {i === 1 && <Mail className="w-6 h-6 text-indigo-400 mx-auto mb-4" aria-hidden="true" />}
                  {i === 2 && <MapPin className="w-6 h-6 text-indigo-400 mx-auto mb-4" aria-hidden="true" />}
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  {item.href ? <a href={item.href} className="text-gray-300 hover:text-indigo-400 transition-colors block">{item.value}</a> : <span className="text-gray-300 block">{item.value}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full relative bg-black pt-32 pb-20 px-6" id="contact">
      <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000' }} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-300">{t('contact.description')}</p>
        </div>
        {error && <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center" role="alert">{error}</div>}
        {!selectedRole ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {userRoles.map((role, idx) => {
              const Icon = roleIcons[idx];
              return (
                <button key={role.id} onClick={() => handleRoleSelect(role)} className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-500/20 p-3 rounded-xl group-hover:bg-indigo-500/30 transition-colors">
                      <Icon className="w-6 h-6 text-indigo-400" aria-hidden="true" />
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
                  {(() => { const Icon = roleIcons[userRoles.findIndex(r => r.id === selectedRole.id)]; return <Icon className="w-6 h-6 text-indigo-400" aria-hidden="true" />; })()}
                  <h3 className="text-2xl font-bold text-white">{selectedRole.label}</h3>
                </div>
                <button onClick={() => setSelectedRole(null)} className="text-gray-400 hover:text-white transition-colors">Change Role</button>
              </div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-medium">{fieldLabels.name}</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-sm" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-medium">{fieldLabels.email}</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-sm" placeholder="Enter your email" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white mb-2 font-medium">{fieldLabels.phone}</label>
                  <div className="flex items-center">
                    {formData.country && phonePrefixesByCountry[formData.country] && <span className="inline-block w-16 p-4 bg-white/10 border border-white/20 rounded-l-lg text-gray-400" aria-label="Country code">{phonePrefixesByCountry[formData.country]}</span>}
                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className={`w-full p-4 bg-white/10 border border-white/20 ${formData.country && phonePrefixesByCountry[formData.country] ? 'rounded-r-lg' : 'rounded-lg'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-sm`} placeholder="Enter your phone number" required />
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Additional Information</h4>
                  {selectedRole.fields.map(renderField)}
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        )}
        <div className="mt-16">
          <h2 className="text-5xl font-bold text-white mb-4 text-center">{t('contact.connect.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10 max-w-5xl mx-auto">
            {connectItems.map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
                {i === 0 && <Phone className="w-6 h-6 text-indigo-400 mx-auto mb-4" aria-hidden="true" />}
                {i === 1 && <Mail className="w-6 h-6 text-indigo-400 mx-auto mb-4" aria-hidden="true" />}
                {i === 2 && <MapPin className="w-6 h-6 text-indigo-400 mx-auto mb-4" aria-hidden="true" />}
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                {item.href ? <a href={item.href} className="text-gray-300 hover:text-indigo-400 transition-colors block">{item.value}</a> : <span className="text-gray-300 block">{item.value}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}