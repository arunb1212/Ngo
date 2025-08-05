import React from "react";
import { motion } from "framer-motion";
import Timeline from "../Components/Timeline";
import Footer from "../Components/Footer";
import Program from "./Program";
import { GoBook } from "react-icons/go";
import { SlPeople } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
const stats = [
  { label: "Students Educated", value: "1000+" },
  { label: "Schools Opened", value: "15" },
  { label: "Years of Service", value: "6" },
];

const About = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-400"
      >
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow">
            Empowering communities through education, one child at a time.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-30 z-0" />
      </motion.div>

      {/* Who We Are */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-16 px-4 md:px-24 bg-white text-gray-800"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Who We Are</h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          <span className="font-semibold">Basti Ki Pathshale</span> is a non-profit organization dedicated to providing quality education and life skills to underprivileged children in urban slums. Our mission is to break the cycle of poverty by empowering the next generation with knowledge, confidence, and hope.
        </p>
      </motion.div>

      {/* Impact Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="flex flex-wrap justify-center gap-8 py-10 bg-gray-50"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white shadow-lg rounded-lg p-8 min-w-[180px] text-center"
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-lg text-gray-700">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>


<div className="p-[40px] text-center"  >
  <h1 className="font-bold text-3xl mb-[20px]">Our Story</h1>
  <div className="grid grid-cols-2 justify-center items-center">
    <img  className="rounded-md" src="https://images.pexels.com/photos/8466655/pexels-photo-8466655.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="" />
    <p className="text-[20px] text-left ">
    Basti Ki Pathshale began in 2018 when Dr. Anjali Gupta, a former university professor, witnessed the educational challenges faced by children in Mumbai's urban slums. Despite their eagerness to learn, these bright young minds lacked access to quality education.
<br />
Starting with a single classroom in Dharavi, we began with just 15 students. Our community-centered approach quickly gained trust, and word spread about the quality education we provided. Parents saw their children thriving, reading for the first time, and developing confidence.
<br />

Today, we operate 25 community schools across Mumbai, serving over 2,500 students. Our holistic approach includes not just academic learning, but also life skills, digital literacy, and vocational training for older students and community members.


    </p>
  </div>
</div>
      {/* Timeline / Our Journey */}
     < div className="px-[20px] mb-[20px] flex justify-center gap-[40px]">
        <Program
          p1="Primary Education
"
          p2="Basic literacy and numeracy for children aged 6-12
"
          icon={
            <GoBook className="w-full h-full rounded p-[10px] bg-[#21C55D]" />
          }
        />
        <Program
          p1="Vocational Training
 "
          p2="Skill development programs for youth and adults"
          icon={
            <SlPeople className="h-full w-full p-[10px]   bg-[#3B81F6] rounded" />
          }
        />
        <Program
          p1="Digital Literacy"
          p2="Computer and internet skills for the digital age"
          icon={
            <CiHeart className="h-full w-full rounded p-[10px] bg-[#F87315]" />
          }
        />
      </div>
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;