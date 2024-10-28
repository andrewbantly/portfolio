// @ means start in the project root directory (aka where the package.json)
import styles from "@/styles/About.module.css";
import { useState } from "react"
// special nextJs images that speed up SSR caching (render faster)
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(1);
    
const startCoding = new Date(Date.UTC(2023, 2, 1));
const now = new Date();
const monthsCoding = (now.getUTCFullYear() - startCoding.getUTCFullYear()) * 12 + now.getUTCMonth() - startCoding.getUTCMonth();

    return (
        <div className={`${styles.container}`}>
            {/* styles jsx example */}
            <style jsx>
                {`
                    .biggerText {
                        font-size: ${fontSize}rem;
                        font-family: sans-serif;
                    }
                `}
            </style>
                <h2 className={`${styles.aboutHeader}`}>About</h2>
                <div className={`${styles.headshotWrapper}`}>
                    <Image
                        src="/andrew.jpg"
                        alt="Andrew Bantly"
                        width={400}
                        height={400}
                        className={`${styles.headshot}`}
                    />
                </div>
            <button onClick={() => setFontSize(fontSize + 0.1)} className={`${styles.fontSizeButton}`}>Enlarge font</button>
            <p className={[`biggerText ${styles.biggerText}`, ]}>Hi there, I'm Andrew.</p>
            <p className={[`biggerText ${styles.biggerText}`, ]}>After six years in media production, I’ve dedicated the past {monthsCoding} months to a persistent routine that prioritizes learning core programming principles and applying new skills through developing software. I’m proud of what I’ve accomplished so far, from completing a coding bootcamp, to creating a website for a small business, and working as a junior software developer at a startup.</p>
            <p className={[`biggerText ${styles.biggerText}`, ]}>Leveraging my experience in media production, my approach to software development stems from a tenet of storytelling - the impact of a message lies in its reception. I believe that, like a well-crafted story, software should not only fulfill functional requirements but also resonate with its users.</p>
            <p className={[`biggerText ${styles.biggerText}`, ]}>Throughout my professional journey, I've had the privilege of adapting my skills to diverse industries. I've contributed to Reliable Robotics, a startup focused on automating aircraft operations; the San Francisco Giants, a professional baseball organization; and the CK-12 Foundation, a non-profit dedicated to providing free, high-quality education.</p>
            <p className={[`biggerText ${styles.biggerText}`, ]}>When I'm not coding, I enjoy skiing down challenging slopes, exploring scenic roadways on my bike, and leisurely walks with my dog, Murphy.</p>
        </div>
    )
}