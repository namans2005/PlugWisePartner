import Link from 'next/link';
import { Home, Zap, Wallet, User, LogIn } from 'lucide-react';
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  return (
    <nav className=" p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="text-electric-yellow" />
          <span className="font-bold text-xl">PlugWise</span>
        </Link>
        <div className="flex gap-6">
          <Link href="/dashboard" className="flex items-center gap-1 hover:text-electric-yellow transition-colors">
            <Wallet /> Earnings
          </Link>
          <Link href="/dashboard" className="flex items-center gap-1 hover:text-electric-yellow transition-colors">
            <LogIn /> Partner Login
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}