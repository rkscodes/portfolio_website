import type { Project } from '~/types'

export let projectsData: Project[] = [
  // {
  //   type: 'work',
  //   title: 'Weaverse - Universal website builder',
  //   description: `The first Hydrogen-driven website builder powered by AI. Weaverse is a Shopify sales channel that allows you to create a website in minutes with no coding required.`,
  //   imgSrc: '/static/images/weaverse-hydrogen.jpg',
  //   url: 'https://www.weaverse.io?ref=leohuynh.dev',
  //   builtWith: ['Remix', 'Prisma', 'Tailwind', 'OpenAI'],
  // },
  {
    type: 'self',
    title: 'Incidence Intelligence',
    imgSrc: '/static/images/incident_intelligence.png',
    repo: 'incident_intelligence',
    builtWith: ['Terraform', 'Prefect', 'DBT', 'Google Cloud', 'Bigquery', 'Looker Studio'],
  },
]
