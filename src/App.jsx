import Layout from './layout/Layout';
import AboutPage from './pages/aboutPage/AboutPage';
import HomePage from './pages/homePages/HomePage';
import ProyectsPage from './pages/proyectsPage/proyectsPage';

export default function App() {
  return (
    <Layout>
      <HomePage />
      <ProyectsPage/>
      <AboutPage/>
    </Layout>
  );
}
