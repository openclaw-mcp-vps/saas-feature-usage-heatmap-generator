import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HeatMap SaaS — Visualize Which Features Customers Actually Use',
  description: 'Connect to Mixpanel, Amplitude, or PostHog and generate interactive heatmaps showing feature adoption, user flows, and unused functionality.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cdc2b22e-9dd1-4a66-8361-0d4bd73448ea"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
