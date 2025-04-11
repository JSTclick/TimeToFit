import React from 'react';
import { motion } from "framer-motion";
import {
    Utensils,
    MessageSquare,
    Dumbbell,
    HeartPulse,
    BarChart3,
    Cross, 
    Activity,
    Ruler,
    GaugeCircle,
    Scale3D,
    Droplet,
    Heart
  } from "lucide-react";
import BodyFatCalculator from './FatCalculator';
import ActivityReadinessForm from './activity';
import MedicalHistoryForm from './medical';
import BodyFatChart from './Understanding';
import Roadmap from './roadmap';
import PricingSection from './prices';
import EnquiryForm from './EnquiryForm';

  const features = [
    {
      icon: <Utensils className="text-white w-7 h-7" />,
      title: "Personalized Diet Plans",
    },
    {
      icon: <MessageSquare className="text-white w-7 h-7" />,
      title: "One-to-One Interaction",
    },
    {
      icon: <Dumbbell className="text-white w-7 h-7" />,
      title: "Customized Workout Plans",
    },
    {
      icon: <HeartPulse className="text-white w-7 h-7" />,
      title: "Focus on Health Improvement",
    },
    {
      icon: <BarChart3 className="text-white w-7 h-7" />,
      title: "Regular Fitness Assessments",
    },
    {
      icon: <Cross className="text-white w-7 h-7" />, // ⬅️ New feature
      title: "Injury Recovery Guidance",
    },
  ];
  

  const checkupData = [
    {
      icon: <Scale3D className="w-8 h-8 text-blue-600" />,
      title: "Body Weight",
      desc: "Regular tracking of body weight to monitor fitness progress and overall health.",
    },
    {
      icon: <Ruler className="w-8 h-8 text-yellow-600" />,
      title: "Height",
      desc: "Measuring height to help calculate BMI and assess physical proportions.",
    },
    {
      icon: <GaugeCircle className="w-8 h-8 text-green-600" />,
      title: "Body Mass Index (BMI)",
      desc: "Calculating BMI to assess if your weight is within a healthy range for your height.",
    },
    {
      icon: <Activity className="w-8 h-8 text-pink-600" />,
      title: "Body Fat Percentage",
      desc: "Analyzing body fat levels to understand muscle-to-fat ratio and overall body composition.",
    },
    {
      icon: <Droplet className="w-8 h-8 text-red-600" />,
      title: "Blood Pressure",
      desc: "Monitoring blood pressure to ensure cardiovascular health and avoid potential risks during intense workouts.",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
      title: "Heart Rate",
      desc: "Checking resting & active heart rates to gauge cardiovascular fitness and recovery after exercise.",
    },
  ];
  
