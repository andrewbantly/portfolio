import myProjects from "@/projectData"
import styles from "@/styles/Navbar.module.css"

export default function Projects() {

    const projectList = myProjects.map((project, i) => {
        return(
        <div className={`${styles.column}`}>
            <a href={project.link}><h3>{project.name}</h3></a>
            <p>{project.description}</p>
        </div>
        )
    })
            return(
            <div className={`${styles.container}`}>
                <h2>Projects</h2>
                {projectList}
            </div>
            )
}