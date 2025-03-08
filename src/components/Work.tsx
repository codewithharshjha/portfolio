// import "./styles/Work.css";
// import WorkImage from "./WorkImage";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// const Work = () => {
//   useGSAP(() => {
//     let translateX: number = 0;
//     function setTranslateX() {
//       const box = document.getElementsByClassName("work-box");
//       const rectLeft = document
//         .querySelector(".work-container")!
//         .getBoundingClientRect().left;
//       const rect = box[0].getBoundingClientRect();
//       const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
//       let padding: number =
//         parseInt(window.getComputedStyle(box[0]).padding) / 2;
//       translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
//     }

//     setTranslateX();

//     let timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".work-section",
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//         pin: true,
//         pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
//         id: "work",
//       },
//     });

//     timeline.to(".work-flex", {
//       x: -translateX,
//       duration: 40,
//       delay: 0.2,
//     });
//   }, []);
//   return (
//     <div className="work-section" id="work">
//       <div className="work-container section-container">
//         <h2>
//           My <span>Work</span>
//         </h2>
//         <div className="work-flex">
//           {[...Array(6)].map((_value, index) => (
//             <div className="work-box" key={index}>
//               <div className="work-info">
//                 <div className="work-title">
//                   <h3>0{index + 1}</h3>

//                   <div>
//                     <h4>Ai-Interview</h4>
//                     <p>Web-2</p>
//                   </div>
//                 </div>
//                 <h4>Tools and features</h4>
//                 <p>TypeScript,Nextjs,Postgress,Prisma</p>
//               </div>
//               <WorkImage image="/images/mysql.webp" alt="" />
//             </div>
            
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      title: "AI-Interview",
      category: "Web-2",
      tools: "TypeScript, Next.js, Postgres, Prisma",
      image: "/images/mysql.webp",
    },
    {
      title: "Alumini-Fubding",
      category: "Web-2",
      tools: "Next.js, Cloudinary, Postgress, Tailwind CSS",
      image: "/images/AluminiFunding.png",
    },
    {
      title: "Book-Walah",
      category: "Web-2",
      tools: "Next.js, Node.js,Postgress, Express",
      image: "/images/bookwala.png",
    },
    {
      title: "NFT Marketplace",
      category: "Web-3",
      tools: "Next.js, Solidity, Web3.js, IPFS",
      image: "/images/nftmarketplace.png",
    },
    {
      title: "Website-Builder",
      category: "Web-2",
      tools: "Next, Cloud.Api, Tailwind CSS",
      image: "/images/websitebuilder.png",
    },
    {
      title: "Ai-interview",
      category: "Web-2",
      tools: "OpenSourceApi ,Clerk,Next.js",
      image: "/images/AI-interview.jpg",
    },
    {
      title: "Social-News",
      category: "Web-2",
      tools: "TypeScript ,Clerk,Next.js,Cloudinary",
      image: "/images/Thread.jpg",
    },
  ];

  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
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
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
