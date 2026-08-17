'use client'

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import {
  CalendarIcon,
  GraduationCapIcon,
  MapPinIcon,
  AwardIcon
} from 'lucide-react'

export interface EducationProps {
  institution: string
  university: string
  degree: string
  start: string
  end: string
  location: string
  grade: string
}

export function EducationItem({
  institution,
  university,
  degree,
  start,
  end,
  location,
  grade
}: EducationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative ps-0 sm:ps-8 pb-0 last:pb-0 group"
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="hidden sm:block absolute size-4 rounded-full bg-gradient-to-tr from-primary to-primary/70 ring-4 ring-primary/20 mt-3 -start-[9px] border-2 border-white dark:border-neutral-950 group-hover:ring-6 group-hover:ring-primary/30 transition-all duration-300"
      />

      {/* Education Card */}
      <div className="border-0 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden relative">
        
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500" />

        {/* Header */}
        <div className="flex flex-col space-y-3 p-6 pb-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between">

            {/* Institution */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCapIcon className="size-5 text-primary" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {institution}
                </h3>

                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <MapPinIcon className="size-4" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            {/* Education Badge */}
            <Badge
              variant="secondary"
              className="w-fit rounded-full bg-primary/10 text-primary font-semibold px-3 py-1.5 text-xs border border-primary/20"
            >
              Education
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-4 p-6 pt-0">

          {/* Degree */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <GraduationCapIcon className="size-4 text-blue-500" />
                </div>

                <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {degree}
                </h4>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-primary/90">
                <CalendarIcon className="size-3" />
                <span>
                  {start} — {end}
                </span>
              </div>
            </div>

            {/* University */}
            <div className="flex items-start gap-2 pl-0 sm:pl-8">
              <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                <AwardIcon className="size-3.5 text-purple-500" />
              </div>

              <div>
                <p className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {university}
                </p>

                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {grade}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}