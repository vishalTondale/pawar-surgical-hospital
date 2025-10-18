import React from "react";
import { Building2, Activity, Bed, ShieldCheck, Droplets, Wifi, Utensils, Wind } from "lucide-react";

export default function FacilitiesSection() {
  const facilities = [
    { icon: Building2, title: "Modern Operation Theatre", description: "State-of-the-art surgical facilities with advanced equipment and sterilization systems" },
    { icon: Activity, title: "ICU & Critical Care", description: "Intensive care unit with 24/7 monitoring and ventilator support for critical patients" },
    { icon: Bed, title: "Comfortable Patient Rooms", description: "Well-equipped private and semi-private rooms designed for patient comfort" },
    { icon: ShieldCheck, title: "Diagnostic Services", description: "In-house laboratory and imaging services for quick and accurate diagnosis" },
    { icon: Droplets, title: "Hygiene & Sterilization", description: "Strict infection control protocols and advanced sterilization equipment" },
    { icon: Wind, title: "Climate Control", description: "Centralized air conditioning for patient comfort throughout the facility" },
    { icon: Utensils, title: "Dietary Services", description: "Nutritious meals prepared considering patient dietary requirements" },
    { icon: Wifi, title: "24/7 Availability", description: "Round-the-clock emergency services and medical staff availability" },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center bg-success bg-opacity-10 text-success rounded-pill px-3 py-1 mb-3">
            <Building2 className="me-2" />
            Our Facilities
          </div>
          <h2 className="display-5 fw-bold mb-2">World-Class Medical Infrastructure</h2>
          <p className="lead mb-0">
            Modern equipment and comfortable facilities designed for optimal patient care and recovery
          </p>
        </div>

        {/* Facility Cards */}
        <div className="row g-4 mb-5">
          {facilities.map((facility, index) => (
            <div key={index} className="col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm text-center border-0">
                <div className="d-flex align-items-center justify-content-center rounded-top p-4 mb-3" style={{ background: "linear-gradient(135deg, #e0f2ff, #bae6fd)" }}>
                  <facility.icon size={32} className="text-primary" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{facility.title}</h5>
                  <p className="card-text small">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Images */}
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
                className="card-img-top"
                alt="Operation Theatre"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Advanced Operation Theatre</h5>
                <p className="card-text">
                  Our fully equipped operation theatres feature the latest surgical technology, ensuring safe and successful procedures. Maintained with international standards of hygiene and sterilization.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=800"
                className="card-img-top"
                alt="Patient Room"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Comfortable Recovery Rooms</h5>
                <p className="card-text">
                  Spacious and well-maintained patient rooms designed for comfort and faster recovery. Each room is equipped with modern amenities and staffed by caring nursing professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
