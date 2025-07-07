import { t } from 'i18next'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer, FaDesktop, FaDownload } from 'react-icons/fa';

const skills = [
  {
    name: "Frontend",
    icon: <FaDesktop className="text-6xl mb-4 text-white" />,
    items: ["React", "NextJs", "Tailwind", "HTML/CSS", "JavaScript", "TypeScript"],
    gradient: "from-gray-400 via-gray-500 to-gray-600",
    bgGradient: "from-gray-50 via-gray-50 to-gray-50",
    darkBgGradient: "from-gray-900/30 via-gray-900/30 to-gray-900/30",
    iconBg: "from-gray-400 via-gray-500 to-gray-600"
  },
  {
    name: "Backend",
    icon: <FaServer className="text-6xl mb-4 text-white" />,
    items: ["Node.js", "Express", "PHP", "NestJs", "Java"],
    gradient: "from-gray-400 via-gray-500 to-gray-600",
    bgGradient: "from-gray-50 via-gray-50 to-gray-50",
    darkBgGradient: "from-gray-900/30 via-gray-900/30 to-gray-900/30",
    iconBg: "from-gray-400 via-gray-500 to-gray-600"
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-6xl mb-4 text-white" />,
    items: ["MySQL", "Firebase", "Prisma"],
    gradient: "from-gray-400 via-gray-500 to-gray-600",
    bgGradient: "from-gray-50 via-gray-50 to-gray-50",
    darkBgGradient: "from-gray-900/30 via-gray-900/30 to-gray-900/30",
    iconBg: "from-gray-400 via-gray-500 to-gray-600"
  },
  {
    name: "Herramientas",
    icon: <FaCode className="text-6xl mb-4 text-white" />,
    items: ["Git", "GitHub", "Docker", "VsCode"],
    gradient: "from-gray-400 via-gray-500 to-gray-600",
    bgGradient: "from-gray-50 via-gray-50 to-gray-50",
    darkBgGradient: "from-gray-900/30 via-gray-900/30 to-gray-900/30",
    iconBg: "from-gray-400 via-gray-500 to-gray-600"
  }
];

export default function SkillsPage({ skillsRef }) {
  return (
    <section ref={skillsRef} id="skills" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
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
          className="absolute top-20 right-10 w-32 h-32 bg-gray-300/20 dark:bg-gray-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-40 h-40 bg-gray-400/20 dark:bg-gray-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-1.5 bg-gray-600 dark:bg-gray-400 mx-auto rounded-full shadow-lg"></div>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gradient-primary relative">
              {t("skills.title")}
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
                {t("skills.title")}
              </motion.div>
            </h2>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tecnologías y herramientas que utilizo para crear experiencias digitales excepcionales
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.05, rotateY: 5 }}
                className={`relative overflow-hidden rounded-3xl p-10 shadow-glow transition-all duration-500 bg-gradient-to-br ${skill.bgGradient} dark:${skill.darkBgGradient} border border-gray-200/20 dark:border-gray-700/30 backdrop-blur-xl group`}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{
                      x: [0, 100, 0],
                      y: [0, -50, 0],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className={`w-2 h-2 bg-gradient-to-r ${skill.gradient} rounded-full absolute top-4 right-4 blur-sm`}
                  />
                  <motion.div
                    animate={{
                      x: [0, -80, 0],
                      y: [0, 60, 0],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                    className={`w-1 h-1 bg-gradient-to-r ${skill.gradient} rounded-full absolute bottom-6 left-6 blur-sm`}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center mb-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-6 rounded-3xl bg-gradient-to-br ${skill.iconBg} shadow-glow mb-6 group-hover:shadow-3xl transition-all duration-500`}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                      {skill.name}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {skill.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: (index * 0.15) + (idx * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="flex items-center text-gray-700 dark:text-gray-200 font-semibold group/item"
                      >
                        <div className={`w-4 h-4 bg-gradient-to-r ${skill.gradient} rounded-full mr-4 shadow-lg group-hover/item:scale-125 transition-transform duration-300`}></div>
                        <span className="text-base group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-gray-700 group-hover/item:to-gray-500 dark:group-hover/item:from-white dark:group-hover/item:to-gray-300 group-hover/item:bg-clip-text transition-all duration-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
