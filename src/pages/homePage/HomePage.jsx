import { useTranslation } from "react-i18next";
import portada from "/por.jpg";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
        
        {/* Texto */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-blue-300 mb-6">
            {t("homePage.title")}
          </h1>
          <h2 className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-6">
            {t("homePage.subTitle")}
          </h2>
          <button
            className={clsx(
              "mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full",
              "bg-blue-600 text-white hover:bg-blue-700",
              "transition-colors duration-300 shadow-md"
            )}
          >
            {t("homePage.learnMore")} <FaArrowRight />
          </button>
        </motion.div>

        {/* Imagen animada circular */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="w-72 h-82 md:w-100 md:h-100 rounded-full overflow-hidden shadow-2xl border-4 border-blue-200 dark:border-blue-500 transform -translate-y-6">
            <img
              src={portada}
              alt="Presentación"
              className="w-full h-full "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
