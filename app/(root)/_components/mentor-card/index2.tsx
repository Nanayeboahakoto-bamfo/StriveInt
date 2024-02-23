"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";

import { Bag, Atom, Quote } from "@/components/icons";

import styles from "./mentor-card.module.css"
import AOS from "aos";

const MentorCard2 = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <div data-aos="zoom-in">
      <div className={styles.imageContainer}>
        <Image
          src="/Obinna.jpg"
          alt="mentor"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.wrapper}>
        <h6 className={styles.heading}>Obinna Okereke</h6>
        <div className={styles.cover}>
          <div className={styles.flex}>
            <Bag size={20} className={styles.icon} />
            <span className={styles.categoryText}>Employed At: Coventry University</span>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.flex}>
            <span className={styles.categoryText}>Job Title: Project Manager</span>
          </div>
        </div>
        <p className={styles.paragraph}>Education Info:</p>
        <div className={styles.cover}>
          <div className={styles.flex}>
          <Atom size={20} className={styles.icon} />
            <span className={styles.categoryText}>University: Coventry University</span>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.flex}>
           
            <span className={styles.categoryText}>Department: Arts and Humanities </span>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.flex}>
           
            <span className={styles.categoryText}>Course: Msc international Relations</span>
          </div>
        </div>

        <p className={styles.paragraph}>Bio:</p>
        <p className={styles.paragraph}>
        Obinna Okereke is a dynamic project manager with a focus on leadership and organization. 
        With a proven track record of successful project delivery, He aspires to mentor for aspiring
        international students, sharing his expertise in project management methodologies and guiding
        them towards achieving their career goals with confidence and efficiency ...
        </p>
        <button className={styles.button}>Read more</button>
      </div>
   </div>
  );
};

export default MentorCard2;
