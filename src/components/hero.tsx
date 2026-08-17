'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { data } from '../constants'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import {
  GithubIcon,
  MailIcon,
  GlobeIcon,
  CloudIcon,
  BotIcon,
  PenToolIcon,
  BrainIcon,
  TerminalIcon
} from 'lucide-react'

type TypingTextProps = {
  text: string
  speed?: number
  className?: string
}

const TypingText = ({
  text,
  speed = 80,
  className = ''
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let currentIndex = 0

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1))
      currentIndex++

      if (currentIndex === text.length) {
        clearInterval(interval)

        setTimeout(() => {
          setDisplayedText('')
          setCycle((prev) => prev + 1)
        }, 5000)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, cycle])

  return (
    <span className={clsx('font-mono', className)}>
      {displayedText}
      <span className="inline-block w-[0.5ch] -mb-0.5 h-[1em] bg-[#F0B429] ml-0.5 animate-pulse align-middle" />
    </span>
  )
}

export default TypingText

// Small reusable terminal window dots
const TrafficLights = () => (
  <div className="flex gap-1.5">
    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
  </div>
)

// Terminal command prompt
const Prompt = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#F0B429] dark:text-[#F5C158] tracking-tight">
    <span className="text-neutral-400 dark:text-neutral-600">$</span>
    <span>{children}</span>
  </div>
)

