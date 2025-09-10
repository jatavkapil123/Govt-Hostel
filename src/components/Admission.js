import React from 'react';
import { motion } from 'framer-motion';

const Admission = () => {
  const requirements = [
    "Caste Certificate (proof of SC category)",
    "Identity Proof (Aadhaar card, etc.)",
    "Address Proof",
    "Proof of Student Status (college admission letter or ID)",
    "Income Certificate (if applicable)"
  ];

  const hostel = {
    name: "SC Boys Hostel",
    location: "Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462038",
    established: "2018",
    contact: "8109397953",
    warden: "Sanjay Patel"
  };



  return (
    <section id="admission" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Admission <span className="text-primary-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete admission process for SC Boys Hostel in Bhopal, Madhya Pradesh
          </p>
        </motion.div>

        {/* Hostel Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hostel Information</h3>
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">{hostel.name}</h4>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Location:</span> {hostel.location}</p>
                <p><span className="font-semibold">Established:</span> {hostel.established}</p>
                <p><span className="font-semibold">Contact:</span> {hostel.contact}</p>
                <p><span className="font-semibold">Warden:</span> {hostel.warden}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step-by-Step Admission Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Step-by-Step Admission Process</h3>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Identify the Relevant Hostel",
                details: [
                  "Contact SC Boys Hostel at Abbas Nagar, Gandhi Nagar, Bhopal",
                  "Note down the contact details: 8109397953",
                  "Speak with Warden Sanjay Patel for admission inquiries"
                ]
              },
              {
                step: "2",
                title: "Visit the Official SC Development Portal",
                details: [
                  "Go to the Madhya Pradesh SC Development Portal (scdevelopmentmp.nic.in)",
                  "Navigate to the Hostels section",
                  "Find your target hostel to access basic details, capacity, and management information",
                  "Get contact information of superintendent/warden"
                ]
              },
              {
                step: "3",
                title: "Contact Hostel Authorities for Application Forms",
                details: [
                  "Reach out directly to the superintendent or warden",
                  "Request application forms and important dates",
                  "Inquire about deadlines, fees, and specific requirements",
                  "Ask about eligibility criteria and document requirements"
                ]
              },
              {
                step: "4",
                title: "Prepare Necessary Documents",
                details: [
                  "Caste Certificate (proof of SC category)",
                  "Identity Proof (Aadhaar card, etc.)",
                  "Address Proof",
                  "Proof of Student Status (current college admission letter or ID)",
                  "Income Certificate (if applicable)"
                ]
              },
              {
                step: "5",
                title: "Submit Application",
                details: [
                  "Fill out the application form completely",
                  "Attach all required documents",
                  "Submit via hostel office or prescribed online portal",
                  "Include any processing/application fees if applicable"
                ]
              },
              {
                step: "6",
                title: "Track and Respond to Updates",
                details: [
                  "Confirm receipt of your application",
                  "Stay in touch with hostel authorities for updates",
                  "Monitor application status regularly",
                  "Be prepared for verification or interview if required",
                  "Await final allotment decision"
                ]
              },
              {
                step: "7",
                title: "Hostel Allotment & Move-in",
                details: [
                  "Receive instructions about fees and move-in date",
                  "Complete allotment formalities upon arrival",
                  "Submit remaining documents and payments",
                  "Receive room/allotment details and hostel guidelines"
                ]
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h4>
                    <ul className="space-y-2">
                      {process.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Important Note</h3>
            <p className="text-primary-700 text-lg">
              For admission inquiries and application forms, please contact 
              <span className="font-semibold"> Warden Sanjay Patel</span> at 
              <span className="font-semibold"> 8109397953</span> or visit the hostel at Abbas Nagar, Gandhi Nagar, Bhopal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admission;