import Head from 'next/head'

export default function Home() {
  return (
      <>
        <Head>
          <title>My Tailwind App</title>
          <meta name="description" content="A simple Next.js app with Tailwind CSS v3" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="p-8 max-w-md text-center bg-white rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
              Welcome to Tailwind CSS v3!
            </h1>
            <p className="text-gray-600">
              This is a clean Next.js + Tailwind starter page. Edit <code>pages/index.tsx</code> to get started.
            </p>
          </div>
        </main>
      </>
  )
}
