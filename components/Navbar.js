// built in link component to link to routes
// to reapply the nav bar, uncomment the navbar.js and <Navbar> in '_document.js'
import Link from "next/link"

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