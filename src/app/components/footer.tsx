
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Exclusive</h3>
            <p className="font-medium">Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="flex border border-white rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent p-2 w-full outline-none text-sm"
              />
              <button className="px-3">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <p className="text-sm">
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Account</h3>
            <ul className="space-y-3">
              <li>
                <p  className="text-sm hover:underline">
                  My Account
                </p>
              </li>
              <li>
                <p  className="text-sm hover:underline">
                  Cart
                </p>
              </li>
              <li>
                <p  className="text-sm hover:underline">
                  Wishlist
                </p>
              </li>
              <li>
                <p  className="text-sm hover:underline">
                  Shop
                </p>
              </li>
            </ul>
          </div>

          {/* Quick p Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Quick p</h3>
            <ul className="space-y-3">
              <li>
                <p  className="text-sm hover:underline">
                  Privacy Policy
                </p>
              </li>
              <li>
                <p  className="text-sm hover:underline">
                  Terms Of Use
                </p>
              </li>
              <li>
                <p  className="text-sm hover:underline">
                  FAQ
                </p>
              </li>
              <li>
                <p  className="text-sm hover:underline">
                  Contact
                </p>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
        
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
