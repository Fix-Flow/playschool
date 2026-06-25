import "./Footer.scss";
import { GraduationCap, MapPin, Phone, Mail, Clock, Globe, Camera, Play } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Activities', href: '#activities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact Us', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: Globe },
  { label: 'Instagram', href: '#', icon: Camera },
  { label: 'YouTube', href: '#', icon: Play },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-warm-400" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-candy-400 text-white">
                <GraduationCap size={24} />
              </div>
              <span className="text-2xl font-extrabold font-heading text-white">
                Play<span className="text-candy-400">Schl</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-warm-500 max-w-xs">
              Nurturing bright futures through play-based learning. Where every child&apos;s potential is celebrated! 🌟
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white font-heading">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-warm-500 transition-colors hover:text-candy-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white font-heading">
              Reach Us
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-candy-400" />
                <span className="text-warm-500">123 Learning Lane, Education District, City - 500001</span>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-warm-500 hover:text-candy-400 transition-colors">
                  <Phone size={16} className="shrink-0 text-ocean-400" />
                  +91 12345 67890
                </a>
              </li>
              <li>
                <a href="mailto:hello@playschl.com" className="flex items-center gap-3 text-sm text-warm-500 hover:text-candy-400 transition-colors">
                  <Mail size={16} className="shrink-0 text-sunny-400" />
                  hello@playschl.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock size={16} className="shrink-0 text-lavender-400" />
                <span className="text-warm-500">Mon – Sat: 8:00 AM – 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white font-heading">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`Follow us on ${social.label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-warm-800 text-warm-500 transition-all hover:bg-candy-400 hover:text-white hover:scale-110 hover:rotate-[-5deg]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-warm-600">
              Stay connected for updates, events, and happy moments! 🎈
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-800 py-6 text-center text-xs text-warm-600">
          <p>© {new Date().getFullYear()} PlaySchl. All rights reserved. Made with ❤️ for tiny learners.</p>
        </div>
      </div>
    </footer>
  );
}
