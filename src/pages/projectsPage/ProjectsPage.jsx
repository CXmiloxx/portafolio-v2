// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaPalette, FaBrain, FaGlobe, FaMobile } from 'react-icons/fa';
import personalFinances from '/personal-finances.png'
import Ingles from '/ingles.png'
import { useTranslation } from 'react-i18next';

export default function ProjectsPage({ projectsRef }) {
  const { t } = useTranslation()
  
  const projects = [
    {
      id: 1,
      title: t("projects.titles.1"),
      description: t("projects.description.1"),
      image: personalFinances,
      technologies: ["React", "Node.js", "MySQL"],
      github: "https://github.com",
      demo: "https://personal-finance-gpex.onrender.com",
      gradient: "from-gray-600 via-gray-700 to-gray-800",
      bgGradient: "from-gray-50 via-gray-50 to-gray-50",
      darkBgGradient: "from-gray-900/30 via-gray-900/30 to-gray-900/30",
      iconBg: "from-gray-600 to-gray-700",
      icon: FaCode,
      accentColor: "gray"
    },
    {
      id: 2,
      title: t("projects.titles.2"),
      description: t("projects.description.2"),
      image: "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
      technologies: ["React", "Node.js", "Firebase"],
      github: "https://github.com",
      demo: "https://worlds-shirts.onrender.com/",
      gradient: "from-gray-600 via-gray-700 to-gray-800",
      bgGradient: "from-gray-50 via-gray-50 to-gray-50",
      darkBgGradient: "from-gray-900/30 via-gray-900/30 to-gray-900/30",
      iconBg: "from-gray-600 to-gray-700",
      icon: FaRocket,
      accentColor: "gray"
    },
    {
      id: 3,
      title: t("projects.titles.3"),
      description: t("projects.description.3"),
      image: Ingles,
      technologies: ["React", "API Integration", "Audio"],
      github: "https://github.com",
      demo: "https://ingles.onrender.com",
      gradient: "from-gray-600 via-gray-700 to-gray-800",
      bgGradient: "from-gray-50 via-gray-50 to-gray-50",
      darkBgGradient: "from-gray-900/30 via-gray-900/30 to-gray-900/30",
      iconBg: "from-gray-600 to-gray-700",
      icon: FaBrain,
      accentColor: "gray"
    },
    {
      id: 4,
      title: t("projects.titles.4"),
      description: t("projects.description.4"),
      image: "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
      technologies: ["React", "NestJS", "Prisma"],
      github: "https://github.com",
      demo: "https://stockneticapp.onrender.com/",
      gradient: "from-gray-600 via-gray-700 to-gray-800",
      bgGradient: "from-gray-50 via-gray-50 to-gray-50",
      darkBgGradient: "from-gray-900/30 via-gray-900/30 to-gray-900/30",
      iconBg: "from-gray-600 to-gray-700",
      icon: FaGlobe,
      accentColor: "gray"
    },
  ];

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-24 px-6 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gray-300/20 dark:bg-gray-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gray-400/20 dark:bg-gray-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Enhanced decorative line */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <div className="w-32 h-2 bg-gray-600 dark:bg-gray-400 mx-auto rounded-full shadow-lg relative">
              <motion.div
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-white/50 dark:bg-gray-200/50 rounded-full"
              />
            </div>
          </motion.div>

          {/* Enhanced main title */}
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gradient-primary relative">
            {t("projects.title")}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.98, 1, 0.98]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 text-gradient-primary blur-sm"
            >
              {t("projects.title")}
            </motion.div>
          </h2>

          {/* Enhanced subtitle */}
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Advertencia sobre servidores gratuitos */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-3 bg-yellow-100 dark:bg-yellow-300/20 text-yellow-800 dark:text-yellow-200 px-6 py-3 rounded-xl shadow font-medium text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
            <span>{t("projects.serverWarning")}</span>
          </div>
        </div>
        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.03 }}
              className={`group relative overflow-hidden rounded-3xl shadow-glow transition-all duration-500 bg-gradient-to-br ${project.bgGradient} dark:${project.darkBgGradient} border border-gray-200/40 dark:border-gray-700/30 backdrop-blur-xl hover:border-gray-300/50 dark:hover:border-gray-600/50`}
            >
              {/* Enhanced floating particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 15, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full absolute top-8 right-8 blur-sm`}
                />
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -8, 0],
                    opacity: [0.1, 0.4, 0.1]
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
                  className={`p-3 rounded-2xl bg-gradient-to-br ${project.iconBg} shadow-glow text-white`}
                >
                  <project.icon size={20} />
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`}></div>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Enhanced overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                        className="p-3 bg-white/25 backdrop-blur-sm rounded-xl text-white hover:bg-white/35 transition-all duration-300 shadow-glow"
                      >
                        <FaGithub size={18} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-300 shadow-glow"
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
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
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
                      className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full shadow-glow`}
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
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 font-medium shadow-glow"
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
                    className={`flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-xl transition-all duration-300 font-medium shadow-glow`}
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
