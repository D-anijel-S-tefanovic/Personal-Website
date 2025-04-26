import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Personal Website</title>
        <meta name="description" content="I build scalable APIs with Python & AWS" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Welcome to My Personal Website</h1>
        <p className="mt-4 text-xl">I build scalable APIs with Python & AWS</p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Placeholder Content</h2>
          <p className="mt-2 text-lg">This is where the main content of the Home page will go.</p>
        </div>
      </main>
    </div>
  );
}
