import Layout from './layout/Layout';
import AboutPage from './pages/aboutPage/AboutPage';
import HomePage from './pages/homePages/HomePage';

export default function App() {
  return (
    <Layout>
      <HomePage />
      <AboutPage/>
    </Layout>
  );
}
