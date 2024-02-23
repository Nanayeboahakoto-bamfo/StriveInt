"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";

import { Bag, Atom, Quote } from "@/components/icons";

import styles from "./mentor-card.module.css"
import AOS from "aos";

const MentorCard1 = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <div data-aos="zoom-in">
      <div className={styles.imageContainer}>
        <Image
          src="/nana.jpg"
          alt="mentor"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.wrapper}>
        <h6 className={styles.heading}>Nana Yeboah Akoto-Bamfo</h6>
        <div className={styles.cover}>
          <div className={styles.flex}>
            <span className={styles.categoryText}> Country: Ghana</span>
          </div>
        </div>
        <br/>
        <div className={styles.cover}>
          <div className={styles.flex}>
            <Bag size={20} className={styles.icon} />
            <span className={styles.categoryText}>Employed At: National Grid</span>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.flex}>
            <span className={styles.categoryText}>Job Title: Software engineer</span>
          </div>
        </div>
        <br/>
        <h6 className={styles.heading}>Education:</h6>
        <div className={styles.cover}>
          <div className={styles.flex}>
          <Atom size={20} className={styles.icon} />
            <span className={styles.categoryText}>University: Coventry University</span>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.flex}>
           
            <span className={styles.categoryText}>Department: Engineering & Computing</span>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.flex}>
           
            <span className={styles.categoryText}>Course: Msc Computer Science</span>
          </div>
        </div>
        <br/>
        <h6 className={styles.heading}>Bio:</h6>
        <p className={styles.paragraph}>
        Nana is a skilled software engineer who honed his craft at Coventry University. 
        With a passion for problem-solving and innovation, he excels in developing efficient 
        and scalable software solutions. Leveraging his education and experience, 
        Nana thrives in collaborative environments, Choose Nana to be your mentor ...
       
        </p>
        <button className={styles.button}>Read more</button>
      </div>
   </div>
  );
};

export default MentorCard1;
