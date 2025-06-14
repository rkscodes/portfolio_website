import Script from 'next/script'
import { siteMetadata } from '~/data/siteMetadata'

export function UmamiScript() {
  return (
    <Script
      async
      data-website-id={siteMetadata.analytics.umamiWebsiteId}
      src="https://www.analytics.rkscodes.com/script.js"
    />
  )
}
