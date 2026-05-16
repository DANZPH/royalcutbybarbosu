"use client";

import { useI18n } from "@/lib/useI18n";

export default function Footer() {
  const { messages } = useI18n();

  return (
    <footer className="w-full py-20 bg-[#121212] dark:bg-black border-t border-[#E7CC89]/10">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 max-w-[1380px] mx-auto gap-8">
        <div className="space-y-6">
          <div className="text-xl font-serif uppercase text-[#E7CC89]">{messages.footer.brand}</div>
          <div className="font-serif text-sm tracking-wide text-[#E7CC89]">
            <p className="mb-1 text-gray-400">{messages.footer.copyright}</p>
          </div>
          <div className="flex gap-4">
            <a className="text-[#E7CC89] hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-[#E7CC89] hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="font-label-caps uppercase text-white tracking-widest text-xs">{messages.footer.contactUs}</h4>
            <ul className="font-serif text-sm tracking-wide space-y-2">
              <li>
                <a className="text-gray-400 hover:text-[#E7CC89] transition-all" href="mailto:royalcutbybarbosu@gmail.com">
                  royalcutbybarbosu@gmail.com
                </a>
              </li>
              <li className="text-gray-400">{messages.footer.address}</li>
              <li className="text-gray-400">{messages.footer.phone}</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-caps uppercase text-white tracking-widest text-xs">{messages.footer.hours}</h4>
            <ul className="font-serif text-sm tracking-wide space-y-2 text-gray-400">
              <li>{messages.footer.monFri}</li>
              <li>{messages.footer.saturday}</li>
              <li>{messages.footer.sunday}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1380px] mx-auto px-6 mt-16 pt-8 border-t border-white/5">
        <p className="font-serif text-xs text-gray-600 uppercase tracking-widest text-center md:text-left">
          {messages.footer.tagline}
        </p>
      </div>
    </footer>
  );
}
