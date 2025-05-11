
import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, UsersIcon, BellIcon, GlobeIcon, DevicePhoneMobileIcon, PuzzlePieceIcon, ArrowRightIcon } from "@/components/icons/HeroIcons";
import HeroImage from "@/components/HeroImage";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">CalendarPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Benefits</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <Button variant="outline" className="ml-4">Log in</Button>
              <Button>Sign up free</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Scheduling made simple for busy professionals
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Our intelligent booking platform helps consultants, mentors, and teams 
                manage appointments with drag-and-drop ease and real-time updates.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Start for free
                </Button>
                <Button size="lg" variant="outline">
                  View demo
                </Button>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                No credit card required • Free 14-day trial
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Powerful features to simplify your scheduling</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your calendar, bookings, and client relationships in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<CalendarIcon className="h-10 w-10 text-blue-600" />}
              title="Grid-based Calendar"
              description="Intuitive, visual calendar interface that makes scheduling a breeze with drag-and-drop functionality."
            />
            <FeatureCard 
              icon={<ClockIcon className="h-10 w-10 text-blue-600" />}
              title="Smart Time Slots"
              description="Customize your availability with flexible time slots that adapt to your workflow and preferences."
            />
            <FeatureCard 
              icon={<UsersIcon className="h-10 w-10 text-blue-600" />}
              title="User Authentication"
              description="Secure access for you and your team with role-based permissions and controls."
            />
            <FeatureCard 
              icon={<BellIcon className="h-10 w-10 text-blue-600" />}
              title="Smart Notifications"
              description="Stay informed with real-time booking updates and customizable notification preferences."
            />
            <FeatureCard 
              icon={<GlobeIcon className="h-10 w-10 text-blue-600" />}
              title="Timezone Intelligence"
              description="Automatic timezone detection ensures everyone knows exactly when the meeting is happening."
            />
            <FeatureCard 
              icon={<PuzzlePieceIcon className="h-10 w-10 text-blue-600" />}
              title="Calendar Integration"
              description="Seamlessly connects with Google Calendar, Outlook, and other popular calendar services."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why professionals choose CalendarPro</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our booking platform is designed specifically for consultants, mentors, and teams who value their time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Consultants & Mentors</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
                  <p className="ml-3 text-lg text-gray-700">Establish professional credibility with a sleek booking experience</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
                  <p className="ml-3 text-lg text-gray-700">Reduce scheduling back-and-forth by 80%</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
                  <p className="ml-3 text-lg text-gray-700">Customize booking flows for different client types</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
                  <p className="ml-3 text-lg text-gray-700">Protect your calendar from overbooking</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Teams & Organizations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
                  <p className="ml-3 text-lg text-gray-700">Coordinate scheduling across multiple team members</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
                  <p className="ml-3 text-lg text-gray-700">Real-time visibility into availability and bookings</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
                  <p className="ml-3 text-lg text-gray-700">Intelligent routing of appointments to the right expert</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">✓</div>
                  <p className="ml-3 text-lg text-gray-700">Comprehensive analytics to optimize scheduling efficiency</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Works beautifully on every device</h2>
              <p className="mt-4 text-lg text-gray-600">
                Whether you're at your desk or on the go, CalendarPro adapts to your device, giving you and your clients 
                a seamless booking experience anywhere, anytime.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Responsive design for all screen sizes</span>
                </li>
                <li className="flex items-center">
                  <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Fast loading mobile experience</span>
                </li>
                <li className="flex items-center">
                  <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Offline capability for viewing schedules</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-inner flex justify-center">
              <div className="w-64 bg-white rounded-3xl shadow-lg p-4 border border-gray-200">
                <div className="bg-blue-500 text-white rounded-lg p-2 text-center text-sm mb-3">CalendarPro Mobile</div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="h-12 bg-gray-100 rounded flex items-center px-3">
                      <div className="w-8 h-8 rounded-full bg-blue-200 mr-2"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-2 mt-1 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by professionals worldwide</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              See how CalendarPro is transforming how professionals manage their meetings and appointments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="CalendarPro cut my scheduling time by 90%. My clients love the professional experience."
              name="Sarah Johnson"
              title="Business Consultant"
            />
            <TestimonialCard 
              quote="The real-time updates and integrations with my existing tools made this an easy choice for our team."
              name="Michael Chen"
              title="Product Manager"
            />
            <TestimonialCard 
              quote="I use CalendarPro daily for mentoring sessions. The drag-and-drop interface is intuitive and saves me hours each week."
              name="David Smith"
              title="Career Coach"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Book Smarter. Build Trust.</h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of professionals who've elevated their scheduling experience with CalendarPro.
          </p>
          <div className="mt-10">
            <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
              Get started free
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-sm text-blue-200">No credit card required • Free 14-day trial</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
