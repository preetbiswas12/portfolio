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
                <h4>Member in Designix</h4>
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
                <h4>CEO and founder of Cypher</h4>
                <h5>Cypher</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Cypher is a Saas Platform that uses Electron JS to create a custom ai assistant without being in the website.It is a desktop application that is used on the screen with Electron JS and is click through to teh website.
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
