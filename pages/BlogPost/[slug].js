import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'
const slug = () => {
    const router=useRouter()
    const{slug}=router.query;
  return (

    <div className={styles.container}>
       <main className={styles.main}>
        <h1 className={styles.TitleofBlog}>Title of the Blog is {slug}</h1>
        <hr/>
        <div className={styles.Alignment}>
        quasi? Sunt laborum veritatis unde blanditiis perspiciatis veniam, inventore vel, odit animi neque explicabo, incidunt aspernatur magnam obcaecati! Aliquid at blanditiis veritatis voluptas deserunt provident, quod amet possimus praesentium ipsa, dolor odio. Asperiores dicta, animi harum ad odio ut omnis optio vitae accusantium inventore illum molestiae, perspiciatis impedit unde dignissimos a est excepturi, eveniet voluptas consequatur? Natus quis maxime corporis sapiente cum hic adipisci a sint voluptatem iure tempore ipsam, maiores ullam aliquam impedit nobis nisi soluta quam rem. Asperiores excepturi quis consequuntur laboriosam delectus nulla doloribus, neque eos, recusandae, ad repudiandae culpa porro in? Cumque ullam inventore aspernatur, repellat sed fugit. Ea non sapiente iusto impedit accusamus dolorum, iure laboriosam voluptas placeat eaque neque expedita!
        </div>
        </main>
    </div>
  )
}

export default slug;