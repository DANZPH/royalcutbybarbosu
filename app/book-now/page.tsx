"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const SERVICES = [
  "Haircut",
  "Haircut with Shampoo and Blowdry",
  "Head Shave / Skin Shave",
  "Hair Art",
  "Shampoo",
  "Blowdry Short",
  "Blowdry Long",
  "Iron",
  "Down Perm with Xtenso",
  "Cold Perm with Dulcia - Short",
  "Cold Perm with Dulcia - Medium",
  "Cold Perm with Dulcia - Long",
  "Others"
];

const TIME_SLOTS = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function BookNowPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: "",
    date: null as Date | null,
    time: "",
    requests: "",
    fullName: "",
    phone: "",
    email: "",
    isNewCustomer: false,
  });

  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  
  // Calendar state
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const daysInMonth = useMemo(() => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    // Padding for first week
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  }, [calendarDate]);

  const monthName = calendarDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const selectDate = (date: Date) => {
    setFormData({ ...formData, date });
    setIsDateModalOpen(false);
  };

  const changeMonth = (offset: number) => {
    setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + offset, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: formData.date?.toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          }),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        // Clear form after success if needed
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your internet connection.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = ["Service", "Date & Time", "Requests", "Your Info"];

  return (
    <main className="pt-[180px] pb-20 bg-[#f7f3eb] min-h-screen text-[#111]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT SIDE - FORM */}
          <div>
            {/* PROGRESS BAR */}
            <div className="relative mb-24 px-2">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300 -translate-y-1/2 z-0"></div>
              <div className="relative flex items-center justify-between z-10">
                {steps.map((step, idx) => (
                  <div key={step} className="flex flex-col items-center group">
                    <div 
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-2
                        ${idx < currentStep ? "bg-black border-black text-white" : ""}
                        ${idx === currentStep ? "bg-[#E7CC89] border-black text-black scale-110 shadow-lg" : ""}
                        ${idx > currentStep ? "bg-white border-gray-300 text-gray-400" : ""}
                      `}
                    >
                      {idx < currentStep ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      ) : (
                        idx + 1
                      )}
                    </div>
                    <span className={`
                      hidden md:block absolute -bottom-8 whitespace-nowrap uppercase text-[10px] tracking-[2px] font-bold transition-colors duration-300
                      ${idx <= currentStep ? "text-black" : "text-gray-400"}
                    `}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-8">
              {currentStep === 0 && "Choose your preferred service."}
              {currentStep === 1 && "Pick a date and time that works for you."}
              {currentStep === 2 && "Any special requests for us?"}
              {currentStep === 3 && "Tell us a bit about yourself."}
            </h1>

            {isSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-8 py-10 rounded mb-16 animate-in fade-in duration-500">
                <h2 className="text-3xl font-serif mb-4">Booking Confirmed!</h2>
                <p className="text-lg">Thank you for booking with us, {formData.fullName}. We have received your request for a {formData.service} and will see you on {formData.date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {formData.time}.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-8 bg-black text-white px-8 py-3 uppercase tracking-widest text-xs hover:bg-[#E7CC89] hover:text-black transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-500 text-lg leading-relaxed mb-16 max-w-xl">
                  {currentStep === 0 && "Select from our wide range of grooming services."}
                  {currentStep === 1 && "Choose your preferred date and time for your next grooming session."}
                  {currentStep === 2 && "Let us know if you have specific preferences or styles in mind."}
                  {currentStep === 3 && "Provide your contact details to confirm your appointment."}
                </p>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  
                  {/* STEP 1: SERVICE */}
                  {currentStep === 0 && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div>
                        <label className="uppercase text-xs tracking-[3px] block mb-5 font-semibold text-gray-600">Service*</label>
                        <div className="relative">
                          <button 
                            type="button"
                            onClick={() => setIsServiceOpen(!isServiceOpen)}
                            className="w-full border-b border-gray-300 py-5 flex items-center justify-between text-left"
                          >
                            <span className={`text-xl ${formData.service ? "text-black" : "text-gray-400"}`}>
                              {formData.service || "Select Service"}
                            </span>
                            <span className={`transition-transform duration-300 ${isServiceOpen ? "rotate-180" : ""}`}>
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </span>
                          </button>
                          
                          {isServiceOpen && (
                            <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 shadow-2xl z-50 max-h-[400px] overflow-y-auto">
                              {SERVICES.map((s) => (
                                <button
                                  key={s}
                                  type="button"
                                  onClick={() => { setFormData({...formData, service: s}); setIsServiceOpen(false); }}
                                  className="w-full text-left px-6 py-4 hover:bg-black hover:text-white transition-colors border-b border-gray-50 last:border-0"
                                >
                                  {s}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="pt-10 flex justify-end">
                        <button 
                          type="button" 
                          onClick={handleNext}
                          disabled={!formData.service}
                          className="bg-black text-white px-12 py-5 uppercase tracking-[3px] text-sm hover:bg-[#E7CC89] hover:text-black transition-all disabled:opacity-50"
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: DATE & TIME */}
                  {currentStep === 1 && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div>
                        <label className="uppercase text-xs tracking-[3px] block mb-5 font-semibold text-gray-600">Appointment Date*</label>
                        <button 
                          type="button"
                          onClick={() => setIsDateModalOpen(true)}
                          className="w-full border-b border-gray-300 py-5 flex items-center justify-between"
                        >
                          <span className={`text-xl ${formData.date ? "text-black" : "text-gray-400"}`}>
                            {formData.date ? formData.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Select Date"}
                          </span>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </button>
                      </div>

                      <div>
                        <label className="uppercase text-xs tracking-[3px] block mb-5 font-semibold text-gray-600">Appointment Time*</label>
                        <div className="relative">
                          <button 
                            type="button"
                            onClick={() => setIsTimeOpen(!isTimeOpen)}
                            className="w-full border-b border-gray-300 py-5 flex items-center justify-between"
                          >
                            <span className={`text-xl ${formData.time ? "text-black" : "text-gray-400"}`}>
                              {formData.time || "Select Time"}
                            </span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                          
                          {isTimeOpen && (
                            <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 shadow-2xl z-50 max-h-[300px] overflow-y-auto">
                              {TIME_SLOTS.map((t) => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => { setFormData({...formData, time: t}); setIsTimeOpen(false); }}
                                  className="w-full text-left px-6 py-4 hover:bg-black hover:text-white transition-colors"
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between pt-10">
                        <button type="button" onClick={handleBack} className="border border-gray-300 px-10 py-5 uppercase tracking-[3px] text-sm hover:bg-black hover:text-white transition-all">Back</button>
                        <button 
                          type="button" 
                          onClick={handleNext}
                          disabled={!formData.date || !formData.time}
                          className="bg-black text-white px-12 py-5 uppercase tracking-[3px] text-sm hover:bg-[#E7CC89] hover:text-black transition-all disabled:opacity-50"
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: REQUESTS */}
                  {currentStep === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <label className="uppercase text-xs tracking-[3px] block mb-8 font-semibold text-gray-600">Special Requests</label>
                      <textarea 
                        rows={8}
                        placeholder="Hair style, beard preference, etc."
                        value={formData.requests}
                        onChange={(e) => setFormData({...formData, requests: e.target.value})}
                        className="w-full border border-gray-300 bg-transparent p-6 text-lg focus:outline-none focus:border-black transition-colors"
                      ></textarea>

                      <div className="flex justify-between pt-16">
                        <button type="button" onClick={handleBack} className="border border-gray-300 px-10 py-5 uppercase tracking-[3px] text-sm hover:bg-black hover:text-white transition-all">Back</button>
                        <button type="button" onClick={handleNext} className="bg-black text-white px-12 py-5 uppercase tracking-[3px] text-sm hover:bg-[#E7CC89] hover:text-black transition-all">Proceed</button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: YOUR INFO */}
                  {currentStep === 3 && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div>
                        <label className="uppercase text-xs tracking-[3px] block mb-4 font-semibold text-gray-600">Full Name*</label>
                        <input 
                          type="text" 
                          placeholder="Your Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="w-full border-b border-gray-300 bg-transparent py-5 text-xl focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div>
                        <label className="uppercase text-xs tracking-[3px] block mb-4 font-semibold text-gray-600">Phone Number*</label>
                        <input 
                          type="text" 
                          placeholder="09123456789"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full border-b border-gray-300 bg-transparent py-5 text-xl focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      <div>
                        <label className="uppercase text-xs tracking-[3px] block mb-4 font-semibold text-gray-600">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="example@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full border-b border-gray-300 bg-transparent py-5 text-xl focus:outline-none focus:border-black transition-colors"
                        />
                      </div>

                      {/* NEW CUSTOMER CHECKBOX */}
                      <div className="flex items-center gap-4 py-4">
                        <input 
                          type="checkbox" 
                          id="new-customer"
                          checked={formData.isNewCustomer}
                          onChange={(e) => setFormData({...formData, isNewCustomer: e.target.checked})}
                          className="w-6 h-6 accent-black cursor-pointer"
                        />
                        <label htmlFor="new-customer" className="text-lg cursor-pointer select-none">Are you a new customer?</label>
                      </div>

                      <div className="flex justify-between pt-10">
                        <button type="button" onClick={handleBack} className="border border-gray-300 px-10 py-5 uppercase tracking-[3px] text-sm hover:bg-black hover:text-white transition-all">Back</button>
                        <button 
                          type="submit" 
                          disabled={!formData.fullName || !formData.phone || isSubmitting}
                          className="bg-black text-white px-12 py-5 uppercase tracking-[3px] text-sm hover:bg-[#E7CC89] hover:text-black transition-all disabled:opacity-50 flex items-center justify-center min-w-[200px]"
                        >
                          {isSubmitting ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : "Confirm Booking"}
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              </>
            )}
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="hidden lg:block sticky top-[130px]">
            <div className="relative h-[800px] w-full overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop"
                alt="Barbershop"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>

        </div>
      </div>

      {/* DATE PICKER MODAL */}
      {isDateModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="bg-[#F4EFE6] w-full max-w-xl p-8 md:p-12 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-10">
              <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <h2 className="font-serif text-3xl md:text-4xl text-center capitalize">
                {monthName}
              </h2>
              <button onClick={() => changeMonth(1)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
              <button 
                onClick={() => setIsDateModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center mb-6 font-bold text-gray-500 text-sm">
              {DAYS_OF_WEEK.map(d => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {daysInMonth.map((date, i) => {
                if (!date) return <div key={`empty-${i}`} className="h-12 md:h-14"></div>;
                
                const isSelected = formData.date?.toDateString() === date.toDateString();
                const isToday = new Date().toDateString() === date.toDateString();
                const isPast = date < new Date(new Date().setHours(0,0,0,0));

                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    disabled={isPast}
                    onClick={() => selectDate(date)}
                    className={`
                      h-12 md:h-14 rounded-none flex items-center justify-center text-lg transition-all
                      ${isSelected ? "bg-black text-white" : "hover:bg-black hover:text-white"}
                      ${isToday && !isSelected ? "border border-black" : ""}
                      ${isPast ? "opacity-20 cursor-not-allowed" : "cursor-pointer"}
                    `}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
