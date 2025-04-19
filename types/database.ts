export type Project = {
  id: string
  created_at: string
  title: string
  slug: string
  description: string
  content: string
  cover_image: string
  images: string[]
  tags: string[]
  published: boolean
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: Project
        Insert: Omit<Project, 'id' | 'created_at'>
        Update: Partial<Omit<Project, 'id' | 'created_at'>>
      }
    }
  }
}
