import NavBar from "../components/NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="pt-18 ">
        {children}
      </div>
    </div>
  )
}
