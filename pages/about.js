// @ means start in the project root directory (aka where the package.json)
import styles from "@/styles/About.module.css";
import { useState } from "react"
// special nextJs images that speed up SSR caching (render faster)
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(1)
    return (
        <div>
            {/* styles jsx example */}
            <style jsx>
                {`
                    .biggerText {
                        font-size: ${fontSize}rem;
                        color: green;
                    }
                `}
            </style>
            <h2>About</h2>
            <div className="headshotWrapper">
            <Image
            src="/andrew.jpg"
            alt="Andrew Bantly"
            width={400}
            height={400}
            style={{
              "border-radius": "50%",
              "border": "3px solid #d1d1d1"
            }}
          />
          </div>
            <button onClick={() => setFontSize(fontSize + 0.5)}>Enlarge font</button>
            <p className={`biggerText ${styles.yellowText}`}>I am a software engineer who is building his portfolio. 👨🏻‍💻</p>
            {/* local images are stored in public folder */}
            {/* regular <img/> tags work as well, if you cannot provide a width and height */}
            {/* using another hosting domain for images */}
        </div>
    )
}