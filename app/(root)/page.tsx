import Link from "next/link";
import Company from "./_components/company";
import EventCard from "./_components/events-card";
import Hero from "./_components/hero";
import MentorCard from "./_components/mentor-card";
import StoriesCard from "./_components/stories-card";

import styles from "./page.module.css";
import clsx from "clsx";

export default function Home() {
  const mentor_work_at_images: string[] = [
    "coventry-university.png",
    "network-plus.jpeg",
    "toyota.png",
    "NHS.jpg",
    "siemens.jpg",
    "national-grid.webp",
    "Quacquarelli-Symonds.webp",
    "royalnavy.webp",
    "university-of-bolton.png",
  ];
  
  return (
    <main>
      <Hero />
      <div className="container">
        <div className={styles.content}>
          <h3 className={styles.heading}>Meet Our Mentors</h3>
          <Link href="/register" className={styles.button}>
            View All
          </Link>
        </div>
        <div className={styles.mentorGrid}>
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <h3 className={styles.heading}>Our mentors work at</h3>
        </div>
        <div className={clsx(styles.mentorFlex, "no-scrollbar")}>
          {mentor_work_at_images.map((path, i) => (
            <Company key={path + i} path={path} />
          ))}
        </div>
      </div>
      <div className={styles.storiesBg}>
        <div className="container">
          <div className={styles.content}>
            <h3 className={styles.heading} style={{ color: "white" }}>
              Success stories
            </h3>
          </div>
          <div className={styles.storiesGrid}>
            <StoriesCard />
            <StoriesCard />
          </div>
        </div>
      </div>
      <div className={styles.eventsBg}>
        <div className="container">
          <div className={styles.content}>
            <h3 className={styles.heading}>upcoming events</h3>
          </div>
          <div className={styles.eventGrid}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </main>
  );
}
