import React from "react";
import { Heart, Award, Users, Shield, Sparkles, CheckCircle } from "lucide-react";

export default function AboutHospital() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every patient receives personalized attention and compassionate treatment",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Maintaining highest standards of hygiene and medical safety protocols",
    },
    {
      icon: Sparkles,
      title: "Modern Excellence",
      description: "Equipped with latest surgical technology and treatment methods",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Experienced surgeons and dedicated medical professionals",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-1 mb-3">
            <Heart className="me-2" />
            About Our Hospital
          </div>
          <h2 className="display-5 fw-bold mb-3">Committed to Your Health & Wellness</h2>
          <p className="lead mb-5">
            Pawar Surgical Hospital has been serving the Pandharpur community with excellence in surgical care and patient service.
          </p>
        </div>

        {/* About Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="h3 fw-bold mb-3">Your Trusted Healthcare Partner</h3>
            <p>
              At Pawar Surgical Hospital, we combine medical expertise with compassionate care. Our state-of-the-art facility is designed to provide comprehensive surgical services in a comfortable and healing environment.
            </p>
            <p>
              Led by Dr. Aditya B. Pawar, our dedicated team of healthcare professionals is committed to delivering exceptional medical care. We believe in treating not just the condition, but caring for the whole person.
            </p>

            <div className="mt-4">
              {[ 
                "Advanced surgical procedures with minimal complications",
                "Experienced and caring medical staff",
                "State-of-the-art operation theatres and equipment",
                "Comprehensive post-operative care and support"
              ].map((item, idx) => (
                <div key={idx} className="d-flex align-items-center mb-2">
                  <CheckCircle className="text-success me-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 position-relative">
            <div className="rounded-4 overflow-hidden shadow-lg mb-3">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800"
                alt="Hospital Interior"
                className="img-fluid"
              />
            </div>
            <div className="position-absolute bottom-0 end-0 translate-middle bg-primary text-white rounded-3 shadow p-3" style={{ maxWidth: "250px" }}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <Users className="me-2" />
                <div>
                  <p className="h5 fw-bold mb-0">1000+</p>
                  <small>Successful Surgeries</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values / Features */}
        <div className="row g-3">
          {values.map((value, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card shadow-sm h-100 border-0 text-center p-3">
                <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3" style={{ width: "60px", height: "60px", margin: "0 auto" }}>
                  <value.icon className="text-primary" size={28} />
                </div>
                <h5 className="fw-bold mb-2">{value.title}</h5>
                <p className="mb-0">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
