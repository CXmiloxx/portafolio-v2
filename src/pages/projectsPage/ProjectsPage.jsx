import { t } from 'i18next'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import personalFinances from '/personal-finances.png'
import Ingles from '/ingles.png'

export default function ProjectsPage({ projectsRef }) {
  const projects = [
    {
      id: 1,
      title: "Personal Finances",
      description: t("projects.description.1"),
      image: personalFinances,
      technologies: ["React", "Node.js", "MySQL"],
      github: "https://github.com",
      demo: "https://personal-finance-gpex.onrender.com"
    },
    {
      id: 2,
      title: "Liga Merchs",
      description: t("projects.description.2"),
      image: "https://via.placeholder.com/300",
      technologies: ["React", "node", "FiraBase"],
      github: "https://github.com",
      demo: "https://worlds-shirts.onrender.com/"
    },
    {
      id: 3,
      title: "Traductor a Ingles",
      description: t("projects.description.3"),
      image: Ingles,
      technologies: ["React"],
      github: "https://github.com",
      demo: "https://ingles.onrender.com"
    }
  ];

  return (
    <section ref={projectsRef} id="projects" className="py-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-blue-300">
            {t("projects.title", "Mis Proyectos")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      {t("projects.viewDemo", "Ver Demo")}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
