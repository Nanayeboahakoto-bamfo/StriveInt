import React from "react";

import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div style={{ paddingTop: "4rem" }} />
      <div className={styles.container}>
        <nav className={styles.wrapper}>
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={170}
              height={50}
              style={{ objectFit: "contain" }}
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
