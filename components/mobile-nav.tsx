"use client";

import React, { useState } from "react";

import styles from "@/styles/mobile-nav.module.css";
import Image from "next/image";
import { Cross, Menu } from "./icons";
import clsx from "clsx";
import Link from "next/link";

const MobileNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.wrapper}>
          <div style={{ transform: "translateX(-1rem)" }}>
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </div>
          <Menu
            size={30}
            onClick={() => setToggleMenu((prev) => !prev)}
            className={styles.menu}
          />
        </nav>
      </div>
      {toggleMenu && (
        <div className={clsx(styles.sheet)}>
          <div style={{ position: "relative" }}>
            <Cross
              size={24}
              onClick={() => setToggleMenu((prev) => !prev)}
              className={styles.cross}
            />
          </div>
          <ul className={styles.ul}>
            <li>Home</li>
            <li>Find Mentor</li>
            <li>Events</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
          <Link href="/register" className={styles.link}>
            Login/Signup
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileNav;
