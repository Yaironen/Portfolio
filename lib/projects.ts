import { supabase } from './supabase/client'
import type { Project } from '@/types/database'

export async function getProjects() {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }

  return projects
}

export async function getProjectBySlug(slug: string) {
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    console.error('Error fetching project:', error)
    return null
  }

  return project
}
