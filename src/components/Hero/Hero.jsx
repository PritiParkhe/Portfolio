import React from 'react'
import { getImageUrl } from '../../utils'
import Styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I'm Priti</h1>
        <p className={Styles.description}>I'm a fullstack developer using technologies like Node.js, React.js, JavaScript </p>
        <a href="mailto:parkhepriti71@gmail.com" className={Styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={Styles.heroImg}/>
      <div className={Styles.topBlur}/>
      <div className={Styles.bottomBlur}/>
    </section>
  )
}

export default Hero