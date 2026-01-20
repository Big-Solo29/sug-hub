import React from 'react';
import CallToAction from './ui/CallToAction'
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white   overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image Column - Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/2 relative min-h-125">
            <div className="absolute inset-0 bg-linear-to-b from-green-800 from-0% to-white to-90%  flex items-center justify-center rounded-t-2xl">
              <div className="text-white text-center">
                <p className="text-blue-200 text-xl">
                  <CallToAction />
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-1/2 p-8">
            <div className="max-w-md mx-auto">
              {/* Mobile Header */}
              <div className=" text-center mb-8">
                <div className="flex items-center justify-center mb-4 lg:mb-6">
                  <Link href='/' className=' border-2 border-[#1B7339] rounded-full p-2 mr-2 flex items-center justify-center'><img src="/logo.png" alt="" className=' sm:w-12.5 sm:h-12.5 w-10 h-10 object-cover' /></Link>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{subtitle}</p>
              </div>



              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;