import myProjects from "@/projectData"
import styles from "@/styles/Projects.module.css"

export default function Projects() {

    const projectList = myProjects.map((project, i) => {
        const techs = project.tools.map((tech, i) => {
            return(
                <p key={`tech-key-${i}`} className={`${styles.technologies}`}>{tech}</p>
            )
        })
        return(
        <div className={`${styles.column}`} key={`key=${i}`}>
            <a href={project.link} target="_blank"><h3 className={`${styles.projectHeader}`}>{project.name}</h3></a>
            <div className={`${styles.techContainer}`}>
            {techs}
            </div>
            <p className={`${styles.projectDescription}`}>{project.description}</p>
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