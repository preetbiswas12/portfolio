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
                <h4> Developing Octatecode</h4>
                <h5>Octatecode</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
            Octatecode is a AI powered code editor which is powered by Gemini and also has a AI pair programming feature which helps users to code faster and also helps them to debug their code with the help of AI.
            </p>
          </div>
                    <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developed DRag</h4>
                <h5>DRag</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
            Designed and implemented an automated Retrieval-Augmented Generation (RAG) workflow using n8n that continuously ingests documents from Google Drive, processes and chunks content, generates embeddings, and updates a searchable knowledge base for downstream AI queries. The system removes manual data updates, keeps context synchronized in near real time, and demonstrates production-style AI orchestration rather than static prompt usage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member of GDGoC </h4>
                <h5>Galgotias University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Selected as a member of GDGoC (Google Developer Group of Computer Science) in 2025, I actively participated in various tech events and workshops, enhancing my skills and contributing to the developer community. This experience allowed me to collaborate with like-minded individuals and stay updated with the latest trends in technology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developed Quide</h4>
                <h5>Quide</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Quide is a AI powered chatbot which is powered by Gemini and also has the function of reading screens which helps users to get the information about the screen they are on and also helps them to navigate through the screen with the help of AI. It is a very useful tool for people who are visually impaired and also for people who want to get the information about the screen they are on without having to read the screen.
              </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member of Designix & Graphex</h4>
                <h5>Galgotias University</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Quide is a AI powered chatbot which is powered by Gemini and also has the function of reading screens which helps users to get the information about the screen they are on and also helps them to navigate through the screen with the help of AI. It is a very useful tool for people who are visually impaired and also for people who want to get the information about the screen they are on without having to read the screen.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
