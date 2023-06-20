import Image from 'next/image'
import styles from '../../style/about.module.css'

export default function About() {
  return (
    <main>
      <section className={styles.about}>
        <div className={styles.me}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/about.jpg"
              alt="about image"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.aboutText}>
            <h1>About Me</h1>
            <h5>Frontend Developer</h5>
            <p>
              My name is Isabelle, I am 23 years old, and I am studying to
              become a Frontend Developer. I enjoy coding and learning new
              things. In my free time, I love reading books and spending time
              with my family. I am excited to see what the future holds for me
              in the world of development.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
