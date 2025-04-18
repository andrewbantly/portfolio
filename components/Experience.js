import myExperience from "@/experienceData"
import styles from "@/styles/Projects.module.css"

export default function Experience() {

    const experienceList = myExperience.map((project, i) => {
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
                <ul className={`${styles.experienceDescription}`}>
                    {
                        project.description.map((item, index) => (
                            <li 
                             className={`${styles.bodyCopy}`}
                            key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    })
    return (
        <div>
            <h2>Experience</h2>
            {experienceList}
        </div>
    )
}