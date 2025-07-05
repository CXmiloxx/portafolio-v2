import { t } from 'i18next'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer, FaDesktop, FaDownload } from 'react-icons/fa';

const skills = [
  {
    name: "Frontend",
    icon: <FaDesktop className="text-6xl mb-4 text-white" />,
    items: ["React", "NextJs", "Tailwind", "HTML/CSS", "JavaScript", "TypeScript"],
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    bgGradient: "from-cyan-50 via-blue-50 to-purple-50",
    darkBgGradient: "from-cyan-900/30 via-blue-900/30 to-purple-900/30",
    iconBg: "from-cyan-400 via-blue-500 to-purple-600"
  },
  {
    name: "Backend",
    icon: <FaServer className="text-6xl mb-4 text-white" />,
    items: ["Node.js", "Express", "PHP", "NestJs", "Java"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
    darkBgGradient: "from-emerald-900/30 via-teal-900/30 to-cyan-900/30",
    iconBg: "from-emerald-400 via-teal-500 to-cyan-600"
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-6xl mb-4 text-white" />,
    items: ["MySQL", "Firebase", "Prisma"],
    gradient: "from-orange-400 via-red-500 to-pink-600",
    bgGradient: "from-orange-50 via-red-50 to-pink-50",
    darkBgGradient: "from-orange-900/30 via-red-900/30 to-pink-900/30",
    iconBg: "from-orange-400 via-red-500 to-pink-600"
  },
  {
    name: "Herramientas",
    icon: <FaCode className="text-6xl mb-4 text-white" />,
    items: ["Git", "GitHub", "Docker", "VsCode"],
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    bgGradient: "from-violet-50 via-purple-50 to-indigo-50",
    darkBgGradient: "from-violet-900/30 via-purple-900/30 to-indigo-900/30",
    iconBg: "from-violet-400 via-purple-500 to-indigo-600"
  }
];

export default function SkillsPage({ skillsRef }) {
  return (
    <section ref={skillsRef} id="skills" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
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
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full shadow-lg"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-700 bg-clip-text text-transparent">
              {t("skills.title", "Mis Habilidades")}
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
                className={`relative overflow-hidden rounded-3xl p-10 shadow-2xl transition-all duration-500 hover:shadow-3xl bg-gradient-to-br ${skill.bgGradient} dark:${skill.darkBgGradient} border border-white/20 dark:border-gray-700/30 backdrop-blur-xl group`}
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
                      className={`p-6 rounded-3xl bg-gradient-to-br ${skill.iconBg} shadow-2xl mb-6 group-hover:shadow-3xl transition-all duration-500`}
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
