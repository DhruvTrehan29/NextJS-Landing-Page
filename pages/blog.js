
import React, {useEffect,useState} from 'react'; 
import Link from "next/Link";
import styles from "../styles/Blog.module.css";
import * as fs from 'fs';
const Blog = (props) => {
  console.log(props);
  const [Blogs, setBlogs] = useState(props.allBlogs);

  
  return <div className={styles.container}>
          <main className={styles.main}>
          <h2 className={styles.MyPersonalBlogHeading}>Popular Blogs</h2>
           {Blogs.map((blogitem)=>{
                return <div key={blogitem.slug}>
                <Link href={`/BlogPost/${blogitem.slug}`}>
                <h3 className={styles.blogItem}>{blogitem.title}</h3></Link>
                <p className={styles.parasize}>{blogitem.desc.substr(0,140)} ....</p>
        </div>
            })}
      </main>
    </div>
};
export async function getStaticProps(context) {
  let data=await fs.promises.readdir("BlogData")
  let MyFile;
  let allBlogs=[];
  for(let index=0;index<data.length;index++){
    const item=data[index];
     console.log(item)
     MyFile= await fs.promises.readFile(("BlogData/"+item),'utf-8')
     allBlogs.push(JSON.parse(MyFile))
  }
        return {
          props:{allBlogs},
        }
  }



export default Blog;
