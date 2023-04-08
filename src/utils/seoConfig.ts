import { DefaultSeoProps } from 'next-seo'

export const SITE_DESC =
  'Sign up the waiting list to access your recent created AI chatbot app, and use it for your B2B,B2C or personal needs。'
export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
  title: 'Botcraft Studio - Create Ai Agents in seconds',
  titleTemplate: '%s | OpenGPT',
  defaultTitle: 'Botcraft Studio - Create Ai Agents in seconds',
  description: SITE_DESC,
  openGraph: {
    images: [
      {
        url: 'https://open-gpt-app.vercel.app/og-image.png',
        alt: 'Og Image Alt',
      },
    ],
    type: 'website',
    locale: 'en_IE',
    url: 'https://open-gpt.app/',
    siteName: 'OpenGPT',
  },
  twitter: {
    handle: '@EclipsePrayer',
    site: 'https://open-gpt.app/',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.png',
    },
  ],
}
