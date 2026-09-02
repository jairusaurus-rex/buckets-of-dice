import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin, faTailwindCss } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import d12 from "../../assets/images/dice/d12.png";
import styles from "./HomePage.module.css";
import vite_icon from "../../assets/images/icons/vite_icon.svg";
import react_icon from "../../assets/images/icons/react_icon.svg";

export const HomePage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.starField} aria-hidden="true" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>
            <span className={styles.kickerLine} />
            An original tabletop roleplay game
          </p>
          <h1>
            Into the <em>Heavens</em>
          </h1>
          <p className={styles.intro}>
            A Sci-Fi western ttrpg of exploration and adventure, where a crew
            of Spacers take on dangerous jobs at the edge of known space.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} to="/dice-app">
              Use dice roller <span aria-hidden="true"></span>
            </Link>
            <Link className={styles.primaryAction} to="/wiki">
              Explore the wiki <span aria-hidden="true"></span>
            </Link>
          </div>
        </div>

        <div className={styles.heroArtifact} aria-label="A twelve-sided die">
          <div className={`${styles.orbit} ${styles.orbitOne}`} />
          <div className={`${styles.orbit} ${styles.orbitTwo}`} />
          <div className={styles.artifactLabel}>Assemple your dice</div>
          <img src={d12} alt="" />
          <span className={styles.artifactCaption}>Roll into success</span>

        </div>
      </section>

      <section className={styles.infoGrid}>
        <div className={styles.infoLead}>
          <h3>Powered by</h3>
          <h2><span>Buckets of Dice</span></h2>
          <p>
            A fast, easy-to-read dice-pool system designed to emphasize accessibility, freedom of action, teamwork, and resource management.
          </p>
        </div>
        <div className={styles.techStack}>
          <p className={styles.sectionLabel}>Built in the open</p>
          <div className={styles.techList}>
            <span>
              <img
                src={react_icon}
                alt={`React`}
                className="h-5 w-10 inline-block pr-1"
              />
              React</span>
            <span>
              <img
                src={vite_icon}
                alt={`Vite`}
                className="h-5 w-10 inline-block pr-1"
              />
              Vite</span>
            <span><FontAwesomeIcon className="text-xl text-[var(--signal)]  pr-1" icon={faTailwindCss} /> Tailwind</span>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
        Created by <strong>Jairus</strong>
          <a href="https://www.linkedin.com/in/jairus-houdek-806679104/" target="_blank" rel="noreferrer" aria-label="jairus on LinkedIn" className="ml-3">
            <span className="text-lg"><FontAwesomeIcon icon={faLinkedin}  /></span>
            <span>LinkedIn</span>
          </a>
          {/*
          <a href="https://discord.com/" target="_blank" rel="noreferrer" aria-label="jairus on Discord"className="ml-3">
            <FontAwesomeIcon icon={faDiscord} />
            <span>Discord</span>
          </a>
            */}
        </div>
        <div className={styles.socials}>
        </div>
      </footer>
    </main>
  );
};