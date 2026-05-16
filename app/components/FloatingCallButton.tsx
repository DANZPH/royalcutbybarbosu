'use client';

import React from 'react';
import { useI18n } from "@/lib/useI18n";

const FloatingCallButton = () => {
    const { messages } = useI18n();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center">
            <div className="bg-black text-white px-3 py-1 rounded-md mr-3 text-sm font-medium shadow-lg animate-in fade-in slide-in-from-right-2 duration-200">
                {messages.floatingCall.label}
            </div>
            <a
                href="tel:91939263"
                className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                aria-label={messages.floatingCall.aria}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:rotate-12 transition-transform duration-300"
                >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            </a>
        </div>
    );
};

export default FloatingCallButton;
