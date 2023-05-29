// @ means start in the project root directory (aka where the package.json)
import styles from "@/styles/About.module.css";
import { useState } from "react"
// special nextJs images that speed up SSR caching (render faster)
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(1)
    return (
        <div className={`${styles.container}`}>
            {/* styles jsx example */}
            <style jsx>
                {`
                    .biggerText {
                        font-size: ${fontSize}rem;
                    }
                `}
            </style>
            {/* <div className={`${styles.aboutHeaderContainer}`}> */}
                <h2 className={`${styles.aboutHeader}`}>About</h2>
                <div className={`${styles.headshotWrapper}`}>
                    <Image
                        src="/andrew.jpg"
                        alt="Andrew Bantly"
                        width={400}
                        height={400}
                        style={{
                            "border-radius": "50%",
                            "border": "3px solid #d1d1d1",
                            "width": "10rem",
                            "height": "10rem"
                        }}
                    />
                </div>
            {/* </div> */}
            <button onClick={() => setFontSize(fontSize + 0.5)} className={`${styles.fontSizeButton}`}>Enlarge font</button>
            <p className={`biggerText ${styles.biggerText}`}>Hi there, I'm Andrew.</p>
            <p className={`biggerText ${styles.biggerText}`}>I'm a highly motivated software engineer with six years of experience in media production. My passion lies in finding innovative solutions that not only meet expectations but exceed them. I excel in creative problem solving, project management, and effective communication.</p>
            <p className={`biggerText ${styles.biggerText}`}>Recently, I completed an immersive software engineering bootcamp with General Assembly. Over the course of 12 weeks, I dedicated more than 600 hours to learning various technologies, including Git, Github, HTML, CSS, JavaScript, Node, MongoDB, PostgreSQL, React, Next, Python, and more.</p>
            <p className={`biggerText ${styles.biggerText}`}>I take pride in being an alumnus of the University of Oregon, where I honed my storytelling skills. Following graduation, I embarked on a solo journey to the Dominican Republic, producing a documentary that marked the beginning of my career.</p>
            <p className={`biggerText ${styles.biggerText}`}>Throughout my professional journey, I've had the privilege of collaborating with diverse organizations. I've contributed to Reliable Robotics, a startup focused on automating aircraft operations, as well as the San Francisco Giants, a professional baseball organization. Additionally, I've worked with the CK-12 Foundation, a non-profit organization dedicated to providing free, high-quality education.</p>
            <p className={`biggerText ${styles.biggerText}`}>When I'm not coding, you can find me pursuing various outdoor activities. I enjoy skiing down challenging slopes, biking through scenic roadways, and taking leisurely walks with my dog Murphy. As a sports enthusiast, I find inspiration in teamwork, competition, and the expression: “pressure is a privilege.”</p>
            <p className={`biggerText ${styles.biggerText}`}>When I'm not coding, you can find me engaging in various outdoor activities. I enjoy skiing down challenging slopes, exploring scenic roadways on my bike, and enjoying leisurely walks with my dog, Murphy. As a sports enthusiast, I draw inspiration from teamwork, competition, and the mantra: "pressure is a privilege."</p>
            {/* local images are stored in public folder */}
            {/* regular <img/> tags work as well, if you cannot provide a width and height */}
            {/* using another hosting domain for images */}
        </div>
    )
}