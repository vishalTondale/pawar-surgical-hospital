import React from "react";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import lab  from "../../assets/lab.jpg";

export default function HeroSection() {
  return (
    <section className="position-relative bg-light overflow-hidden py-5">
      {/* Background image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          zIndex: 0,
        }}
      />

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-1 mb-3">
              <span className="rounded-circle bg-primary me-2" style={{ width: "0.5rem", height: "0.5rem" }}></span>
              Trusted Healthcare Since 2024
            </div>

            <h1 className="display-5 fw-bold mb-3">
              Advanced Surgical Care with <span className="text-primary">Compassion</span>
            </h1>
            <p className="lead mb-4">
              Your health is our priority. Expert surgical treatments by experienced professionals in a state-of-the-art facility.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-2 mb-4">
              <a href="tel:+919765009785" className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2">
                <Phone className="me-1" /> Book Appointment
              </a>
              <button
                className="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center gap-2"
                onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
              >
                Our Services <ChevronRight />
              </button>
            </div>

            <div className="row text-center text-md-start g-3 pt-3 border-top">
              <div className="col-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary bg-opacity-10 text-primary rounded p-2">
                    <Clock />
                  </div>
                  <div>
                    <p className="mb-0 small text-muted">Available</p>
                    <p className="mb-0 fw-semibold">24/7 Care</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-success bg-opacity-10 text-success rounded p-2">
                    <Phone />
                  </div>
                  <div>
                    <p className="mb-0 small text-muted">Emergency</p>
                    <p className="mb-0 fw-semibold">Quick Response</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-purple bg-opacity-10 text-purple rounded p-2">
                    <MapPin />
                  </div>
                  <div>
                    <p className="mb-0 small text-muted">Located at</p>
                    <p className="mb-0 fw-semibold">Pandharpur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 position-relative">
            <div className="rounded-4 overflow-hidden shadow-lg">
              <img
                src={lab}
                alt="Hospital Building"
                className="img-fluid"
              />
            </div>

            <div className="position-absolute bottom-0 start-0 translate-middle bg-white rounded-3 shadow p-3" style={{ maxWidth: "250px" }}>
              <div className="d-flex align-items-center gap-2">
                <div className="bg-success bg-opacity-10 text-success rounded-circle p-2">
                  <Phone />
                </div>
                <div>
                  <p className="mb-0 small text-muted">Emergency Contact</p>
                  <a href="tel:+919765009785" className="fw-bold text-dark text-decoration-none">
                    +91 97650 09785
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
