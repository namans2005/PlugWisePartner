import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className=" py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">PlugWise</h3>
            <p className="text-navy-200 mb-4">
              Monetize your EV charger and join India's largest EV charging network.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-navy-200 hover:text-energy-green transition">Home</Link></li>
              <li><Link href="/auth/register" className="text-navy-200 hover:text-energy-green transition">Become a Partner</Link></li>
              <li><Link href="/pricing" className="text-navy-200 hover:text-energy-green transition">Pricing</Link></li>
              <li><Link href="/safety" className="text-navy-200 hover:text-energy-green transition">Safety</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-navy-200 hover:text-energy-green transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-navy-200 hover:text-energy-green transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/plugwise" target="_blank" rel="noopener noreferrer" className="text-navy-200 hover:text-energy-green transition">
                <Facebook />
              </Link>
              <Link href="https://twitter.com/plugwise" target="_blank" rel="noopener noreferrer" className="text-navy-200 hover:text-energy-green transition">
                <Twitter />
              </Link>
              <Link href="https://instagram.com/plugwise" target="_blank" rel="noopener noreferrer" className="text-navy-200 hover:text-energy-green transition">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-800 text-center text-navy-200">
          <p>&copy; {new Date().getFullYear()} PlugWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}