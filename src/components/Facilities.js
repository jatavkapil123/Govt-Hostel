import React from 'react';
import { motion } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    {
      title: "Comfortable Rooms",
      description: "Well-ventilated rooms with modern amenities and furniture",
      icon: "🏠",
      features: ["Study table & chair", "Storage space", "Wi-Fi connectivity"]
    },
    {
      title: "Nutritious Meals",
      description: "Hygienic kitchen with balanced, home-style meals",
      icon: "🍽️",
      features: ["Vegetarian options", "Clean dining hall"]
    },
    {
      title: "Study Environment",
      description: "Dedicated spaces for focused learning and group studies",
      icon: "📚",
      features: ["Library access", "Study halls", "24/7 electricity", "Quiet zones"]
    },
    {
      title: "Recreation & Sports",
      description: "Indoor and outdoor facilities for physical fitness",
      icon: "⚽",
      features: ["Indoor games", "Sports ground", "Gym facilities", "Recreation room"]
    },
    {
      title: "Security & Safety",
      description: "Round-the-clock security with CCTV surveillance",
      icon: "🔒",
      features: ["24/7 security", "CCTV monitoring", "Secure entry", "Emergency support"]
    },
    {
      title: "Medical Support",
      description: "First aid and medical assistance when needed",
      icon: "🏥",
      features: ["First aid kit", "Medical room", "Doctor on call", "Health checkups"]
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-primary-600">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a comfortable and productive stay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 group hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
              <p className="text-gray-600 mb-4">{facility.description}</p>
              <ul className="space-y-2">
                {facility.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;