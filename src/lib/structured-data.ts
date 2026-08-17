interface StructuredDataProps {
  type: 'Person' | 'WebSite' | 'Organization'
  data: Record<string, unknown>
}

export function generateStructuredData({
  type,
  data
}: StructuredDataProps) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  }
}

export function getPersonSchema() {
  return generateStructuredData({
    type: 'Person',
    data: {
      name: 'Vrushabh Chaudhari',
      jobTitle: 'DevOps Engineer',
      url: 'https://your-domain.com',
      image: 'https://your-domain.com/avatar.png',
      email: 'vrushabhc200201@gmail.com',

      sameAs: [
        'https://github.com/Jimmyvrushabh',
        'https://www.linkedin.com/in/vrushabhc22/'
      ],

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      },

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Savitribai Phule Pune University'
      },

      worksFor: {
        '@type': 'Organization',
        name: 'SoftwareEra Technologies'
      },

      knowsAbout: [
        'DevOps',
        'Site Reliability Engineering',
        'AWS',
        'Amazon EKS',
        'Docker',
        'Kubernetes',
        'Helm',
        'Terraform',
        'Ansible',
        'Jenkins',
        'GitHub Actions',
        'GitOps',
        'Argo CD',
        'Linux',
        'Bash',
        'Prometheus',
        'Grafana',
        'CloudWatch',
        'ELK Stack',
        'CI/CD',
        'Infrastructure as Code',
        'Java',
        'Spring Boot',
        'Microservices'
      ]
    }
  })
}

export function getWebSiteSchema() {
  return generateStructuredData({
    type: 'WebSite',
    data: {
      name: 'Vrushabh Chaudhari Portfolio',
      url: 'https://your-domain.com',
      description:
        'DevOps Engineer specializing in AWS, Kubernetes, Docker, Terraform, CI/CD, GitOps, and Cloud Infrastructure.',

      publisher: {
        '@type': 'Person',
        name: 'Vrushabh Chaudhari'
      }
    }
  })
}

export function getOrganizationSchema() {
  return generateStructuredData({
    type: 'Organization',
    data: {
      name: 'Vrushabh Chaudhari Portfolio',
      url: 'https://your-domain.com',

      logo: 'https://your-domain.com/logo.svg',

      sameAs: [
        'https://github.com/Jimmyvrushabh',
        'https://linkedin.com/in/YOUR-LINKEDIN-USERNAME'
      ]
    }
  })
}