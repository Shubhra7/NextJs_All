'use client';
import { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import Link from 'next/link';
import axios from 'axios';

// step1 : Collect all the files from blogdata directory
// Step2 : Iterate through the and Display them
const page = () => {
  const [blogs,setBlogs] = useState([])

  // fetching all blogs from endpoint
  useEffect(()=>{
    console.log("Use Effect is running");

    // fetch('http://localhost:3000/api/blogs').then((a)=>{
    //   return a.json(); })
    //   .then((data)=>{
    //     console.log(data);
    //   })

    axios.get('http://localhost:3000/api/blogs')
      .then((responese)=>{
        // console.log(responese.data);
        setBlogs(responese.data)
      })
      .catch((err)=>{
        console.error('Error fetching blogs: ',err)
      })
  },[])   // added [] to prevent repeated calls


  return (
    <>
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem)=>{
          return <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
            <h3 className={styles.blogItemh3}>{blogitem.title}?</h3></Link>
            <p>{blogitem.content.substr(0,340)}</p>
            <br></br>
            <br />
          </div>
        })}
      </main>
     </div>

     
  </>
    
  )
}
export default page