// built in link component to link to routes
import Link from "next/link"
import styles from '@/styles/Navbar.module.css'

export default function Navbar(){
    return (
        <nav>
            <Link href="/" 
            style={{margin: "0 1rem 0 0"}}
            >Home</Link>
            <Link href="/about"
            style={{margin: "0 1rem 0 0"}}
            >About</Link>
            <Link href="/projects"
            >Projects</Link>
        </nav>
    )
}