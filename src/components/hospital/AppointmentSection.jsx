import React from "react";
import { Phone, Clock, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function AppointmentSection() {
  return (
    <section className="py-5 position-relative text-white" style={{ background: "linear-gradient(135deg, #1e40af, #1e3a8a, #1e3a8a)" }}>
      {/* Background image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: 1
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Book Your Appointment Today</h2>
          <p className="lead mb-0">Call us now to schedule your consultation with Dr. Aditya B. Pawar</p>
        </div>

        <div className="row g-4 align-items-start">
          {/* Left Column */}
          <div className="col-lg-6">
            {/* Call Card */}
            <div className="card text-dark mb-4 bg-white bg-opacity-10 border-0" style={{ backdropFilter: "blur(10px)" }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "48px", height: "48px" }}>
                    <Phone />
                  </div>
                  <div>
                    <p className="small text-white-50 mb-1">Emergency & Appointments</p>
                    <a href="tel:+919765009785" className="h4 fw-bold text-white text-decoration-none">+91 97650 09785</a>
                  </div>
                </div>
                <a href="tel:+919765009785" className="d-block">
                  <button className="btn btn-light w-100 text-primary">
                    <Phone className="me-2" />
                    Call Now for Appointment
                  </button>
                </a>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-6">
                <div className="card text-dark bg-white bg-opacity-10 border-0" style={{ backdropFilter: "blur(10px)" }}>
                  <div className="card-body text-center">
                    <Clock className="mb-2" />
                    <h5 className="fw-bold">Hospital Hours</h5>
                    <p className="small mb-0">Mon - Sat: 9 AM - 8 PM</p>
                    <p className="small mb-0">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card text-dark bg-white bg-opacity-10 border-0" style={{ backdropFilter: "blur(10px)" }}>
                  <div className="card-body text-center">
                    <Calendar className="mb-2" />
                    <h5 className="fw-bold">Quick Booking</h5>
                    <p className="small mb-0">Same day appointments</p>
                    <p className="small mb-0">available for emergencies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card text-dark bg-white bg-opacity-10 border-0 mt-3" style={{ backdropFilter: "blur(10px)" }}>
              <div className="card-body d-flex align-items-start">
                <MapPin className="me-3 mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Visit Us At</h5>
                  <p className="small mb-0">
                    4175/1, Navi Peth, Bhosale Chowk – Urban Bank,<br />
                    Pandharpur, Maharashtra – 413304
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">Why Book With Us?</h3>
            <div className="mb-4">
              {[
                "Experienced surgeon with 7+ years of practice",
                "Modern surgical facilities and equipment",
                "Personalized care and attention",
                "Affordable treatment costs",
                "Flexible appointment scheduling",
                "24/7 emergency services available"
              ].map((benefit, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <CheckCircle className="text-success me-2" />
                  <p className="mb-0">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="card bg-success text-white border-0 shadow">
              <div className="card-body d-flex align-items-center">
                <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "48px", height: "48px" }}>
                  <Phone className="text-white" />
                </div>
                <div>
                  <p className="small text-white-50 mb-1">For Emergencies Call</p>
                  <a href="tel:+919765009785" className="h4 fw-bold text-white text-decoration-none">+91 97650 09785</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
