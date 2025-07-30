import React from 'react';
import styles from '../BlogPost.module.css'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const page = async({params}) => {
    const {slug} = await params
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <br />
        <h1>Title of the page: {slug}</h1>
        <br />
        <hr className={styles.hrLine}/>
        <br />
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus soluta, quasi voluptate, laudantium eligendi quam autem consequuntur omnis ipsam nihil praesentium quis quidem.</div>
      </main>
    </div>
  )
}

export default page
