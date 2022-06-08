import React from "react";
import Link from "next/Link";
import styles from "../styles/Blog.module.css";
const Blog = () => {
  return (
    <div className={styles.container}>
          <main className={styles.main}>
          <span className={styles.MyPersonalBlogHeading}>Personal Blog List</span>
          <div>
          <Link href={'/BlogPost/Java-learn'}>
          <h3 className={styles.blogItem}>1. How to learn Java ?</h3></Link>
          <p>This blog will teach you how to run programs using Java Programming Language.</p>
        </div>
        <div>
            <Link href={'/BlogPost/Python-learn'}>
          <h3 className={styles.blogItem}>2. How to learn Python ? </h3></Link>
          <p> This blog will teach you how to run programs using Java Programming Language. </p>
        </div>
        <div >
             <Link href={'/BlogPost/Python-learn'}>
          <h3 className={styles.blogItem}>3. How to learn C++ ? </h3></Link>
          <p> This blog will teach you how to run programs using Java Programming Language. </p>
        </div>
        <div>
             <Link href={'/BlogPost/Python-learn'}>
          <h3 className={styles.blogItem}>4. How to learn JavaScript ? </h3></Link>
          <p>This blog will teach you how to run programs using Java Programming Language. </p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
