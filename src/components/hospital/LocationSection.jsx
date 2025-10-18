import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import "./LocationSection.css"; // we'll put custom CSS here

export default function LocationSection() {
  const hospitalAddress = "4175/1, Navi Peth, Bhosale Chowk, Pandharpur, Maharashtra 413304";
  const googleMapsUrl = "https://maps.app.goo.gl/4RSZdZyPZbMxwC598";

  return (
    <section className="location-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="badge bg-danger bg-opacity-10 text-danger px-3 py-1 mb-3">
            <MapPin className="me-1" /> Find Us
          </div>
          <h2 className="fw-bold mb-2">Visit Our Hospital</h2>
          <p className="lead">Conveniently located in the heart of Pandharpur, easily accessible to all</p>
        </div>

        {/* Main Grid */}
        <div className="row g-4">
          {/* Map */}
          <div className="col-lg-6">
            <div className="map-card shadow-sm overflow-hidden h-100 rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1760779052960!6m8!1m7!1sTtJELJ8yDqfEYRJNZNBubg!2m2!1d17.6729444902906!2d75.32460903757877!3f116.096375!4f0!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pawar Surgical Hospital Location"
              />


              <div className="map-overlay d-flex justify-content-between align-items-center p-3">
                <div className="d-flex align-items-center gap-3">
                  <MapPin size={24} className="text-white" />
                  <div>
                    <p className="fw-bold mb-0">Hospital Location</p>
                    <p className="small text-white-50 mb-0">Tap to get directions</p>
                  </div>
                </div>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm d-flex align-items-center gap-1">
                  <Navigation size={16} /> Directions
                </a>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="col-lg-6 d-grid gap-3">
            {/* Address */}
            <div className="card shadow-sm p-3 d-flex align-items-center gap-3">
              <MapPin size={24} className="text-danger" />
              <div>
                <h5 className="fw-bold mb-1">Hospital Address</h5>
                <p className="mb-0">{hospitalAddress}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="card shadow-sm p-3 d-flex align-items-center gap-3">
              <Phone size={24} className="text-success" />
              <div>
                <h5 className="fw-bold mb-1">Contact Number</h5>
                <a href="tel:+919765009785" className="text-success text-decoration-none">+91 97650 09785</a>
                <p className="small mb-0">Available for appointments and emergencies</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="card shadow-sm p-3 d-flex gap-3">
              <Clock size={24} className="text-primary" />
              <div>
                <h5 className="fw-bold mb-2">Working Hours</h5>
                <div className="d-flex justify-content-between"><span>Mon-Sat</span><span>9:00 AM - 8:00 PM</span></div>
                <div className="d-flex justify-content-between"><span>Sun</span><span className="text-warning">Emergency Only</span></div>
                <p className="small mt-1 text-success">24/7 Emergency Services Available</p>
              </div>
            </div>

            {/* How to Reach */}
            <div className="card shadow-sm text-white" style={{ background: "linear-gradient(90deg, #f97316, #ea580c)", padding: "1rem" }}>
              <h5 className="fw-bold mb-2">How to Reach</h5>
              <ul className="mb-0 ps-3">
                <li>Near Urban Bank, Bhosale Chowk</li>
                <li>5 minutes walk from Pandharpur Bus Stand</li>
                <li>Easily accessible by auto-rickshaw</li>
                <li>Parking available at hospital premises</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
