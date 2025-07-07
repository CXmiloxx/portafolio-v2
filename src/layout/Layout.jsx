import NavBar from "../components/NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      <NavBar />
      <div className="pt-18">
        {children}
      </div>
    </div>
  )
}
