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
            <span className={styles.categoryText}> Country: Nigeria</span>
          </div>
        </div>
        <br/>
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
           
            <span className={styles.categoryText}>Department: Arts and Humanities </span>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.flex}>
           
            <span className={styles.categoryText}>Course: Msc international Relations</span>
          </div>
        </div>
        <br/>
        <h6 className={styles.heading}>Bio:</h6>
        <p className={styles.paragraph}>
        Obinna is a project manager on cross-functional projects with experience 
        in higher education marketing. He was a governor at Coventry University 
        and as Deputy Panel Chair of the Teaching Excellence Framework panel 
        at the Office for Students.He is committed to students skills acquisition
        and value for money in higher education.
        </p>
        <button className={styles.button}>Read more</button>
      </div>
   </div>
  );
};

export default MentorCard2;