const AdminLanding = () => {
    return (
      <div>
        {/* Hero Section Only */}
        <div className="relative w-full h-full mt-6 text-white overflow-hidden font-sans">
          {/* Background Image */}
          <img
            src="/banner.png"
            alt="Fitness Woman"
            className="absolute inset-0 w-full h-1/2 sm:h-full object-cover"
          />
  
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r" />
  
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-1/2 sm:h-full px-6 sm:px-10 lg:px-15 max-w-5xl">
            <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-gray-300 mb-2">
              Unlock Your
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="text-yellow-500">FULL <br /> POTENTIAL WITH</span><br />
              <span className="text-white text-4xl sm:text-5xl md:text-8xl">PERSONAL</span><br />
              <span className="text-white text-4xl sm:text-5xl md:text-7xl">TRAINING</span>
            </h1>
  
            <div className="mt-6 sm:w-4/6 lg:w-1/2 bg-yellow-500 text-black px-6 py-3 inline-block rounded font-bold text-sm sm:text-base tracking-wide shadow-lg">
              SANTHOSH M <br />
              <span className="text-xs sm:text-sm font-medium">(ACE CERTIFIED PERSONAL TRAINER)</span>
            </div>
  
            <button className="my-5 px-6 py-3 w-1/2 sm:w-1/4 border border-yellow-500 text-yellow-500 bg-transparent font-bold rounded-full shadow-lg text-sm sm:text-base transition duration-300 hover:bg-yellow-500 hover:text-black hover:scale-105 active:scale-95">
              Enquiry Now
            </button>
          </div>
  
          {/* Decorative Vertical Text */}
          <div className="absolute hidden md:block right-[-3rem] top-1/2 -translate-y-1/2 z-0">
            <h1 className="text-[7rem] lg:text-[10rem] font-bold text-white/10 rotate-90 origin-bottom-right whitespace-nowrap tracking-wider">
              TIME TO FIT
            </h1>
          </div>
        </div>
  
        {/* Who We Are Section */}
<div className="bg-black text-white py-16 px-6 sm:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div className="animate-fade-in-up">
      {/* Stylish Yellow Pill */}
      <div className="inline-block bg-yellow-400 text-black font-bold text-base uppercase tracking-widest px-5 py-2 rounded-full mb-6 shadow-md">
        Who We Are
      </div>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
        Welcome to <br />
        <span className="text-yellow-400">TIME TO FIT INDIA</span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        Hello! I’m <strong>Santhosh M</strong>, an ACE Certified Personal Trainer with over 12 years of experience 
        specializing in strength and conditioning, as well as body transformation. I’ve provided personal consultations 
        to over 5,000 individuals and trained nearly 3,000 clients — including athletes, celebrities, and those with 
        physical challenges.
        <br /><br />
        My expertise covers hormonal imbalances, high blood pressure, and diabetes. I’m passionate about helping people 
        achieve lasting fitness results, from peak performance to total transformation.
      </p>
    </div>

    {/* Right Image Section */}
    <div className="relative group">
      {/* Yellow BG strip */}
      <div className="bg-yellow-400 absolute top-0 bottom-0 right-0 w-1/3 hidden md:block rounded-l-3xl shadow-xl" />

      {/* Trainer Image */}
      <img
        src="/img1.png"
        alt="Trainer with client"
        className="relative z-10 w-full h-auto rounded-xl shadow-2xl transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

      {/* Vertical Background Text */}
      <div className="hidden md:flex absolute top-0 bottom-0 right-0 w-1/3 items-center justify-center z-0">
        <h1 className="text-7xl font-black text-white/20 -rotate-90 tracking-widest whitespace-nowrap">
          TIME TO FIT
        </h1>
      </div>
    </div>

  </div>
</div>

<div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-yellow-400 text-xl font-semibold uppercase">
          Why Choose
        </h3>
        <h2 className="text-4xl sm:text-5xl font-bold">
          Personal Training?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-5 shadow-xl flex items-center gap-4"
          >
            <div className="bg-black p-4 rounded-full shadow-lg">
              {feature.icon}
            </div>
            <p className="text-lg font-semibold text-black">
              {feature.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="">
        <EnquiryForm/>
        <BodyFatCalculator/>
        <ActivityReadinessForm/>
        <MedicalHistoryForm/>
        <BodyFatChart/>
        <Roadmap/>
        <PricingSection/>
    </div>


    <div className="bg-gradient-to-br from-gray-900 to-black py-14 px-4 md:px-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Basic Health <span className="text-yellow-400">Checkup</span>
    </h2>
    <p className="text-gray-400 mt-2">Stay on top of your health with our curated checkup plans</p>
  </div>

  <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {checkupData.map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-yellow-400 hover:scale-[1.03] transition duration-300 ease-in-out"
      >
        <div className="flex-shrink-0">
          <div className="bg-yellow-400 text-black rounded-full p-3 shadow-lg shadow-yellow-300/50">
            {item.icon}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-gray-400 leading-snug">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    

      </div>
    );
  };
  
  export default AdminLanding;
  