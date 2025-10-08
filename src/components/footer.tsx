import Link from "next/link";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 pt-8 pb-6 text-gray-700 relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Logo and Description */}
        <div>
          <h4 className="text-2xl font-bold text-gray-800">ACE Advisors</h4>
          <p className="mt-2 text-sm">
            Empowering businesses with data-driven insights and valuation tools tailored for emerging markets.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-green-600 ">Home</Link></li>
            <li><Link href="/features" className="hover:text-green-600 ">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-green-600 ">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-green-600 ">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://www.linkedin.com/company/ace-investment-impact-advisors-plc/" className="hover:text-green-600 text-xl "><FaLinkedin /></Link>
            <Link href="https://x.com/Advisors_ACE" className="hover:text-green-600 text-xl "><FaXTwitter /></Link>
            <Link href="https://aceadvisors.org/" className="hover:text-green-600 text-xl "><FaGlobe /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-300 pt-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} ACE Advisors. All Rights Reserved.</p>
        <Link href='https://www.uncharted-group.com/' className="mt-2 md:mt-0 md:text-right text-center w-full md:w-auto ">Powered by <span className="font-semibold text-purple-950 hover:underline">Uncharted</span></Link>
      </div>
    </footer>
  );
}
