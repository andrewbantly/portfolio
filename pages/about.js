// @ means start in the project root directory (aka where the package.json)
import styles from "@/styles/About.module.css";
import { useState } from "react"
// special nextJs images that speed up SSR caching (render faster)
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(3)
    return (
        <div>
            {/* styles jsx example */}
            <style jsx>
                {`
                    .bigHeader {
                        font-size: ${fontSize}rem;
                        color: green;
                    }
                `}
            </style>
            <h1 className="bigHeader">Andrew</h1>
            <button onClick={() => setFontSize(fontSize + 1)}>++</button>
            <p className={styles.yellowText}>I am a software engineer who is building his portfolio. 👨🏻‍💻</p>
            {/* local images are stored in public folder */}
            {/* regular <img/> tags work as well, if you cannot provide a width and height */}
            <Image
                src="/murphy.jpg"
                alt="murphy"
                // next Image components NEED a predefined pixel height and width
                width={400}
                height={400}
            />
            {/* using another hosting domain for images */}
            <Image
                src="https://media.licdn.com/dms/image/D5603AQEICARRnoENhQ/profile-displayphoto-shrink_400_400/0/1677704970769?e=1689811200&v=beta&t=2ctgCgvBtLBPI6HZGftQ3mRicPH0bbU9RHPkzZSS28Q"
                alt="Andrew's LinkedIn image"
                width={400}
                height={400}
            />
        </div>
    )
}