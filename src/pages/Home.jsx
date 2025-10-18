import React from "react";
import Navbar from "../components/hospital/Navbar";
import HeroSection from "../components/hospital/HeroSection";
import AboutHospital from "../components/hospital/AboutHospital";
import DoctorProfile from "../components/hospital/DoctorProfile";
import ServicesSection from "../components/hospital/ServicesSection";
import FacilitiesSection from "../components/hospital/FacilitiesSection";
import TeamSection from "../components/hospital/TeamSection";
import AppointmentSection from "../components/hospital/AppointmentSection";
import CampsSection from "../components/hospital/CampsSection";
import ArticlesSection from "../components/hospital/ArticlesSection";
import TestimonialsSection from "../components/hospital/TestimonialsSection";
import LocationSection from "../components/hospital/LocationSection";
import Footer from "../components/hospital/Footer";
import "../styles/main.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <section id="home"><HeroSection /></section>
        <section id="about"><AboutHospital /></section>
        <section id="doctor"><DoctorProfile /></section>
        <section id="services"><ServicesSection /></section>
        <section id="facilities"><FacilitiesSection /></section>
        <section id="team"><TeamSection /></section>
        <section id="appointment"><AppointmentSection /></section>
        <section id="camps"><CampsSection /></section>
        <section id="articles"><ArticlesSection /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="location"><LocationSection /></section>
        <Footer />
      </div>
    </>
  );
}
