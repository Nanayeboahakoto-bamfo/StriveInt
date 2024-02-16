"use client";

import React, { useLayoutEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Mentor, User } from "@/components/icons";

import styles from "./hero.module.css";

import AOS from "aos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "lucide-react";

const Hero = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <>
      <div className={styles.blueBg}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div data-aos="fade-right" className={styles.content}>
              <h3 className={clsx(styles.heading, "font-inter")}>
              Strive INT takes you from Study to a Career in the UK
              </h3>
              <p className={styles.paragraph}>
              Ready to conquer the UK job market?<br/>
              Connect with our seasoned international graduates to unlock insider insights, Navigate the 
              UK Job market, and Discover your path to success. Lets shape your Journey together.
              </p>
              <div>
                <button className={clsx(styles.button, styles.buttonNormal)}>
                  <User size={24} />
                  <span>Student Login/Signup</span>
                </button>
              </div>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            >
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/objects.png"
                    alt="objects"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/objects.png"
                    alt="objects"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/objects.png"
                    alt="objects"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* <picture>
        <img src="/Vector.png" alt="" style={{ width: "100%" }} />
      </picture> */}
    </>
  );
};

export default Hero;
