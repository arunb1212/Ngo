import { motion } from 'framer-motion'
import React from 'react'
import { BsPersonBadge, BsLaptop, BsClock, BsBook } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import Footer from './Footer'

const Cards = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center w-full"
  >
    <div className="w-[100%]  flex  flex-col gap-8 items-center">
      <div className="w-[90%]  bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex-1 flex gap-6 items-start">
          <div className="bg-blue-500 rounded-lg p-4 flex items-center justify-center">
            <BsBook className="text-white" size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-800">Primary Education</h2>
            <p className="text-gray-700 mb-4">Basic literacy and numeracy for children aged 6-12</p>
            <div>
              <span className="font-semibold">Program Highlights:</span>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Ages 6-12 years</li>
                <li>Reading and writing</li>
                <li>Mathematics</li>
                <li>Creative activities</li>
                <li>Foundational life skills</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 min-w-[260px] w-full md:w-auto">
          <div className="bg-blue-100 rounded-xl p-4 flex items-center gap-3">
            <BsClock size={20} className="text-blue-700" />
            <div>
              <div className="font-semibold">Schedule</div>
              <div>Monday–Friday, 9 AM – 3 PM</div>
            </div>
          </div>
          <div className="bg-blue-100 rounded-xl p-4 flex items-center gap-3">
            <SlLocationPin size={20} className="text-blue-700" />
            <div>
              <div className="font-semibold">Locations</div>
              <div>15 centers across Mumbai</div>
            </div>
          </div>
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 w-full transition">Learn More & Enroll</button>
        </div>
      </div>

      <div className="w-[90%]  bg-green-50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex-1 flex gap-6 items-start">
          <div className="bg-green-500 rounded-lg p-4 flex items-center justify-center">
            <BsPersonBadge className="text-white" size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-800">Vocational Training</h2>
            <p className="text-gray-700 mb-4">Skill development programs for youth and adults</p>
            <div>
              <span className="font-semibold">Program Highlights:</span>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Ages 16+ years</li>
                <li>Tailoring and handicrafts</li>
                <li>Computer basics</li>
                <li>English communication</li>
                <li>Job placement assistance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 min-w-[260px] w-full md:w-auto">
          <div className="bg-green-100 rounded-xl p-4 flex items-center gap-3">
            <BsClock size={20} className="text-green-700" />
            <div>
              <div className="font-semibold">Schedule</div>
              <div>Monday-Saturday, 10 AM - 4 PM</div>
            </div>
          </div>
          <div className="bg-green-100 rounded-xl p-4 flex items-center gap-3">
            <SlLocationPin size={20} className="text-green-700" />
            <div>
              <div className="font-semibold">Locations</div>
              <div>8 training centers</div>
            </div>
          </div>
          <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 w-full transition">Learn More & Enroll</button>
        </div>
      </div>

      <div className="w-[90%]  bg-orange-50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center mb-[20px] gap-8">
        <div className="flex-1 flex gap-6 items-start">
          <div className="bg-orange-500 rounded-lg p-4 flex items-center justify-center">
            <BsLaptop className="text-white" size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-800">Digital Literacy</h2>
            <p className="text-gray-700 mb-4">Computer and internet skills for the digital age</p>
            <div>
              <span className="font-semibold">Program Highlights:</span>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Ages 12+ years</li>
                <li>Basic computer skills</li>
                <li>Internet and email</li>
                <li>Digital payments</li>
                <li>Online learning platforms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 min-w-[260px] w-full md:w-auto">
          <div className="bg-orange-100 rounded-xl p-4 flex items-center gap-3">
            <BsClock size={20} className="text-orange-700" />
            <div>
              <div className="font-semibold">Schedule</div>
              <div>Tuesday-Thursday, 2 PM - 5 PM</div>
            </div>
          </div>
          <div className="bg-orange-100 rounded-xl p-4 flex items-center gap-3">
            <SlLocationPin size={20} className="text-orange-700" />
            <div>
              <div className="font-semibold">Locations</div>
              <div>12 computer labs</div>
            </div>
          </div>
          <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 w-full transition">Learn More & Enroll</button>
        </div>
      </div>
    </div>
    <Footer/>
    </motion.div>
  )
}

export default Cards