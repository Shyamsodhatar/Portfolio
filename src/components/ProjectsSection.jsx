import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Job Portal",
    description:
      "Job portal application built with React, Node.js, Express, and MongoDB for job posting and candidate applications.",
    image: "/projects/project1_ss.jpg",
    tags: ["React", "NodeJs", "MongoDB", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/Shyamsodhatar/ZidioDevelopmentJobPortal",
  },
  {
    id: 2,
    title: "Real Time Chat App",
    description:
      "Real-time chat application built with Django and WebSockets, supporting live messaging and user interaction.",

    image: "/projects/project2_ss.jpg",
    tags: ["WebSockets", "Django", "Jinja Templates"],
    demoUrl: "#",
    githubUrl: "https://github.com/Shyamsodhatar/CodeClauseInternship_RealTimeChatapp",
  },
  {
    id: 3,
    title: "URL Shortner",
    description:
      "Desktop URL shortener built with Python and Tkinter using PyShorteners for generating short links.",
    image: "/projects/project3_ss.jpg",
    tags: ["Python", "Tkinter", "Py-Shortners"],
    demoUrl: "#",
    githubUrl: "https://github.com/Shyamsodhatar/CodeClauseInternship_UrlShorter",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 bg-muted flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>


              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => {
                    const isLong = tag.length > 7;
                    const text = isLong ? `${tag.slice(0, 7)}…` : tag;

                    return (
                      <span
                        key={tag}
                        title={isLong ? tag : undefined}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {text}
                      </span>
                    );
                  })}
                </div>


                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Shyamsodhatar">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
