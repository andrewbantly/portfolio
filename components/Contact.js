import styles from '@/styles/Contact.module.css'

export default function Contact() {
    return (
        <div className={`${styles.contactInfoContainter}`}>
            <a href='https://github.com/andrewbantly' target="_blank" className={`${styles.contactLinks}`}><p className={`${styles.contactInfo}`}>GitHub</p></a>
            <a href='https://www.linkedin.com/in/andrewbantly/' target="_blank" className={`${styles.contactLinks}`}><p className={`${styles.contactInfo}`}>LinkedIn</p></a>
            <p className={`${styles.contactInfo}`}>andrewbantly@gmail.com</p>
            {/* <p className={`${styles.contactInfo}`}>(415) 596-1840</p> */}
            <p className={`${styles.contactInfo}`}>San Francisco, California</p>
        </div>
    )
}