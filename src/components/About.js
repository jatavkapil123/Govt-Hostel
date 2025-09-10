import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const objectives = [
    {
      title: "Academic Excellence",
      description: "Providing a conducive environment for focused studies and academic achievement."
    },
    {
      title: "Character Building",
      description: "Fostering discipline, leadership, and moral values among residents."
    },
    {
      title: "Community Support",
      description: "Creating a supportive network for SC students to thrive together."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-primary-600">Our Hostel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established with a vision to provide quality accommodation and support for SC students
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/hostel-building.jpg"
                alt="SC Boys Hostel Building"
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide a safe, supportive, and affordable residential facility that empowers 
                SC students to pursue their educational goals with confidence and dignity. We are 
                committed to creating an inclusive environment that promotes academic excellence, 
                personal growth, and social development.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the premier hostel facility that serves as a stepping stone for SC students 
                towards achieving their dreams and contributing meaningfully to society. We envision 
                a future where every resident becomes a confident leader and positive change-maker.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-primary-800 mb-2">Located in Bhopal, Madhya Pradesh</h4>
              <p className="text-primary-700">
                Strategically located in Abbas Nagar, Gandhi Nagar, Bhopal, providing easy access to 
                educational institutions and essential services. Committed to providing quality 
                accommodation and support for the SC student community.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Objectives</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{objective.title}</h4>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;