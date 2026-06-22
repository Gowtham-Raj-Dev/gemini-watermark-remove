"use client";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-6 py-2">
          
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex items-center gap-6 font-semibold text-[var(--text)] text-[15px]">
              <a href="/image" className="hover:text-[var(--brand)] transition-colors">Image Tool</a>
              <a href="/video" className="hover:text-[var(--brand-2)] transition-colors">Video Tool</a>
            </div>
            <p className="text-[13px] text-[var(--muted)] max-w-[320px] leading-relaxed">
              We do not store your images or videos. All processing is done locally on your device, ensuring your data remains 100% private.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end gap-5 text-center md:text-right">
            <div className="flex items-center gap-6 font-medium text-[14px] text-[var(--muted)]">
              <a href="/privacypolicy" className="hover:text-[var(--text)] transition-colors">Privacy Policy</a>
              <a href="/termsandconditions" className="hover:text-[var(--text)] transition-colors">Terms & Conditions</a>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2 text-[13px]">
              <div className="text-[var(--muted)] font-mono">
                © 2026 <a href="https://codelove.in" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--text)] transition-colors">codelove.in</a>. All rights reserved.
              </div>
              <div className="font-semibold text-[var(--text)] flex items-center justify-center md:justify-end gap-1.5 mt-1">
                <span>Developed with</span>
                <span className="text-[#ef4444] text-[15px]">❤️</span>
                <span className="text-[#3b82f6] tracking-tighter">&lt;&gt;</span>
                <span>by</span>
                <a href="https://gowtham.codelove.in/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[var(--brand)] transition-colors">Gowtham</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
