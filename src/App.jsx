import { useState } from 'react'
import './App.css'
import Stc from './pages/stc'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Stc />
        </>
    )
}

export default App
