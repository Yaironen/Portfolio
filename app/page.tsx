import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/lib/projects'

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Designer & Creator
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Crafting beautiful digital experiences through thoughtful design and creative solutions.
          </p>
          <Link 
            href="#projects" 
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="group">
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
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
