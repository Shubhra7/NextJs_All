'use client';
import Script from "next/script";
import styles from './About.module.css';


// 'use client' made it client side rendering, but metadata make it server side rendering
// so have to comment any one

// export const metadata = {
//   title: "About Us",
//   description: "Learn more about our team and mission.",
// };

export default function AboutPage () {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.heading}>About hello</h1>
      <h2>Testing the styled jsx</h2>
      <style jsx>
        {`
          h2{
            color: #424242ff
          }
        `}
      </style>


    </div>

      <Script src="/sj.js" strategy="beforeInteractive"></Script>
    </>
  );
}
