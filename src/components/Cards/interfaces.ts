export type ExperienceProps = {
  company: string
  date: string
  stack?: string
  bgColor: string
  job: string
  logo: string
}

export interface TechnologieProps {
  active?: boolean
  bgColor: string
  companies: string[]
  language: string
  logo: string
}

export interface EducationProps {
  animation: string
  diplomaName: string
  logo: string
  bgColor: string
  location: string
  onClick(): void
  date: string
}