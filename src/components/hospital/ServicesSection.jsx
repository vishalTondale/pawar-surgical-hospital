import React from "react";
import { Scissors, Activity, AlertCircle, Heart, Stethoscope, Shield } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "General Surgery",
      description: "Comprehensive surgical procedures including appendectomy, hernia repair, gallbladder surgery, and thyroid surgery",
      color: "primary",
      procedures: ["Appendectomy", "Hernia Repair", "Gallbladder Surgery", "Thyroid Surgery"]
    },
    {
      icon: Heart,
      title: "Anorectal Surgery",
      description: "Specialized treatment for piles, fissures, fistula, and other anorectal conditions with advanced techniques",
      color: "danger",
      procedures: ["Piles Treatment", "Fissure Surgery", "Fistula Surgery", "Pilonidal Sinus"]
    },
    {
      icon: Activity,
      title: "Laparoscopic Surgery",
      description: "Minimally invasive procedures with faster recovery, less pain, and smaller incisions",
      color: "success",
      procedures: ["Laparoscopic Appendectomy", "Laparoscopic Cholecystectomy", "Diagnostic Laparoscopy"]
    },
    {
      icon: AlertCircle,
      title: "Emergency Surgery",
      description: "24/7 emergency surgical services for acute conditions requiring immediate intervention",
      color: "warning",
      procedures: ["Trauma Surgery", "Acute Abdomen", "Emergency Procedures", "Critical Care"]
    },
    {
      icon: Stethoscope,
      title: "Post-Operative Care",
      description: "Comprehensive follow-up care and monitoring to ensure smooth recovery",
      color: "secondary",
      procedures: ["Recovery Monitoring", "Wound Care", "Pain Management", "Rehabilitation"]
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Health screenings, consultations, and preventive measures for surgical conditions",
      color: "info",
      procedures: ["Health Screenings", "Surgical Consultation", "Risk Assessment", "Wellness Programs"]
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center bg-light text-primary rounded-pill px-3 py-1 mb-3">
            <Scissors className="me-2" />
            Our Services
          </div>
          <h2 className="display-5 fw-bold mb-2">Comprehensive Surgical Solutions</h2>
          <p className="lead mb-0">
            Expert surgical care across multiple specializations with modern techniques and equipment
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className={`card h-100 shadow-sm border-0`}>
                <div className={`bg-${service.color} text-white d-flex align-items-center justify-content-center rounded-top p-4`}>
                  <service.icon size={32} />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <p className="fw-semibold mb-1">Procedures Include:</p>
                  <ul className="list-unstyled mb-0">
                    {service.procedures.map((proc, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-1">
                        <span className={`me-2 rounded-circle d-inline-block bg-${service.color}`} style={{ width: "8px", height: "8px" }} />
                        {proc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
