"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ContactBreadcrumb from "./cont";
import RedBtn from '../components/redButton/btn'

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContactBreadcrumb />
        
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col justify-between transition-all duration-300 ">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Call To Us</h3>
                  <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
                  <p className="text-gray-800 font-medium">Phone: +8801611112222</p>
                </div>

                <div className="w-full h-px bg-gray-200 my-6"></div>

                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Write To US</h3>
                  <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
                  <div className="space-y-1">
                    <p className="text-gray-800">Emails: customer@exclusive.com</p>
                    <p className="text-gray-800">Emails: support@exclusive.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 h-full transition-all duration-300 ">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="col-span-1">
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name" 
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email" 
                      className="w-full" 
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone" 
                      className="w-full" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    className="w-full h-48 resize-none" 
                    required
                  />
                </div>
                
                <div className="flex justify-end">
                  <RedBtn >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </RedBtn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}