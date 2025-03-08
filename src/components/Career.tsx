import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend-developer</h4>
                <h5>GAO-Tek</h5>
              </div>
              
            </div>
            <p>
            API Development: Designed and implemented RESTful APIs to support front-end functionalities, enabling efficient data exchange between client applications and backend systems.
Database Management: Created and optimized database schemas, wrote complex SQL queries, and ensured data integrity across relational and NoSQL databases.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech-Member</h4>
                <h5>Kitabwalah</h5>
              </div>
              
            </div>
            <p>
            Website Performance Optimization: Led the migration of Kitabwalah.com from WordPress to Next.js, resulting in a faster, more scalable website. Used SSR (Server-Side Rendering) and caching techniques to improve load times and enhance the overall user experience.
Frontend Development: Designed and developed the user-facing side of the platform using Next.js, React, and Tailwind CSS, ensuring responsive and smooth user interfaces across all devices.
Backend Development: Worked with Node.js and other backend technologies to build robust, scalable APIs, enabling seamless data flow between the frontend and backend.
Database Management: Optimized and maintained database systems to ensure fast data retrieval and efficient handling of user information.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech-Lead</h4>
                <h5>Start-up</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            I served as the Lead Developer for a startup founded by my college batchmate, taking full ownership of the technology stack. I conceptualized, designed, and implemented the platform's technical infrastructure, ensuring scalability, performance, and user-centric functionality. From initial brainstorming to final deployment, I played a pivotal role in bringing the startup's vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
