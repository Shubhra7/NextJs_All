// 'use client';
// import React, { useEffect, useState } from 'react';
import styles from '../BlogPost.module.css'
import axios from 'axios';
// import { useParams } from 'next/navigation';

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const page = async ({params}) => {
    // const params = useParams();
    // const slug =  params?.slug;
    // const [blog,setBlog] = useState(null);

    // useEffect(()=>{
    //   if(!slug) return;
      
    //   axios.get(`http://localhost:3000/api/getblog?slug=${slug}`)
    //   .then((responese)=>{
    //     // console.log(responese.data);
    //     setBlog(responese.data)
    //   })
    //   .catch((err)=>{
    //     console.error('Error fetching blogs: ',err)
    //   })
    // },[slug])

    const slug = params?.slug
    const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`,{
      cache: 'no-store'
    })
    const blog = await res.json()

    function createMarkup(c) {
      return {__html: c};
    }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <br />
        <h1>Title of the page: {slug}</h1>
        <br />
        <hr className={styles.hrLine}/>
        <br />
        {blog ? (
          <div>
            <h2>{blog.title}</h2>
            <br />
            {/* <p>{blog.content.substr(0,340)}</p> */}
            {<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  )
}

export default page
