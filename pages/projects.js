import myProjects from "@/projectData"
import styles from "@/styles/Navbar.module.css"

export default function Projects() {

    const projectList = myProjects.map((project, i) => {
        return(
        <>
            <a href={project.link}><h3>{project.name}</h3></a>
            <p>{project.description}</p>
        </>
        )
    })
            return(
            <>
                <h2>Projects</h2>
                {projectList}
            </>
            )
}