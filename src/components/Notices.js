import React from 'react';
import { motion } from 'framer-motion';

const Notices = () => {
  const notices = [
    {
      date: "2024-01-15",
      title: "New Admission Open for Academic Year 2024-25",
      content: "Applications are now open for the new academic year. Limited seats available. Apply early to secure your spot.",
      type: "admission",
      urgent: true
    },
    {
      date: "2024-01-10",
      title: "Hostel Fee Payment Deadline Extended",
      content: "Due to popular request, the hostel fee payment deadline has been extended to January 31st, 2024.",
      type: "fee",
      urgent: false
    },
    {
      date: "2024-01-05",
      title: "Wi-Fi Upgrade Completed",
      content: "High-speed Wi-Fi has been installed across all floors. New login credentials will be shared with residents.",
      type: "facility",
      urgent: false
    },
    {
      date: "2024-01-01",
      title: "New Year Celebration Event",
      content: "Join us for the New Year celebration on January 1st at 7 PM in the common hall. Refreshments will be provided.",
      type: "event",
      urgent: false
    },
    {
      date: "2023-12-28",
      title: "Winter Break Schedule",
      content: "Hostel will remain open during winter break. Special meal arrangements for students staying back.",
      type: "general",
      urgent: false
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      admission: "bg-green-100 text-green-800",
      fee: "bg-yellow-100 text-yellow-800",
      facility: "bg-blue-100 text-blue-800",
      event: "bg-purple-100 text-purple-800",
      general: "bg-gray-100 text-gray-800"
    };
    return colors[type] || colors.general;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="notices" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-primary-600">Notices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with important announcements and hostel news
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {notices.map((notice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card p-6 ${notice.urgent ? 'border-l-4 border-red-500' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  {notice.urgent && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                      Urgent
                    </span>
                  )}
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(notice.type)}`}>
                    {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{formatDate(notice.date)}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{notice.title}</h3>
              <p className="text-gray-600 leading-relaxed">{notice.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Notice Board CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Don't miss important updates! Follow our notice board regularly or subscribe to our newsletter 
              for instant notifications about hostel announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Subscribe to Newsletter
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                View All Notices
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Notices;