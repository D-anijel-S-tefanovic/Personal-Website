import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-secondary text-white">
      <div className="flex space-x-4">
        <Link href="https://github.com/yourusername">
          <a target="_blank" rel="noopener noreferrer">GitHub</a>
        </Link>
        <Link href="https://linkedin.com/in/yourusername">
          <a target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Link>
      </div>
      <div>
        <a href="/resume.pdf" download>
          <button className="bg-primary text-white p-2 rounded">Download Resume</button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
