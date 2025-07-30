import styles from './Blog.module.css';
import Link from 'next/link';

const page = () => {
  return (
     <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Link href={'/blogpost/learn-javascript'}>
          <h3 className={styles.blogItemh3}>How to learn Javascript in 2022?</h3></Link>
          <p>Javascipt is the language used to design logic for the web</p>
        </div>
        <br/>
        <div className="blogItem">
          <h3>How to learn Javascript in 2022?</h3>
          <p>Javascipt is the language used to design logic for the web</p>
        </div>
      </main>
     </div>
    
  )
}
export default page