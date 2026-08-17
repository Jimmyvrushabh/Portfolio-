import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { TelegramIcon } from '@/components/icons/telegram'
import { GitHubActionsIcon } from '@/components/icons/tags/githubActions'
import { ZomatoIcon } from '@/components/icons/tags/zomato'
import { UberIcon } from '@/components/icons/tags/uber'
import { PrometheusIcon } from '@/components/icons/tags/prometheus'
import { AWSEKSIcon } from '@/components/icons/tags/awsEKS'
import { LinuxIcon } from '@/components/icons/tags/linux'
import { JenkinsIcon } from '@/components/icons/tags/jenkins'
import { KubernetesIcon } from '@/components/icons/tags/kubernetes'
import { DockerIcon } from '@/components/icons/tags/docker'
import { AzureIcon } from '@/components/icons/tags/azure'
import { AWSIcon } from '@/components/icons/tags/aws'
import { TerraformIcon } from '@/components/icons/tags/terraform'
import { AnsibleIcon } from '@/components/icons/tags/ansible'
import { AzureDevOpsIcon } from '@/components/icons/tags/azureDevOps'
import { DevOpsIcon } from '@/components/icons/tags/devops'
import { FileTextIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Vrushabh Chaudhari',
  initials: 'VC'
}

export const ABOUT = {
  title:
    'DevOps Engineer | AWS | Kubernetes | Docker | Terraform | Jenkins | GitHub Actions | Linux | CI/CD | Pune, India 🇮🇳',
  description: `I'm a DevOps Engineer with 1 years of experience specializing in cloud infrastructure, CI/CD automation, Infrastructure as Code, container orchestration, and monitoring. I build production-ready DevOps projects using AWS, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, Helm, Prometheus, Grafana, and Ansible. I enjoy designing scalable cloud architectures, automating deployments, improving system reliability, and implementing DevSecOps best practices. Currently expanding my expertise in Site Reliability Engineering (SRE), Kubernetes production environments, GitOps, and cloud-native technologies.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/Jimmyvrushabh',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vrushabhc22/',
    icon: LinkedInIcon
  },
  {
    title: 'Resume',
    url: 'https://drive.google.com/drive/folders/1pzQ49nrKDXxH5yDDdvWpN9G2fx8389Uo?usp=sharing',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:vrushabhc200201@gmail.com',
    icon: MailIcon
  }
]

export const CAREER = [
  {
    company: 'SoftwareEra Technologies',
    link: '',
    badges: ['On-site'],
    jobs: [
      {
        title: 'DevOps Engineer',
        start: 'Jun, 2025',
        end: 'Jun, 2026',
        description: [
          'Built and managed CI/CD pipelines using Jenkins and GitHub Actions for Java and microservices-based applications, reducing deployment time by 40% through optimized stage parallelism, caching, and artifact management.',
          'Containerized applications using Docker and deployed production workloads on Kubernetes clusters with Helm-based deployments, HPA auto-scaling, and readiness/liveness probes, achieving high availability across all services.',
          'Provisioned and managed AWS infrastructure including EC2, EKS, IAM, VPC, S3, and CloudWatch using Terraform and IaC best practices, enabling repeatable one-command environment setup and teardown across all deployment stages.',
          'Implemented full observability stack with Prometheus, Grafana, and Alertmanager, improving infrastructure visibility, establishing SLO/SLI monitoring baselines, and reducing mean time to resolution (MTTR) for production incidents.',
          'Automated server configuration and deployment workflows using Ansible playbooks and Bash scripting across Linux environments; integrated SonarQube code quality gates and Nexus artifact management into the CI pipeline.',
          'Collaborated with development and QA teams to troubleshoot production issues, perform root cause analysis, and ensure reliable releases; maintained detailed runbooks, deployment guides, and incident post-mortem documentation.'
        ]
      },
      {
        title: 'Junior DevOps Engineer (Intern)',
        start: 'Jan, 2025',
        end: 'Jun,2025',
        description: [
          'Designed and maintained automated CI/CD pipelines for Java and Node.js microservices using Jenkins and GitHub Actions, enabling reliable zero-downtime deployments across development, staging, and production environments.',
          'Managed AWS cloud infrastructure (EC2, S3, VPC, IAM, EKS, Secrets Manager) across 3 environments; enforced least-privilege IAM policies, security group rules, and encryption standards aligned with SRE and production reliability principles.',
          'Configured Prometheus and Grafana dashboards to monitor application health metrics, latency, and error rates across microservices; participated in incident response and RCA, reducing repeat incidents by 20%.',
          'Automated infrastructure provisioning and configuration management using Terraform (IaC) and Ansible playbooks across 20+ VMs; developed reusable Helm chart templates, reducing build failures by 30% and average build time by 25%.',
          'Contributed to build and deployment optimization by parallelizing pipeline stages and implementing automated rollback on probe failure; documented all pipeline configurations and SOPs for the engineering team.'
        ]
      }
    ]
  }
]

export const EDUCATION = [
  {
    institution: 'Suman Ramesh Tulsiani Technical Campus',
    university: 'Savitribai Phule Pune University',
    degree: 'Bachelor of Engineering (B.E.) in Computer Science',
    start: '2020',
    end: '2024',
    location: 'Pune, India',
    grade: 'CGPA: 7.45',
  },
  {
    institution: 'North Point School',
    university: 'ICSE',
    degree: '10th',
    start: '2017',
    end: '2018',
    location: 'Dhule, India',
    grade: 'Percentage: 74%',
  },
  {
    institution: 'Ghogrey Science College, Dhule',
    university: 'Higher Secondary Certificate (HSC)',
    degree: '12th',
    start: '2019',
    end: '2020',
    location: 'Dhule, India',
    grade: 'Percentage: 82%',
  },
]

const TAGS = {
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon
  },
  GITHUB_ACTIONS: {
    name: 'GitHub Actions',
    icon: GitHubActionsIcon
  },
  ZOMATO: {
    name: 'Zomato',
    icon: ZomatoIcon
  },
  UBER: {
    name: 'Uber',
    icon: UberIcon
  },
  PROMETHEUS: {
    name: 'Prometheus',
    icon: PrometheusIcon
  },
  AWS_EKS: {
    name: 'AWS EKS',
    icon: AWSEKSIcon
  },
  LINUX: {
    name: 'Linux',
    icon: LinuxIcon
  },
  JENKINS: {
    name: 'Jenkins',
    icon: JenkinsIcon
  },
  KUBERNETES: {
    name: 'Kubernetes',
    icon: KubernetesIcon
  },
  DOCKER: {
    name: 'Docker',
    icon: DockerIcon
  },
  AZURE: {
    name: 'Azure',
    icon: AzureIcon
  },
  AWS: {
    name: 'AWS',
    icon: AWSIcon
  },
  TERRAFORM: {
    name: 'Terraform',
    icon: TerraformIcon
  },
  ANSIBLE: {
    name: 'Ansible',
    icon: AnsibleIcon
  },
  AZURE_DEVOPS: {
    name: 'Azure DevOps',
    icon: AzureDevOpsIcon
  },
  DEVOPS: {
    name: 'DevOps',
    icon: DevOpsIcon
  }
}

export const PROJECTS = [
  {
    title: 'Production-Grade CI/CD Pipeline & EKS Deployment on AWS',
    tags: [
      TAGS.AWS,
      TAGS.AWS_EKS,
      TAGS.TERRAFORM,
      TAGS.DOCKER,
      TAGS.KUBERNETES,
      TAGS.JENKINS,
      TAGS.GITHUB_ACTIONS,
      TAGS.DEVOPS
    ],
    description:
      'End-to-end GitOps CI/CD pipeline (Argo CD) for building, vulnerability-scanning, containerizing, and deploying microservices to Amazon EKS, with RBAC, namespace isolation, HPA auto-scaling, automated rollback, and blue-green deployments.',
    link: {
      github: 'https://github.com/Jimmyvrushabh'
    }
  },
  {
    title: 'Kubernetes Microservices Deployment with Full Observability Stack',
    tags: [
      TAGS.KUBERNETES,
      TAGS.DOCKER,
      TAGS.PROMETHEUS,
      TAGS.DEVOPS
    ],
    description:
      'An 8-service microservices architecture on Kubernetes with Helm-templated releases, full Prometheus/Grafana/Alertmanager observability, ELK-based centralized logging, and HPA/RBAC/probe hardening that improved cluster resource utilization by 35%.',
    link: {
      github: 'https://github.com/Jimmyvrushabh'
    }
  },
  {
    title: 'AWS Serverless Notification Pipeline with Lambda, S3 & SNS',
    tags: [
      TAGS.AWS,
      TAGS.TERRAFORM,
      TAGS.GITHUB_ACTIONS,
      TAGS.DEVOPS
    ],
    description:
      'Event-driven serverless pipeline where S3 uploads trigger a Python (Boto3) Lambda to validate payloads and publish multi-channel SNS notifications, with GitHub Actions CI/CD, CloudWatch observability, and DLQ-based zero message loss.',
    link: {
      github: 'https://github.com/Jimmyvrushabh'
    }
  }
]