export function Hero() {
  const { avatar, about, links } = data

  const cleanParagraph = about.description
    .split('\n')
    .filter(Boolean)
    .map((line) => line.replace(/^[-•]\s*/, ''))
    .join(' ')

  const skillGroups = [
  {
    title: 'Cloud',
    skills: [
      'AWS',
      'Azure',
      'EC2',
      'EKS',
      'ECR',
      'S3',
      'RDS',
      'VPC',
      'IAM',
      'Lambda',
      'CloudWatch',
      'Secrets Manager',
      'SNS'
    ]
  },
  {
    title: 'CI/CD & GitOps',
    skills: [
      'Jenkins',
      'GitHub Actions',
      'GitLab CI',
      'Argo CD',
      'SonarQube',
      'Trivy',
      'OWASP Dependency Check'
    ]
  },
  {
    title: 'Containers & Orchestration',
    skills: [
      'Docker',
      'Kubernetes',
      'Helm',
      'HPA',
      'RBAC',
      'Ingress',
      'ConfigMaps',
      'Secrets',
      'Liveness Probes',
      'Readiness Probes'
    ]
  },
  {
    title: 'Infrastructure as Code',
    skills: [
      'Terraform',
      'Ansible',
      'Infrastructure Provisioning',
      'Configuration Management'
    ]
  },
  {
    title: 'Monitoring & Observability',
    skills: [
      'Prometheus',
      'Grafana',
      'Alertmanager',
      'ELK Stack',
      'CloudWatch',
      'Logging',
      'Metrics',
      'SLI/SLO'
    ]
  },
  {
    title: 'Security',
    skills: [
      'IAM',
      'RBAC',
      'Secrets Management',
      'Vulnerability Scanning',
      'Encryption',
      'Least Privilege',
      'DevSecOps'
    ]
  },
  {
    title: 'Linux & Scripting',
    skills: [
      'Linux',
      'Ubuntu',
      'RHEL',
      'Bash',
      'Python',
      'Boto3',
      'Shell Scripting',
      'YAML',
      'Groovy'
    ]
  },
  {
    title: 'Networking',
    skills: [
      'TCP/IP',
      'DNS',
      'HTTP/HTTPS',
      'Load Balancing',
      'VPC',
      'Routing',
      'Firewall',
      'VPN'
    ]
  },
  {
    title: 'Version Control',
    skills: [
      'Git',
      'GitHub',
      'GitLab'
    ]
  },
  {
    title: 'Architecture & SRE',
    skills: [
      'Microservices',
      'REST APIs',
      'Incident Management',
      'RCA',
      'ITSM',
      'Runbooks',
      'Production Support',
      'Disaster Recovery'
    ]
  },
  {
    title: 'Programming',
    skills: [
      'Python',
      'Java'
    ]
  }
]
  const stats = [
    { k: 'experience', v: '1+ yrs' },
    { k: 'projects', v: '10+' },
    { k: 'primary_cloud', v: 'AWS' }
  ]

  const services = [
    {
      icon: CloudIcon,
      title: 'cloud_devops',
      color: 'text-sky-500',
      items: [
        'Architecting scalable infrastructure',
        'AWS, Azure & Kubernetes'
      ]
    },
    {
      icon: BotIcon,
      title: 'automation',
      color: 'text-emerald-500',
      items: [
        'CI/CD pipelines',
        'Infrastructure as Code'
      ]
    },
    {
      icon: PenToolIcon,
      title: 'content',
      color: 'text-violet-500',
      items: [
        'Technical blogs',
        'DevOps tutorials',
        'Open-source projects'
      ]
    },
    {
      icon: BrainIcon,
      title: 'mlops',
      color: 'text-[#F0B429]',
      items: [
        'ML pipeline automation',
        'Model deployment & scaling',
        'Kubernetes for ML workloads'
      ]
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full py-8 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Faint datacenter grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-5 max-w-6xl mx-auto items-start">

        {/* =========================
            LEFT — PROFILE / NODE STATUS
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0B0E14] overflow-hidden"
        >
          {/* Window Chrome */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
            <TrafficLights />

            <span className="ml-1 text-[11px] font-mono text-neutral-500">
              profile — status
            </span>
          </div>

          <div className="p-6 space-y-6">

            {/* Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <Avatar className="size-28 sm:size-32 rounded-full ring-2 ring-[#F0B429]/40 ring-offset-2 ring-offset-white dark:ring-offset-[#0B0E14]">
                  <AvatarImage
                    alt={`${avatar.name} - Portfolio Avatar`}
                    src="/assets/avatar.png"
                    className="object-cover"
                  />

                  <AvatarFallback className="font-mono font-bold text-2xl">
                    {avatar.initials}
                  </AvatarFallback>
                </Avatar>

                <span className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-[#27C93F] border-2 border-white dark:border-[#0B0E14]" />
              </div>
            </div>

            {/* Name / Status */}
            <div className="text-center space-y-2">

              <div className="min-h-8 flex items-center justify-center">
                <TypingText
                  text="Vrushabh Chaudhari"
                  className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                status: available
              </div>

              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 pt-1">
                {about.title}
              </p>
            </div>

            {/* Stats */}
            <div className="rounded-md bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800 font-mono text-xs">
              {stats.map((stat) => (
                <div
                  key={stat.k}
                  className="flex items-center justify-between px-3 py-2"
                >
                  <span className="text-neutral-500 dark:text-neutral-500">
                    {stat.k}
                  </span>

                  <span className="text-neutral-900 dark:text-neutral-100 font-semibold">
                    {stat.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =========================
            RIGHT — TERMINAL PANEL
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="w-full min-w-0 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0B0E14] overflow-hidden"
        >
          {/* Window Chrome */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
            <TrafficLights />

            <div className="ml-1 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
              <TerminalIcon className="size-3" />
              ~/portfolio — zsh
            </div>
          </div>

          <div className="p-6 space-y-7">

            {/* =========================
                ABOUT
            ========================== */}
            <div className="space-y-2.5">
              <Prompt>
                <GlobeIcon className="inline size-3.5 -mt-0.5 mr-1" />
                cat about.md
              </Prompt>

              <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300 pl-4 border-l-2 border-neutral-200 dark:border-neutral-800">
                {cleanParagraph}
              </p>
            </div>

            {/* =========================
                SKILLS
            ========================== */}
            <div className="space-y-5">
  <Prompt>
    <GithubIcon className="inline size-3.5 -mt-0.5 mr-1" />
    ls ~/skills
  </Prompt>

  <div className="space-y-5 pl-4">
    {skillGroups.map((group, groupIndex) => (
      <motion.div
        key={group.title}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3 + groupIndex * 0.08,
          duration: 0.3
        }}
        className="space-y-2"
      >
        <div className="text-sm font-semibold font-mono text-neutral-900 dark:text-neutral-100">
          {group.title}:
        </div>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + groupIndex * 0.08 + index * 0.03,
                duration: 0.25
              }}
              className="px-2.5 py-1 rounded-md text-xs font-mono border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900/60"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</div>

            {/* =========================
                SERVICES
            ========================== */}
            
            {/* =========================
                CONNECT
            ========================== */}
            <div className="space-y-3">
              <Prompt>
                <MailIcon className="inline size-3.5 -mt-0.5 mr-1" />
                curl -X GET /connect
              </Prompt>

              <div className="flex flex-wrap gap-2.5 pl-4">
                {links.map((link) => (
                  <Button
                    key={link.title}
                    variant="outline"
                    size="sm"
                    className="rounded-md border-neutral-200 dark:border-neutral-800 hover:border-[#F0B429]/50 hover:bg-[#F0B429]/5 transition-colors"
                    asChild
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs"
                    >
                      <link.icon className="size-3.5" />
                      {link.title}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}