import { motion } from "framer-motion";
import { FaGithub, FaJava, FaReact, FaMobileAlt, FaLaptopCode, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiKotlin, SiJavascript, SiCplusplus, SiExpress, SiVisualstudio, SiAndroidstudio, SiIntellijidea } from "react-icons/si";
import "./skills.scss";

const skills = [
  {
    category: "Tools",
    items: [
      { name: "Visual Studio Code", icon: <SiVisualstudio /> },
      { name: "Android Studio", icon: <SiAndroidstudio /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "Eclipse IDE", icon: <FaLaptopCode /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "React JS", icon: <FaReact /> },
      { name: "Node JS", icon: <FaNodeJs /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Express JS", icon: <SiExpress /> },
    ],
  },
  {
    category: "Interests",
    items: ["Web Development", "Software Development", "Mobile App Development", "Full Stack Development", "UI/UX Design"],
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <motion.div className="skills">
      <div className="header">
        <h1>My Skills</h1>
      </div>
      <motion.div className="container" variants={containerVariants} initial="hidden" animate="visible">
        {skills.map((skillSection) => (
          <motion.div key={skillSection.category} className="skills-section" variants={itemVariants}>
            <h2>{skillSection.category}</h2>
            <div className="skill-cards">
              {skillSection.items.map((item) => (
                <motion.div key={typeof item === "object" ? item.name : item} className="skill-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 120 }}>
                  {typeof item === "object" ? (
                    <>
                      <div className="icon">{item.icon}</div>
                      <h3>{item.name}</h3>
                    </>
                  ) : (
                    <h3>{item}</h3> // For interests, display the text only
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
