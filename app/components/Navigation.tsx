'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { openCalendlyPopup } from './CalendlyModal';

const navItems = [
  { href: '/innovator-founder-visa', label: 'Innovator Founder Visa', hasDropdown: false },
  { href: '/global-talent-visa', label: 'Global Talent Visa', hasDropdown: false },
  { href: '/testimonials', label: 'Testimonials', hasDropdown: false },
  // Blog is intentionally hidden from the navigation menu
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      {pathname === '/' && (
        <div className="px-6 lg:px-12 xl:px-16">
          {/* Announcement Banner */}
          <div 
            className="mt-2 mb-2 animate__animated animate__backInLeft"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              background: 'rgb(182, 234, 31)',
              padding: '7px 10px',
              gap: '8px',
              borderRadius: '100px',
            }}
          >
          <div className="flex items-center gap-2 w-full relative">
            <div className="flex items-center gap-2 flex-1 min-w-0 sm:flex-none sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
              <svg
                className="w-4 h-4 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: 'rgb(47, 62, 5)' }}
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-center break-words" style={{ color: 'rgb(47, 62, 5)' }}>
                Join our community of successful and prospective visa applicants 
              </span>
            </div>
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0 sm:ml-auto"
              style={{ backgroundColor: 'rgb(224, 255, 133)' }}
              aria-label="Learn more"
            >
              <Image
                src="/arrow.gif"
                alt="Arrow"
                width={16}
                height={16}
                className="object-contain"
              />
            </button>
          </div>
        </div>
        </div>
      )}

      <div className="px-4 lg:px-12 xl:px-16 sticky top-1 z-50 bg-transparent pt-1">
        <nav
          className={`w-full rounded-full mb-4 shadow-lg transition-all duration-300 ${
            isScrolled ? 'bg-[#1c1819]/76 backdrop-blur-md' : 'bg-[#1c1819]'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between relative gap-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-0 z-10 md:justify-start min-w-0"
            aria-label="OnboardVisa Home"
          >
            <Image
              src="/onboard_icon.svg"
              alt="OnboardVisa icon"
              width={40}
              height={24}
              className="object-contain md:w-[52px] md:h-8 w-10 h-7"
            />
            <span className="ml-1 text-[15px] md:text-xl font-bold text-white truncate max-w-[120px] md:max-w-none">
              OnboardVisa
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-white ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-gray-300'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Button */}
          <div className="hidden md:flex md:items-center z-10">
            {/* Try for free Button */}
            <button
              onClick={() => openCalendlyPopup()}
              className="rounded-lg border border-[#1c1819] px-4 py-2 text-sm font-medium text-[#1c1819] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#e6ff32' }}
            >
              Book a session
            </button>
          </div>

          {/* Mobile - Book a session button and menu button */}
          <div className="md:hidden flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => openCalendlyPopup()}
              className="rounded-lg border border-[#1c1819] px-2 py-1 text-[12px] font-medium text-[#1c1819] hover:opacity-90 transition-opacity whitespace-nowrap"
              style={{ backgroundColor: '#e6ff32' }}
            >
              Book a session
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-gray-300 hover:bg-gray-700"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Navigation (rendered below the pill-shaped nav so it isn't rounded) */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 mt-1"
        >
          <div className="rounded-2xl bg-[#1c1819] border border-gray-600 py-4 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1 px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 px-3">
              <button
                onClick={() => {
                  openCalendlyPopup();
                  setIsOpen(false);
                }}
                className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-[#1c1819] text-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#e6ff32' }}
              >
                Book a session
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
