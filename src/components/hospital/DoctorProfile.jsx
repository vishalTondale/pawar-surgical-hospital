import React from "react";
import { Award, GraduationCap, Stethoscope, Star } from "lucide-react";
import abp from "../../assets/abp.jpg";
export default function DoctorProfile() {
  return (
    <section className="py-5" style={{ background: "linear-gradient(to right, #e0f2ff, #ffffff)" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center bg-primary text-white rounded-pill px-3 py-1 mb-3">
            <Stethoscope className="me-2" />
            Meet Our Expert
          </div>
          <h2 className="display-5 fw-bold mb-2">Dr. Aditya B. Pawar</h2>
          <p className="lead">Leading Surgeon with Years of Excellence</p>
        </div>

        <div className="row g-4">
          {/* Doctor Image */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg overflow-hidden">
              <img
                src={abp}
                className="card-img-top"
                alt="Dr. Aditya B. Pawar"
              />
              <div className="card-body bg-primary text-white">
                <h5 className="card-title fw-bold mb-1">Dr. Aditya B. Pawar</h5>
                <p className="mb-2">MBBS, MS (General Surgery)</p>
                <div className="d-flex">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="text-warning me-1" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="col-lg-8">
            <h3 className="h4 fw-bold mb-3">Expert Surgical Care You Can Trust</h3>
            <p>
              Dr. Aditya B. Pawar is a highly skilled and experienced surgeon specializing in General Surgery and Anorectal Surgery. With years of dedicated practice and hundreds of successful procedures, Dr. Pawar has established himself as a trusted healthcare provider in the Pandharpur region.
            </p>
            <p>
              His patient-first approach combines advanced surgical techniques with compassionate care, ensuring optimal outcomes and patient satisfaction. Dr. Pawar stays updated with the latest medical advancements to provide the best possible treatment to his patients.
            </p>

            <div className="row g-3 mt-3">
              {/* Qualifications */}
              <div className="col-md-6">
                <div className="card border-start border-4 border-primary h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-primary bg-opacity-10 rounded p-2 me-2">
                        <GraduationCap className="text-primary" />
                      </div>
                      <h5 className="fw-bold mb-0">Qualifications</h5>
                    </div>
                    <ul className="mb-0">
                      <li>MBBS from Recognized Medical College</li>
                      <li>MS in General Surgery</li>
                      <li>Specialized Training in Anorectal Surgery</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div className="col-md-6">
                <div className="card border-start border-4 border-success h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="bg-success bg-opacity-10 rounded p-2 me-2">
                        <Award className="text-success" />
                      </div>
                      <h5 className="fw-bold mb-0">Specializations</h5>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary">General Surgery</span>
                      <span className="badge bg-success">Anorectal Surgery</span>
                      <span className="badge bg-purple text-white">Laparoscopic Surgery</span>
                      <span className="badge bg-warning text-dark">Emergency Surgery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="card bg-primary text-white mt-4 shadow-lg">
              <div className="card-body d-flex align-items-start gap-3">
                <div className="bg-white bg-opacity-25 rounded p-2">
                  <Stethoscope className="text-white" size={28} />
                </div>
                <div>
                  <h5 className="fw-bold">Professional Experience</h5>
                  <p className="mb-0">
                    Over 7+ years of surgical practice with expertise in performing complex general and anorectal surgeries. Known for precision, care, and excellent patient outcomes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
