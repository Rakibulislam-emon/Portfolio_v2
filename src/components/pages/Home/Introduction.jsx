import { Typewriter } from "react-simple-typewriter";
import Button from "../../common/Button";
import { Link } from "react-router";

export default function Introduction() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rakibul_Islam_Emon_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="lg:w-1/2 flex  items-center justify-center p-8 lg:p-16">
      <div className="max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-text">
          <span className="text-heading">
            <Typewriter
              words={['MERN Stack', 'Frontend', 'React']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>{' '}
          Developer
        </h1>
        <p className="text-xl text-text mb-8 leading-relaxed">
          I craft responsive, high-performance web applications with clean code
          and exceptional user experiences.
        </p>

        <div className="flex gap-4">
          <Button onClick={handleDownloadResume}>Download Resume</Button>
          <Link to="/contact"><Button>Get In Touch</Button></Link>
        </div>
      </div>
    </div>
  );
}
