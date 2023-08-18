import './globals.css'

export const metadata = {
  title: 'Readme Generator for GitHub',
  description: 'Craft effective and visually appealing GitHub READMEs.',
  image: '/Logo.png',
  url: 'https://githubread.me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Readme Generator for GitHub</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Craft effective and visually appealing GitHub READMEs."
        />
        <meta property="og:title" content="Readme Generator for GitHub" />
        <meta
          property="og:description"
          content="Craft effective and visually appealing GitHub READMEs."
        />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />
                <meta property="og:image:type" content="image/png" />
                <meta property="twitter:card" content="summary"/>
        <meta property="og:url" content="https://githubread.me" />
        <meta name="theme-color" content="#0E4644" />
        <meta name="msapplication-TileColor" content="#0E4644" />
      <script defer data-domain="githubread.me" src="https://stats.wouldyoubot.gg/js/script.js"></script>
        </head>
      <body>{children}</body>
    </html>
  )
}
