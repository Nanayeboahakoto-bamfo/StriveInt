"use client";

import React, { useLayoutEffect } from "react";

import styles from "./stories-card.module.css";
import Image from "next/image";
import { Quote } from "@/components/icons";

import AOS from "aos";

const StoriesCard = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <div data-aos="flip-left" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/person.png"
          alt="stories"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className={styles.wrapper}>
        <div>
          <Quote size={24} style={{ color: "#066FCF" }} />
        </div>
        <span className={styles.institute}>Havard University</span>
        <p className={styles.paragraph}>
          Sed ut perspiciatis unde omnis natus error voluptatem
          laudantium,inventore veritatis et quasi architecto beatae vita dicta
          explicabo.
        </p>
        <div className={styles.cover}>
          <h6 className={styles.name}>Selena Kate</h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className={styles.work}>Employed at: Google</span>
            <span className={styles.readMore}>READ STORY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesCard;
