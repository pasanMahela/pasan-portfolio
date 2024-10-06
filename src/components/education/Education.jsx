import { useRef } from "react";
import "./education.scss";
import { motion } from "framer-motion";
import { FaDownload } from 'react-icons/fa';


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Education = () => {
  const ref = useRef();

  const handleDownloadClick = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = '/ResultSheet.pdf'; // Update with the actual path to your PDF
    link.download = 'Pasan_Mahela_ResultSheet.pdf'; // Filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I'm a Software Engineering undergraduate</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="Student icon" />
          <h1>
            <motion.b whileHover={{ color: "orange", scale: 1.1, transition: { duration: 0.3 } }}>
              Undergraduate
            </motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange", scale: 1.1, transition: { duration: 0.3 } }}>
              SLIIT
            </motion.b> University
          </h1>
          <button 
            onClick={handleDownloadClick} 
            className="downloadButton"
          >
            Cumulative GPA: 3.4 <br />
            <FaDownload className="downloadIcon" />
          </button>

        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", scale: 1.05, transition: { duration: 0.3 } }}
        >
          <h2>2nd Year 1st Sem <br />GPA: 3.48</h2>
          <p>
            Software Engineering - A-<br />
            Object Oriented Programming - A-<br />
            Database Management Systems - B+<br />
            Computer Networks - B<br />
            Operating Systems and System Administration - A-<br />
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", scale: 1.05, transition: { duration: 0.3 } }}
        >
          <h2>1st Year 2nd Sem <br />GPA: 3.13</h2><br />
          <p>
            Object Oriented Concepts - B<br />
            Software Process Modeling - B+<br />
            English for Academic Purposes - B<br />
            Information Systems & Data Modeling - B+<br />
            Internet & Web Technologies - B<br />
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", scale: 1.05, transition: { duration: 0.3 } }}
        >
          <h2>1st Year 1st Sem <br />GPA: 3.58</h2><br />
          <p>
            Introduction to Programming - A<br />
            Introduction to Computer Systems - A-<br />
            Mathematics for Computing - A<br />
            Communication Skills - C+<br />
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", scale: 1.05, transition: { duration: 0.3 } }}
        >
          <h2>Other</h2><br />
          <p>
            <b>Certificate in Information Technology</b><br />
            Esoft Metro Campus, Anuradhapura <br />
          </p>
          <p>
            <b>Certificate in English</b><br />
            Esoft Metro Campus, Anuradhapura <br />
          </p>
          <p>
            <b>Passed GCE A/L - 2019 (Science Stream)</b><br />
          </p>
          <p>
            <b>Passed GCE O/L - 2016</b>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
