// @ means start in the project root directory (aka where the package.json)
import styles from "@/styles/About.module.css";
import { useState } from "react"
// special nextJs images that speed up SSR caching (render faster)
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(1);

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
            <p className={[`biggerText ${styles.biggerText} ${styles.bodyCopy}`]}>Hi there, I'm Andrew.</p>
            <p className={[`biggerText ${styles.biggerText} ${styles.bodyCopy}`]}>I’m a product-minded software engineer focused on building intuitive interfaces and reliable systems that drive impact.</p>
            <p className={[`biggerText ${styles.biggerText} ${styles.bodyCopy}`]}>At SoBet, I work on business-critical features across the stack, from mobile and web interfaces to backend systems. I recently rebuilt our sports data infrastructure, improving load times and driving measurable gains in user engagement. I’ve helped grow our active user base by shipping features with urgency, improving stability, and developing scalable solutions—like our bet tracking engine that processes thousands of picks each week.</p>
            <p className={[`biggerText ${styles.biggerText} ${styles.bodyCopy}`]}>I prioritize clear communication, thoughtful execution, and maintainable code that teams can build on. I collaborate closely with product and design to break down ideas into shippable pieces and iterate efficiently.</p>
            <p className={[`biggerText ${styles.biggerText} ${styles.bodyCopy}`]}>Before tech, I worked in media—integrating a livestream for autonomous aircraft and producing content for the San Francisco Giants. That experience taught me to adapt quickly, deliver under pressure, and prioritize the user experience.</p>
            <p className={[`biggerText ${styles.biggerText} ${styles.bodyCopy}`]}>Outside of work, I enjoy skiing, cycling, and long walks with my dog, Murphy.</p>
        </div>
    )
}