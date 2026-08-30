import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import { SocialLinks } from './SocialLinks';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const quickSubjects = [
    'Brand Identity & Logo Design',
    'Social Media Graphics Package',
    'Video Editing & Reels',
    'AI Visuals & Concept Art',
    'Medha Exam Collaboration',
    'General Inquiry'
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate brief send delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#070d18] relative overflow-hidden border-t border-slate-200 dark:border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Have a project, collaboration opportunity or creative idea? Feel free to get in touch with me.
          </p>
          <div className="w-16 h-1 bg-[#0f2b5c] dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Contact Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Cards & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Direct Communication
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I am responsive to client inquiries, creative agency briefs, and educational technology partnerships worldwide.
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-4 mb-8">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#0b1329] border border-slate-200/90 dark:border-blue-900/40 shadow-xs flex items-center justify-between group hover:border-blue-400 dark:hover:border-blue-600 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(profileData.email, 'email')}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#0b1329] border border-slate-200/90 dark:border-blue-900/40 shadow-xs flex items-center justify-between group hover:border-blue-400 dark:hover:border-blue-600 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={`tel:${profileData.phone}`}
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(profileData.phone, 'phone')}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedItem === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#0b1329] border border-slate-200/90 dark:border-blue-900/40 shadow-xs flex items-center justify-between group hover:border-blue-400 dark:hover:border-blue-600 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                        Location / Work Mode
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {profileData.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours / Response Promise */}
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 flex items-center gap-3 text-xs text-slate-700 dark:text-blue-200">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Typical response time: <strong>Within 4–12 hours</strong> for project briefs and quotations.</span>
              </div>
            </div>

            {/* Social Media Links Section */}
            <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 mt-8">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3">
                Social Profiles & Portfolios:
              </span>
              <SocialLinks variant="contact" />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0b1329] border border-slate-200/90 dark:border-blue-900/60 shadow-xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                    Thank you for reaching out, Prosenjit Biswas has received your request and will follow up shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0f2b5c] dark:bg-blue-600 hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    Fill out the fields below and I'll get back to you with timelines and creative concepts.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Quick Subject Selectors */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject / Project Type
                    </label>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {quickSubjects.map((sub) => (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => setFormData({ ...formData, subject: sub })}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                            formData.subject === sub
                              ? 'bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-300 border-blue-400 font-semibold'
                              : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Or enter custom subject..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message / Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your design goals, requirements, or timelines..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#0f2b5c] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-pulse">Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
