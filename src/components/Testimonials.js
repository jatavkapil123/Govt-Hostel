import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      course: "B.Tech Computer Science",
      year: "2023 Graduate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "SC Boys Hostel provided me with a safe and supportive environment throughout my engineering studies. The facilities are excellent and the staff is very caring. I'm grateful for the opportunity to stay here.",
      rating: 5
    },
    {
      name: "Amit Singh",
      course: "MBA",
      year: "Current Resident",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The hostel has been instrumental in my academic journey. The study environment is conducive to learning, and I've made lifelong friendships here. Highly recommend to all SC students.",
      rating: 5
    },
    {
      name: "Suresh Patel",
      course: "M.Sc Physics",
      year: "2022 Graduate",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Living at SC Boys Hostel was one of the best decisions I made during my college years. The affordable fees and quality facilities made it possible for me to focus on my studies without financial stress.",
      rating: 5
    },
    {
      name: "Vikram Yadav",
      course: "B.Com",
      year: "Current Resident",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The hostel management is very understanding and supportive. They helped me during difficult times and ensured I could continue my education. The community here feels like a family.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary-600">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our current and former residents about their experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200 text-4xl">
                "
              </div>
              
              {/* Content */}
              <div className="mb-6">
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.course}</p>
                  <p className="text-xs text-primary-600">{testimonial.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Students Graduated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">14+</div>
              <div className="text-primary-100">Years of Service</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;