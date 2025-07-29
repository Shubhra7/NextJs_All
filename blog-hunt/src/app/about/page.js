import Script from "next/script";
import styles from './About.module.css';

export const metadata = {
  title: "About Us",
  description: "Learn more about our team and mission.",
};

export default function AboutPage () {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.heading}>About hello</h1>
    </div>

      <Script src="/sj.js" strategy="beforeInteractive"></Script>
    </>
  );
}
