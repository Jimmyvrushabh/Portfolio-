import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Vrushabh Chaudhari | DevOps Engineer',
    template: '%s | Vrushabh Chaudhari'
  },

  description:
    'Portfolio of Vrushabh Chaudhari, a DevOps Engineer specializing in AWS, Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, Linux, CI/CD, and Cloud Infrastructure.',

  keywords: [
    'Vrushabh Chaudhari',
    'DevOps Engineer',
    'AWS',
    'Amazon EKS',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Ansible',
    'Jenkins',
    'GitHub Actions',
    'Helm',
    'Argo CD',
    'Prometheus',
    'Grafana',
    'Cloud Engineer',
    'Site Reliability Engineer',
    'Linux',
    'CI/CD',
    'Infrastructure as Code',
    'Portfolio'
  ],

  authors: [
    {
      name: 'Vrushabh Chaudhari',
      url: 'https://YOUR_DOMAIN'
    }
  ],

  creator: 'Vrushabh Chaudhari',

  publisher: 'Vrushabh Chaudhari',

  metadataBase: new URL('https://YOUR_DOMAIN'),

  alternates: {
    canonical: '/'
  },

  formatDetection: {
    email: false,
    telephone: false,
    address: false
  },

  openGraph: {
    title: 'Vrushabh Chaudhari | DevOps Engineer',

    description:
      'Explore the portfolio of Vrushabh Chaudhari featuring production-grade DevOps, Kubernetes, AWS, Terraform, CI/CD, GitOps, and Cloud projects.',

    url: 'https://YOUR_DOMAIN',

    siteName: 'Vrushabh Chaudhari Portfolio',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Vrushabh Chaudhari Portfolio'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Vrushabh Chaudhari | DevOps Engineer',

    description:
      'Production-grade DevOps, AWS, Kubernetes, Terraform, Docker, CI/CD and Cloud Engineering Portfolio.',

    images: ['/opengraph-image.png']
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
}