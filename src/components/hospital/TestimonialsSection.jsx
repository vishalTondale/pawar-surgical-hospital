import React from "react";
import { Star, Quote, MessageSquare } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ramesh Kulkarni",
      location: "Pandharpur",
      rating: 5,
      text: "Dr. Pawar performed my hernia surgery with great skill and care. The entire staff was very supportive throughout my recovery. I am very satisfied with the treatment.",
      procedure: "Hernia Surgery"
    },
    {
      name: "Sunita Deshmukh",
      location: "Pandharpur",
      rating: 5,
      text: "Excellent hospital with modern facilities. Dr. Pawar is a highly skilled surgeon who explains everything clearly. The nursing staff is also very caring and professional.",
      procedure: "General Surgery"
    },
    {
      name: "Prakash Jadhav",
      location: "Mangalwedha",
      rating: 5,
      text: "I was suffering from piles for many years. Dr. Pawar performed the surgery and now I am completely cured. Very grateful for his expert treatment and care.",
      procedure: "Piles Surgery"
    },
    {
      name: "Anita Patil",
      location: "Pandharpur",
      rating: 5,
      text: "The free medical camp organized by the hospital was very helpful. Got complete health checkup and valuable guidance from Dr. Pawar. Great community service!",
      procedure: "Health Checkup Camp"
    },
    {
      name: "Santosh Bhosale",
      location: "Barshi",
      rating: 5,
      text: "Emergency appendectomy was performed efficiently. Dr. Pawar and his team handled everything professionally. Recovery was smooth and quick. Highly recommended!",
      procedure: "Appendectomy"
    },
    {
      name: "Kavita Shinde",
      location: "Pandharpur",
      rating: 5,
      text: "Very clean and well-maintained hospital. Affordable treatment costs and excellent patient care. Dr. Pawar is an experienced and trustworthy surgeon.",
      procedure: "Thyroid Surgery"
    }
  ];

  return (
    <section className="py-5" style={{ background: "linear-gradient(to bottom right, #eff6ff, #ffffff)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 bg-success bg-opacity-10 text-success px-3 py-1 rounded-pill mb-3">
            <MessageSquare className="me-1" />
            Patient Testimonials
          </div>
          <h2 className="display-5 fw-bold mb-3">What Our Patients Say</h2>
          <p className="lead mb-0">
            Real experiences from patients who trusted us with their healthcare
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Quote className="text-primary" size={32} />
                    <div className="d-flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-warning" size={20} />
                      ))}
                    </div>
                  </div>
                  <p className="fst-italic text-gray-700 mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="border-top pt-3 d-flex justify-content-between align-items-start">
                    <div>
                      <p className="fw-bold mb-0">{testimonial.name}</p>
                      <p className="text-muted small mb-0">{testimonial.location}</p>
                    </div>
                    <div className="text-end">
                      <p className="small text-muted mb-1">Procedure</p>
                      <p className="text-primary fw-medium mb-0">{testimonial.procedure}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="card shadow-lg text-white mt-5" style={{ background: "linear-gradient(90deg, #16a34a, #059669)" }}>
          <div className="card-body text-center py-5">
            <MessageSquare className="mb-3" size={64} style={{ opacity: 0.8 }} />
            <h3 className="fw-bold mb-3">Your Health Journey Matters</h3>
            <p className="text-white-50 mb-4">
              Join thousands of satisfied patients who have trusted Pawar Surgical Hospital for their healthcare needs. Experience compassionate care and expert treatment.
            </p>
            <div className="row text-center justify-content-center">
              <div className="col-4">
                <p className="fs-2 fw-bold mb-1">5000+</p>
                <p className="small text-white-50">Happy Patients</p>
              </div>
              <div className="col-4">
                <p className="fs-2 fw-bold mb-1">98%</p>
                <p className="small text-white-50">Satisfaction Rate</p>
              </div>
              <div className="col-4">
                <p className="fs-2 fw-bold mb-1">10+</p>
                <p className="small text-white-50">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
