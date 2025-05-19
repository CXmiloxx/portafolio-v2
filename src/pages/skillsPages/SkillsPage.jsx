import { t } from 'i18next'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; import { FaCode, FaDatabase, FaServer, FaDesktop } from 'react-icons/fa';

const skills = [
  { name: "Frontend", icon: <FaDesktop className="text-4xl mb-2 text-blue-500" />, items: ["React", "NextJs", "Tailwind", "HTML/CSS", "JavaScript", "TypeScript"] },
  { name: "Backend", icon: <FaServer className="text-4xl mb-2 text-green-500" />, items: ["Node.js", "Express", "PHP", "NestJs", "Java"] },
  { name: "Database", icon: <FaDatabase className="text-4xl mb-2 text-yellow-500" />, items: ["MySQL", "Firebase", "Prisma"] },
  { name: "Other", icon: <FaCode className="text-4xl mb-2 text-purple-500" />, items: ["Git", "GitHub", "Docker", "VsCode"] }
];

export default function SkillsPage({ skillsRef }) {
  return (
    <section ref={skillsRef} id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-blue-300">
            {t("skills.title", "Mis Habilidades")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
