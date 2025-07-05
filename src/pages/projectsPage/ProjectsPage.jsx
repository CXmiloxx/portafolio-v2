import { t } from 'i18next'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';
import personalFinances from '/personal-finances.png'
import Ingles from '/ingles.png'

export default function ProjectsPage({ projectsRef }) {
  const projects = [
    {
      id: 1,
      title: t("projects.titles.1"),
      description: t("projects.description.1"),
      image: personalFinances,
      technologies: ["React", "Node.js", "MySQL"],
      github: "https://github.com",
      demo: "https://personal-finance-gpex.onrender.com",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      bgGradient: "from-cyan-50 to-blue-50",
      darkBgGradient: "from-cyan-900/20 to-blue-900/20",
      iconBg: "from-cyan-400 to-blue-500",
      icon: FaCode
    },
    {
      id: 2,
      title: t("projects.titles.2"),
      description: t("projects.description.2"),
      image: "https://via.placeholder.com/300",
      technologies: ["React", "Node.js", "Firebase"],
      github: "https://github.com",
      demo: "https://worlds-shirts.onrender.com/",
      gradient: "from-indigo-400 via-purple-500 to-pink-600",
      bgGradient: "from-indigo-50 to-purple-50",
      darkBgGradient: "from-indigo-900/20 to-purple-900/20",
      iconBg: "from-indigo-400 to-purple-500",
      icon: FaRocket
    },
    {
      id: 3,
      title: t("projects.titles.3"),
      description: t("projects.description.3"),
      image: Ingles,
      technologies: ["React", "API Integration", "Audio"],
      github: "https://github.com",
      demo: "https://ingles.onrender.com",
      gradient: "from-sky-400 via-blue-500 to-indigo-600",
      bgGradient: "from-blue-500 to-blue-700",
      darkBgGradient: "from-sky-900/20 to-blue-900/20",
      iconBg: "from-sky-400 to-blue-500",
      icon: FaCode
    },
    {
      id: 4,
      title: t("projects.titles.4"),
      description: t("projects.description.4"),
      image: "https://via.placeholder.com/300",
      technologies: ["React", "NestJS", "Prisma"],
      github: "https://github.com",
      demo: "https://stockneticapp.onrender.com/",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      bgGradient: "from-emerald-50 to-teal-50",
      darkBgGradient: "from-emerald-900/20 to-teal-900/20",
      iconBg: "from-emerald-400 to-teal-500",
      icon: FaRocket
    },
  ];

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full shadow-lg"></div>
          </motion.div>

          {/* Main title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-700 bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-3xl bg-gradient-to-br ${project.bgGradient} dark:${project.darkBgGradient} border border-white/20 dark:border-gray-700/30 backdrop-blur-xl`}
            >
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full absolute top-8 right-8 blur-sm`}
                />
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -8, 0],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                  className={`w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full absolute bottom-6 left-6 blur-sm`}
                />
              </div>

              {/* Project Icon */}
              <div className="absolute top-6 left-6 z-20">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 rounded-2xl bg-gradient-to-br ${project.iconBg} shadow-xl text-white`}
                >
                  <project.icon size={20} />
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Enhanced overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
                      >
                        <FaGithub size={18} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
                      >
                        <FaExternalLinkAlt size={18} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                      className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full shadow-sm`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 font-medium shadow-lg"
                  >
                    <FaGithub size={18} />
                    {t("projects.code")}
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-xl transition-all duration-300 font-medium shadow-lg`}
                  >
                    <FaExternalLinkAlt size={18} />
                    {t("projects.viewDemo")}
                  </motion.a>
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
