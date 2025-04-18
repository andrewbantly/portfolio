import myProjects from "@/projectData"
import styles from "@/styles/Projects.module.css"

export default function Projects() {

    const projectList = myProjects.map((project, i) => {
        const techs = project.tools.map((tech, i) => {
            return (
                <p key={`tech-key-${i}`} className={`${styles.technologies}`}>{tech}</p>
            )
        })
        return (
            <div className={`${styles.column}`} key={`key=${i}`}>
                {
                    project.active ?
                        <a href={project.link} target="_blank"><h3 className={`${styles.projectHeader}`}>{project.name}</h3></a>
                        :
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <h3 className={`${styles.projectHeaderRetired}`}>{project.name}</h3>
                            <p className={`${styles.retired}`}>({project.deactivateDescription})</p>
                        </div>
                }
                <div className={`${styles.techContainer}`}>
                    {techs}
                </div>
                <p className={`${styles.projectDescription} ${styles.bodyCopy}`}>{project.description}</p>
            </div>
        )
    })
    return (
        <div>
            <h2>Projects</h2>
            {projectList}
        </div>
    )
}