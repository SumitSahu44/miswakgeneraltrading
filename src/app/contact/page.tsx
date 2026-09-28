'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { CONTACT_INFO } from '@/data/contactInfo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const showToast = useCartStore((state) => state.showToast);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast('Thank you for reaching out to MGTE! We will reply shortly.');
  };

  return (
    <div className="py-12 lg:py-20 bg-[#F8F4E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8A8C8F] mb-8">
          <Link href="/" className="hover:text-[#006838]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#003D25] font-semibold">Contact Us</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024]">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#003D25]">
            Contact Miswak General Trading Est
          </h1>
          <p className="text-sm sm:text-base text-[#171717]/75">
            Have questions about our products, retail orders, or international shipping? We are here to help.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#003D25] text-white rounded-3xl p-8 border border-[#006838]/40 space-y-6 shadow-md">
              <h2 className="font-serif text-2xl font-bold text-[#F8F4E9]">
                Head Office Info
              </h2>
              <p className="text-xs text-[#EFE5D1]/80 leading-relaxed">
                Reach out directly to our customer service or export management team.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#004D2C] flex items-center justify-center text-[#E5A024] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Location</h4>
                    <p className="text-[#EFE5D1]/90 font-semibold">{CONTACT_INFO.companyName}</p>
                    <p className="text-[#EFE5D1]/80 text-xs leading-relaxed mt-0.5">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#004D2C] flex items-center justify-center text-[#E5A024] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Email Address</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#EFE5D1]/80 hover:text-white underline break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#004D2C] flex items-center justify-center text-[#E5A024] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Phone / WhatsApp</h4>
                    <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-[#EFE5D1]/80 hover:text-white underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EFE5D1] shadow-xs space-y-2">
              <h3 className="font-serif text-base font-bold text-[#003D25]">Working Hours</h3>
              <p className="text-xs text-[#8A8C8F]">Monday – Saturday: 9:00 AM – 6:00 PM (PKT)</p>
              <p className="text-xs text-[#8A8C8F]">Sunday: Closed</p>
            </div>
          </div>

          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#EFE5D1] shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#003D25] mb-6">
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <div className="bg-[#003D25] text-white p-8 rounded-2xl space-y-3 animate-fade-in text-center">
                <CheckCircle2 className="w-12 h-12 text-[#E5A024] mx-auto" />
                <h3 className="font-serif text-2xl font-bold">Message Delivered!</h3>
                <p className="text-xs text-[#EFE5D1]/80 max-w-md mx-auto">
                  Thank you for writing to Miswak General Trading Est. A member of our support team will respond to your email within 12–24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#003D25] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ahmed Khan"
                      className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#003D25] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ahmed@example.com"
                      className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#003D25] mb-1">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Product Inquiry / Order Status / General Query"
                    className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#003D25] mb-1">Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#006838] hover:bg-[#004D2C] text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
