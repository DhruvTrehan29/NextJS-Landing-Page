import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';
const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  
  const [blog, setBlog] = useState(props.myblog);
   
    
  return (

    <div className={styles.container}>
       <main className={styles.main}>
        <h1 className={styles.TitleofBlog}>{blog&&blog.title}</h1>
        <hr/>
       
        {blog&& <div className={styles.Alignment} dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        
      
        </main>
    </div>
  )
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: {slug:'How-To-Learn-C++'} },
      { params: {slug:'How-To-Learn-C++'} },
      { params: {slug:'How-To-Learn-C++'} },
      { params: {slug:'How-To-Learn-C++'} }
    ],
    fallback: true 
  };
}



export async function getStaticProps(context) {
  // console.log(params);
const{slug}=context.params;
let myblog=await fs.promises.readFile(`BlogData/${slug}.json`,'utf-8')
      return {
        props:{myblog:JSON.parse(myblog)},
      }
}


export default Slug;