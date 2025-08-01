// 'use client';  ###
// import { useEffect, useState } from 'react';  ##
import styles from './Blog.module.css';
import Link from 'next/link';
import axios from 'axios';

// export const revalidate = 60; // Enables ISR

// step1 : Collect all the files from blogdata directory
// Step2 : Iterate through the and Display them
const page = async () => {   // async for making it SSR
  
  // const [blogs,setBlogs] = useState([])  ##

  // ****************  CSR ***********
  // fetching all blogs from endpoint
  // useEffect(()=>{
  //   console.log("Use Effect is running");

  //   // fetch('http://localhost:3000/api/blogs').then((a)=>{
  //   //   return a.json(); })
  //   //   .then((data)=>{
  //   //     console.log(data);
  //   //   })

  //   // #### when CSR (client Side rendering happening)
  //   axios.get('http://localhost:3000/api/blogs')
  //     .then((responese)=>{
  //       // console.log(responese.data);
  //       setBlogs(responese.data)
  //     })
  //     .catch((err)=>{
  //       console.error('Error fetching blogs: ',err)
  //     })
  // },[])   // added [] to prevent repeated calls



  // ****************  SSR [ServerSide rendering] ***********
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  const res = await fetch(`${baseUrl}/api/blogs`,{
    cache: 'no-store',      // <- disables caching for SSR 
    // cache: 'force-cache', // <- when SSG(static site generation)
  })
  const blogs = await res.json();


  return (
    <>
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem)=>{
          return <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
            <h3 className={styles.blogItemh3}>{blogitem.title}?</h3></Link>
            <p>{blogitem.metadesc}</p>
            <br></br>
            <br />
          </div>
        })}
      </main>
     </div>

     
  </>    
  )
}


// Previously used
// export async function getServerSideProps(context) {
//   return {
//     props: {harry: "Good boy"},  // will be passed to the page component as props
//   }
  
// }
export default page