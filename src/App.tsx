import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Projects from './pages/Projects/Projects';
import Videos from './pages/Videos/Videos';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="projects" element={<Projects />} />
            <Route path="videos" element={<Videos />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
