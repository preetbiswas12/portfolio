/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react';
import './styles/Techstack.css';

// Configurable images with transform styles (zoom & position)
const techImages = {
  leftBox: {
    src: '/box2.png',
    style: {
      transform: 'translateX(-60%) translateY(-30%) scale(1.6)',
    },
  },
  frontend: {
    src: '/box.png',
    style: {
      transform: 'translateX(-50%) scale(1.0)',
    },
  },
  backend: {
    src: '/box3.png',
    style: {
      transform: 'translateX(-55%) scale(1.15)',
    },
  },
};

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.delay || '0s';
            target.style.animation = `fadeInUp 0.8s ${delay} forwards`;
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      boxesRef.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

  return (
    <section className="insiders-section" ref={sectionRef}>
      <h2 className="section-title">Insiders</h2>
      <div className="techstack-container">
        {/* Left Box - Our Technology */}
        <div
          className="left-box"
          ref={el => { boxesRef.current[0] = el }}
          data-delay="0.1s"
        >
          <div className="box-content">
            <span className="box-description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currently building a custom ai assistant <br/>&nbsp;&nbsp;&nbsp;using Electron JS named</span>
            <h3 className="box-title">
              Cypher
            </h3>
          </div>
          <img
            src={techImages.leftBox.src}
            alt="Technology stack"
            className="box-png left-png"
            style={techImages.leftBox.style}
          />
        </div>

        {/* Right Boxes - Frontend & Backend */}
        <div className="right-box">
          {/* Frontend Box */}
          <div
            className="top-box frontend-box"
            ref={el => { boxesRef.current[1] = el }}
            data-delay="0.3s"
          >
            <div className="box-content">
              <h4>Flexible with time zone Communications</h4>
            </div>
            <img
              src={techImages.frontend.src}
              alt="Frontend technologies"
              className="box-png frontend-png"
              style={techImages.frontend.style}
            />
          </div>

          {/* Backend Box */}
          <div
            className="bottom-box backend-box"
            ref={el => { boxesRef.current[2] = el }}
            data-delay="0.5s"
          >
            <div className="box-content">
              <h4>Tech Enthusiast with a<br/>&nbsp;&nbsp;&nbsp;&nbsp;passion for Development</h4>
            </div>
            <img
              src={techImages.backend.src}
              alt="Backend technologies"
              className="box-png backend-png"
              style={techImages.backend.style}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
