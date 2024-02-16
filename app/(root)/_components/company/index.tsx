"use client";

import Image from "next/image";
import React, { useLayoutEffect } from "react";

import AOS from "aos";

import styles from "./company.module.css";

const Company = ({ path }: { path: string }) => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0 });
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.cover}>
        <Image
          src={`/logos/${path}`}
          alt="logo"
          height={50}
          width={150}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Company;
