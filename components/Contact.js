import styles from '@/styles/Contact.module.css'

export default function Contact() {
    return (
        <div className={`${styles.contactInfoContainter}`}>
            <a href='https://github.com/andrewbantly' target="_blank"><p>GitHub</p></a>
            <a href='https://www.linkedin.com/in/andrewbantly/' target="_blank"><p>LinkedIn</p></a>
            <p>andrewbantly@gmail.com</p>
            {/* <p>(415) 596-1840</p> */}
            <p>San Francisco, California</p>
        </div>
    )
}