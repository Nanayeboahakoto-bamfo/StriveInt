"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";

import { Bag, Atom, Quote } from "@/components/icons";

import styles from "./mentor-card.module.css"
import AOS from "aos";

const MentorCard = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <div data-aos="zoom-in">
      <div className={styles.imageContainer}>
        <Image
          src="/profile.png"
          alt="mentor"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.wrapper}>
        <h6 className={styles.heading}>Blessed Pepple</h6>
        <div className={styles.cover}>
          <div className={styles.flex}>
            <span className={styles.categoryText}> Country: Nigeria</span>
          </div>
        </div>
        <br/>
        <div className={styles.cover}>
          <div className={styles.flex}>
            <Bag size={20} className={styles.icon} />
            <span className={styles.categoryText}> Employed At: Quacquarelli-Symonds(QS)</span>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.flex}>
            <span className={styles.categoryText}>Job Title: Account Manager</span>
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
           
            <span className={styles.categoryText}>Department: Health and Life Science</span>
          </div>
        </div>
        <div className={styles.cover}>
          <div className={styles.flex}>
           
            <span className={styles.categoryText}>Course: Bsc Biological and Chemical science</span>
          </div>
        </div>

        <br/>
        <h6 className={styles.heading}>Bio:</h6>
        <p className={styles.paragraph}>
        I have over six years of experience working in the UK across multiple sectors.
        My expertise is in business development and managing commercial partnerships for companies. 
        Currently, I work in the technology industry for a leading service provider in higher education. 
        I have also spent some time teaching bioscience related courses at university ...
       
        </p>
        <button className={styles.button}>Read more</button>
      </div>
   </div>
  );
};

export default MentorCard;
