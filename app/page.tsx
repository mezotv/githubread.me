
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Something awesome will be here soon!
        </h1>
        <p className="mt-3 text-2xl">
          This is a placeholder for the future home of <code>githubread.me</code>.
        </p>
        <p className="mt-3 text-2xl">
          <a
            className="text-blue-600 hover:underline"
            href="https://github.com/mezotv/githubread.me"
            target="_blank"
          >
            Follow us on Github
          </a>{' '}
          to get updates.
        </p>
      </div>
    </main>
  )
}
