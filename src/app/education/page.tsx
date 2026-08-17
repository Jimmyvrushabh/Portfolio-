import { Section } from '@/components/ui/section'
import { EducationItem } from '@/components/education-item'
import { EDUCATION } from '@/data'

export default function EducationPage() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <Section
        id="education"
        className="pb-24 w-full px-4 md:px-0"
      >
        <div className="w-full space-y-6">
          {EDUCATION.map((education, index) => (
            <EducationItem
              key={index}
              institution={education.institution}
              university={education.university}
              degree={education.degree}
              start={education.start}
              end={education.end}
              location={education.location}
              grade={education.grade}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}