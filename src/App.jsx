import './App.css'
import Stc from './pages/stc'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GymActivityPage from './pages/gymActivityPage'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Stc />} />
                    <Route path="/gym/:id" element={<GymActivityPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
