import { useState } from 'react'
import './App.css'
import Stc from './pages/stc'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GothenburgHogsbohojd from './pages/gothenburgHogsbohojd'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Stc />} />
                    <Route path="/hogsbohojd" element={<GothenburgHogsbohojd />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
