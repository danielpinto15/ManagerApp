import { BrowserRouter ,Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Layout from './components/Layout';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/team" element={<Team />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;