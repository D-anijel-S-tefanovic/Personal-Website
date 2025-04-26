import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects - My Personal Website</title>
        <meta name="description" content="Showcasing my projects with titles, tech stack, GitHub links, and live demos" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Project 1"
            techStack="React, Node.js, MongoDB"
            githubLink="https://github.com/username/project1"
            liveDemo="https://project1-demo.com"
          />
          <ProjectCard
            title="Project 2"
            techStack="Python, Flask, PostgreSQL"
            githubLink="https://github.com/username/project2"
            liveDemo="https://project2-demo.com"
          />
          <ProjectCard
            title="Project 3"
            techStack="Next.js, Tailwind CSS, Vercel"
            githubLink="https://github.com/username/project3"
            liveDemo="https://project3-demo.com"
          />
        </div>
      </main>
    </div>
  );
}
