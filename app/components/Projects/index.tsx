import ProjectList from '@/app/data/projects.json'
import ProjectCard from './ProjectCard'

export default function Projects () {
  return (
    <section>
      <h2 className='section-title'>Selected Projects</h2>
      <div className='cards-wrapper'>
        {ProjectList.map((project, index) => {
          return <ProjectCard key={index} project={project} />
        })}
      </div>
    </section>
  )
}