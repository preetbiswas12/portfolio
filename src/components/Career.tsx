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
                <h4> Member in Designix</h4>
                <h5>Galgotias University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Selected as MVP and Top Creator at Designix, a premier club for motion graphics and UI/UX design, for outstanding contributions in branding, logo design, and creative leadership.
            Honored with the Creator of the Month award for consistently delivering high-impact visual content.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developed Luma and Quide </h4>
                <h5>Quide</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Luma and Quide are both electron based windows app with mac and linux packages enabled but not developed.Each of them is powered by Gemini that is on top of the window letting u have your best time coding and debugging silently with bypassing sandboxing for web apps and also running in without console in case of desktop apps
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developed a Educational Platform</h4>
                <h5>Zenith</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Zenith is a educational platform which is powered by AI which helps users to learn anything, anytime,anywhere without getting into searhing for long hours on Youtube with also a peer to peer learning developed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
