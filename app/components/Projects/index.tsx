import ProjectList from '@/app/data/projects.json'
import ProjectCard from '../ProjectCard'

export default function Projects () {
  return (
    <section>
      <div className='cards-wrapper'>
        {ProjectList.map((project, index) => {
          return <ProjectCard key={index} project={project} />
        })}
      </div>
    </section>
  )
}