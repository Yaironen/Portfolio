import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/types/database'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <Image
          src={project.cover_image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </Link>
  )
}
