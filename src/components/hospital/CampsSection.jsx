import React from "react";
import { Heart, Users, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function CampsSection() {
  const camps = [
    {
      title: "Free Health Checkup Camp",
      date: "January 26, 2025",
      location: "Pandharpur Municipal Hall",
      status: "Upcoming",
      services: ["Blood Pressure Check", "Blood Sugar Test", "General Consultation", "Health Awareness"],
      participants: "200+ Expected"
    },
    {
      title: "Surgical Awareness Camp",
      date: "December 15, 2024",
      location: "Pawar Surgical Hospital",
      status: "Completed",
      services: ["Surgical Consultations", "Piles Screening", "Free Medicines", "Diet Counseling"],
      participants: "150+ Attended"
    },
    {
      title: "Women's Health Camp",
      date: "November 8, 2024",
      location: "Community Center, Pandharpur",
      status: "Completed",
      services: ["Health Screening", "Gynec Consultation", "Nutrition Guidance", "Free Medicines"],
      participants: "120+ Attended"
    }
  ];

  return (
    <section className="py-5" style={{ background: "linear-gradient(135deg, #f3e8ff, #ffffff)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 bg-purple-100 text-purple-600 px-3 py-1 rounded-pill mb-3">
            <Heart className="me-1" />
            Community Service
          </div>
          <h2 className="display-5 fw-bold mb-3">Free Medical Camps (Shibirs)</h2>
          <p className="lead mb-0">
            Serving the community with free health checkups, consultations, and awareness programs
          </p>
        </div>

        {/* Camps Grid */}
        <div className="row g-4 mb-4">
          {camps.map((camp, index) => (
            <div key={index} className="col-lg-4">
              <div className={`card shadow-sm border-0 ${camp.status === "Upcoming" ? "border border-purple-500" : ""}`}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <span className={`badge ${camp.status === "Upcoming" ? "bg-success text-dark" : "bg-secondary text-white"}`}>
                      {camp.status}
                    </span>
                    <div className="bg-purple-100 rounded d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                      <Heart className="text-purple-600" />
                    </div>
                  </div>
                  <h5 className="card-title fw-bold">{camp.title}</h5>

                  <ul className="list-unstyled mb-3">
                    <li className="d-flex align-items-center mb-1">
                      <Calendar className="me-2" /> <span>{camp.date}</span>
                    </li>
                    <li className="d-flex align-items-center mb-1">
                      <MapPin className="me-2" /> <span>{camp.location}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <Users className="me-2" /> <span>{camp.participants}</span>
                    </li>
                  </ul>

                  <hr />
                  <p className="fw-semibold mb-2">Services Provided:</p>
                  <ul className="list-unstyled mb-0">
                    {camp.services.map((service, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-1">
                        <CheckCircle className="me-2 text-success" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Card */}
        <div className="card shadow-lg text-white bg-gradient" style={{ background: "linear-gradient(90deg, #7e22ce, #9333ea)" }}>
          <div className="card-body py-5">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <h3 className="fw-bold mb-3">Join Our Next Free Camp</h3>
                <p className="mb-3">
                  We regularly organize free medical camps to serve the community. Get free health checkups, consultations, and medicines. Stay connected for updates on upcoming camps.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-2"><CheckCircle className="me-2 text-success" />No charges for consultation</li>
                  <li className="d-flex align-items-center mb-2"><CheckCircle className="me-2 text-success" />Free basic medicines provided</li>
                  <li className="d-flex align-items-center"><CheckCircle className="me-2 text-success" />Expert medical guidance</li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="card bg-white bg-opacity-10 border-0 p-4">
                  <h5 className="fw-bold mb-3">Get Updates</h5>
                  <p>Call us to get notified about upcoming free medical camps in your area</p>
                  <a href="tel:+919765009785" className="btn btn-light w-100 text-purple-600 d-flex align-items-center justify-content-center gap-2">
                    <Calendar className="me-2" /> Call for Camp Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
