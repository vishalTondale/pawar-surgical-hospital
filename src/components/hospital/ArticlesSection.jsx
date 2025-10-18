import React from "react";
import { BookOpen, Award, Trophy, Newspaper, Calendar } from "lucide-react";

export default function ArticlesSection() {
  const articles = [
    {
      type: "Health Tip",
      title: "Post-Surgery Care: Essential Tips for Faster Recovery",
      excerpt: "Learn the best practices for post-operative care to ensure smooth and quick recovery after surgery...",
      date: "December 20, 2024",
      category: "Patient Education"
    },
    {
      type: "Article",
      title: "Understanding Piles: Symptoms, Prevention & Treatment",
      excerpt: "A comprehensive guide to understanding anorectal conditions and modern treatment options available...",
      date: "December 10, 2024",
      category: "Medical Information"
    },
    {
      type: "News",
      title: "New Laparoscopic Equipment Installed at Pawar Surgical Hospital",
      excerpt: "We are proud to announce the installation of advanced laparoscopic surgical equipment for minimally invasive procedures...",
      date: "November 25, 2024",
      category: "Hospital News"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Excellence in Surgical Care Award 2024",
      description: "Recognized for outstanding patient care and surgical outcomes",
      year: "2024"
    },
    {
      icon: Trophy,
      title: "Community Healthcare Initiative",
      description: "Honored for conducting 20+ free medical camps serving 2000+ patients",
      year: "2023"
    },
    {
      icon: Award,
      title: "Patient Satisfaction Excellence",
      description: "Achieved 98% patient satisfaction rating",
      year: "2024"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-pill mb-3">
            <BookOpen className="me-1" />
            Articles & Achievements
          </div>
          <h2 className="display-5 fw-bold mb-3">Health Insights & Recognition</h2>
          <p className="lead mb-0">
            Stay informed with health articles, hospital news, and our achievements in healthcare excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="row g-4 mb-5">
          {/* Articles */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <Newspaper className="text-primary" /> Latest Articles & News
            </h3>
            {articles.map((article, index) => (
              <div key={index} className="card mb-3 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-primary">{article.type}</span>
                    <div className="d-flex align-items-center gap-1 text-muted">
                      <Calendar className="me-1" /> {article.date}
                    </div>
                  </div>
                  <h5 className="card-title fw-bold">{article.title}</h5>
                  <p className="card-text">{article.excerpt}</p>
                  <span className="badge bg-secondary">{article.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <Trophy className="text-warning" /> Awards & Recognition
            </h3>
            {achievements.map((ach, index) => (
              <div key={index} className="card mb-3 shadow-sm">
                <div className="card-body d-flex align-items-start gap-3">
                  <div className="bg-gradient p-3 rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)", width: "60px", height: "60px" }}>
                    <ach.icon className="text-warning" />
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <h6 className="fw-bold mb-0">{ach.title}</h6>
                      <span className="badge bg-warning text-dark">{ach.year}</span>
                    </div>
                    <p className="mb-0">{ach.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="card shadow-lg text-white mb-5" style={{ background: "linear-gradient(90deg, #2563eb, #1d4ed8)" }}>
          <div className="card-body text-center py-5">
            <BookOpen className="mb-3" style={{ fontSize: "3rem", opacity: 0.8 }} />
            <h3 className="fw-bold mb-3">Stay Informed About Your Health</h3>
            <p className="mb-4">
              Follow our articles for valuable health tips, medical information, and updates about our hospital services. Your health education is our priority.
            </p>
            <a href="tel:+919876543210" className="btn btn-light text-primary fw-bold px-4 py-2">
              Contact for More Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
