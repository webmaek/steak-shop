import { Head, Html, Main, NextScript } from "next/document";

const themeScript = `
  let mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
  function updateTheme(savedTheme) {
    let theme = 'system'
    try {
      if (!savedTheme) {
        savedTheme = window.localStorage.theme
      }
      if (savedTheme === 'dark') {
        theme = 'dark'
        document.documentElement.classList.add('dark')
      } else if (savedTheme === 'light') {
        theme = 'light'
        document.documentElement.classList.remove('dark')
      } else if (mediaQuery.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch {
      theme = 'light'
      document.documentElement.classList.remove('dark')
    }
    return theme
  }
  function updateThemeWithoutTransitions(savedTheme) {
    updateTheme(savedTheme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }
  document.documentElement.setAttribute('data-theme', updateTheme())
  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })
  mediaQuery.addEventListener('change', updateThemeWithoutTransitions)
  window.addEventListener('storage', updateThemeWithoutTransitions)
`;

export default function Document() {
  return (
    <Html
      className="antialiased [font-feature-settings:'ss01'] h-full"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body className="bg-gray-50 dark:bg-neutral-900 dark:text-white h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
