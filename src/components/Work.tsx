import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "FuturEd",
    category: "Web Development",
    features: "React, TypeScript, Framer Motion, Tailwind CSS",
    description:
      "FuturEd is a educational platform powered by AI that cuts your daily YouTube search and gives you content to learn anything.",
    image: "/image/futured.png",
    video: "portfolio.mp4",
    link: "https://futured-home-page.vercel.app/",
  },
  {
    title: "Zenith AI",
    category: "Education",
    features: "Next.js, Groq AI, Vite, Tailwind CSS",
    description:
      "A super fast AI assistant that gives solutions faster than a thunderstrike.",
    image: "/image/zenith-ai.png",
    video: "ecommerce.mp4",
    link: "https://zenith-ai-pi.vercel.app/",
  },
  {
    title: "VS Code Theme",
    category: "Interaction",
    features: "Visual Studio, CSS",
    description: "A cool, calming, peaceful color palette for your VS Code.",
    image: "/image/vscode.png",
    video: "viewer.mp4",
    link:
      "https://marketplace.visualstudio.com/items/?itemName=preetbiswas12.purple-theme-by-preet",
  },
  {
    title: "Developer Portfolio",
    category: "Personal Branding",
    features: "React, GSAP, Three JS, Vite, TypeScript",
    description: "A personal stunning 3D portfolio showcasing my work and skills.",
    image: "/image/portfolio.png",
    video: "blog.mp4",
    link: "/",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    const setTranslateX = () => {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    };

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.features}</p>
                <h4>Description</h4>
                <p>{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-visit-link"
                  >
                    Check it out <MdArrowOutward />
                  </a>
                )}
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                video={project.video}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
