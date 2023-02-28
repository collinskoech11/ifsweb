import React from "react";
import "../css/teams.css";
import { motion } from "framer-motion";
import josh from "../../assets/Josh.png";
import peter from "../../assets/peter.png";
import Minahil from "../../assets/Minahill.jpg";
import joel from "../../assets/joel.png";
import richard from "../../assets/richard.png"

function Team() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        stiffness: 200,
      },
    },
    exit: {
      y: "100vh",
      transition: { ease: "easeInOut" },
    },
  };
  const data = [
    {
      firstname: "Joshua",
      lastname: "Brockner",
      imageName: josh,
    },
    {
      firstname: "Jaewon Peter",
      lastname: "Chun",
      imageName: peter,
    },
    {
      firstname: "Joel",
      lastname: "Johnson",
      imageName: joel,
    },
    {
      firstname: "Richard",
      lastname: "Kay",
      imageName: richard,
    },
    // {
    //   firstname: "Minahil",
    //   lastname: "Alvi",
    //   imageName: Minahil,
    // },
  ];
  return (
    <>
      <div className="team-main" id="team">
        <div className="team-desc">
          <h3>TEAM</h3>
          <p>
            Our experienced staff is unparalleled. We are a group of top-tier
            experts that have spent years honing our abilities and always
            pushing the boundaries of what is possible.
          </p>
        </div>
        <div className="team-dspl">
          {data.map((item, index) => {
            const imageLink = item.imageName;
            return (
              <>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ scale: 1.03, originX: 0, color: "#f8e112" }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="member"
                >
                  <div className="member-sq">
                    <img src={imageLink} alt="josh profile" />
                  </div>
                  <p>
                    {item.firstname}
                    <br /> {item.lastname}
                  </p>
                </motion.div>
              </>
            );
          })}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.03, originX: 0, color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 500 }}
            className="member"
          >
            <div className="member-sq">
              <div className="wrap">
                <img src={Minahil} alt="Minahill profile" />
              </div>
            </div>
            <p>
              Minahill <br /> Alvi
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Team;
