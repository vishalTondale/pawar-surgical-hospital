import React from "react";
import { Users, Stethoscope, Heart, Activity } from "lucide-react";

export default function TeamSection() {
  const team = [
    { name: "Dr. Aditya B. Pawar", role: "Chief Surgeon", specialization: "General & Anorectal Surgery", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400" },
    { name: "Mr. Saugata", role: "Medical Assistant", specialization: "Patient Care", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400" }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center bg-purple bg-opacity-10 text-purple rounded-pill px-3 py-1 mb-3">
            <Users className="me-2" />
            Our Team
          </div>
          <h2 className="display-5 fw-bold mb-2">Meet Our Dedicated Professionals</h2>
          <p className="lead mb-0">
            A team of experienced doctors, nurses, and support staff committed to your health and wellbeing
          </p>
        </div>

        {/* Team Cards */}
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0 overflow-hidden">
                <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-100 h-100 object-fit-cover transition-transform"
                    style={{ transition: "transform 0.5s" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <span className="badge bg-primary mb-2">{member.role}</span>
                  <p className="card-text small">{member.specialization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Card */}
        <div className="card bg-primary text-white mt-5 shadow-lg border-0">
          <div className="card-body py-5">
            <div className="row text-center">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-white bg-opacity-25 rounded-3 p-3 mb-2">
                    <Stethoscope size={32} />
                  </div>
                  <h3 className="fw-bold mb-1">10+</h3>
                  <p>Medical Professionals</p>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-white bg-opacity-25 rounded-3 p-3 mb-2">
                    <Heart size={32} />
                  </div>
                  <h3 className="fw-bold mb-1">5000+</h3>
                  <p>Happy Patients</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-white bg-opacity-25 rounded-3 p-3 mb-2">
                    <Activity size={32} />
                  </div>
                  <h3 className="fw-bold mb-1">24/7</h3>
                  <p>Emergency Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
