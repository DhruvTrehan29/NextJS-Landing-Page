
import React, {useEffect,useState} from 'react'; 
import Link from "next/Link";
import styles from "../styles/Blog.module.css";
const Blog = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("UseEffect is running")
    fetch('http://localhost:3000/api/Blogs').then((a)=>{
        return a.json();  })
        .then((parsed)=>{
          console.log(parsed)
          setBlogs(parsed)
        })
      },[])
  
  return <div className={styles.container}>
          <main className={styles.main}>
          <h2 className={styles.MyPersonalBlogHeading}>Popular Blogs</h2>
           {Blogs.map((blogitem)=>{
                return <div key={blogitem.slug}>
                <Link href={`/BlogPost/${blogitem.slug}`}>
                <h3 className={styles.blogItem}>{blogitem.title}</h3></Link>
                <p className={styles.parasize}>{blogitem.content.substr(0,140)} ....</p>
        </div>
            })}
      </main>
    </div>
};

export default Blog;
