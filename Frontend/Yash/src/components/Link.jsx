import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function RouterComponent() {
    function Home() {
        return <h1>this is my homepage</h1>
    }
    function About() {
        return <h1>This is my About Page</h1>
    }

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouterComponent