import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, BookOpen, Laptop, Award, Building } from 'lucide-react';

export default function Timeline() {

  const timelineData = [
    {
      year: '2018',
      icon: Building,
      title: "Founded with first community school in Dharavi",
      color: 'bg-blue-500',
    },
    {
      year: '2019',
      icon: Users,
      title: "Expanded to 5 schools, 200+ students enrolled",
      color: 'bg-green-500',
    },
    {
      year: '2020',
      icon: Laptop,
      title: "Launched digital learning during pandemic",
      color: 'bg-purple-500',
    },
    {
      year: '2021',
      icon: BookOpen,
      title: "Opened vocational training centers",
      color: 'bg-orange-500',
    },
    {
      year: '2022',
      icon: Award,
      title: "Reached 1000+ students across 15 locations",
      color: 'bg-red-500',
    },
    {
      year: '2023',
      icon: Users,
      title:"Introduced teacher training programs",
      color: 'bg-teal-500',
    },
    {
      year: '2024',
      icon: Laptop,
      title: "Partnership with tech companies for digital literacy",
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Journey
        </h2>
        <p className="text-xl text-gray-600">
          Key milestones in our mission to educate and empower
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-lg font-bold text-gray-900">{item.year}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}