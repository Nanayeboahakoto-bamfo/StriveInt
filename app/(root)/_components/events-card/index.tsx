"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";

import { Bag, Atom, Location } from "@/components/icons";

import styles from "./events-card.module.css";

import AOS from "aos";

const EventCard = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <div data-aos="zoom-in">
      <div className={styles.imageContainer}>
        <Image
          src="/mentor.png"
          alt="mentor"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.cover}>
          <div className={styles.date}>Feb 20</div>
          <div className={styles.category}>Talk Event</div>
        </div>
        <p className={styles.paragraph}>
          Sed ut perspiciatis unde omnis natus lauda,inventore veritatis et
          quasi dicta explicabo.
        </p>
        <div className={styles.coverLocation}>
          <Location
            size={26}
            style={{ border: "1px solid #066FCF", borderRadius: "99999px" }}
          />
          <span className={styles.location}>united states</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
