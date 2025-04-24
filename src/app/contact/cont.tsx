import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactBreadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500">
      <Link 
        href="/" 
        className="hover:text-gray-700 transition-colors duration-200"
      >
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="font-medium text-gray-900">Contact</span>
    </nav>
  );
}