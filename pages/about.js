import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Short bio and career highlights" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-xl">This is a short bio about myself. I am a passionate developer with experience in building scalable applications and working with various technologies.</p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Career Highlights</h2>
          <ul className="mt-2 text-lg">
            <li>Developed a high-traffic e-commerce platform using Next.js and Tailwind CSS</li>
            <li>Implemented a real-time chat application with WebSocket and Node.js</li>
            <li>Contributed to open-source projects on GitHub</li>
            <li>Worked with cross-functional teams to deliver high-quality software solutions</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
