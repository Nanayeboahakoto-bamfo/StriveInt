import React from "react";

import styles from "@/styles/footer.module.css";
import Image from "next/image";
import { Location, Mail, Phone } from "./icons";

const Footer = () => {
  return (
    <footer className={styles.bg}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.box}>
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={40}
              style={{ objectFit: "contain", transform: "translateX(-1rem)" }}
            />
            <p className={styles.paragraph}>
            Our mission is straignt forward:<br/>
            To provide countless internatinal<br/>
            Students with the opportunity <br/>
            to forge successful careers
            </p>
          </div>

          <div className={styles.box}>
            <h6 className={styles.heading}>Quick Links</h6>
            <ul className={styles.ul}>
              <li>Home</li>
              <li>Find Mentor</li>
              <li>Events</li>
              <li>About Us</li>
              <li>Career</li>
            </ul>
          </div>
          <div className={styles.box}>
            <h6 className={styles.heading}>Help & Support</h6>
            <ul className={styles.ul}>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className={styles.box}>
            <h6 className={styles.heading}>Get in Touch</h6>
            <div className={styles.icon}>
              <Location size={40} />
              <div>
                <span className={styles.span}>Location</span>
                <p className={styles.paragraph}>123 Street, New York, USA</p>
              </div>
            </div>
            <div className={styles.icon}>
              <Mail size={40} />
              <div>
                <span className={styles.span}>Mail</span>
                <p className={styles.paragraph}>abc@gmail.com</p>
              </div>
            </div>
            <div className={styles.icon}>
              <Phone size={40} />
              <div>
                <span className={styles.span}>Phone Number</span>
                <p className={styles.paragraph}>+1 234 567 789</p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.paragraph} style={{ textAlign: "center" }}>
          Copyright 2024.All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
