// Imports 
import { useState } from "react"

import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"

import searchImages from "./api"

import "./App.css"

function App() {

    const [results, setResults] = useState([])

    const handleSubmit = async (term) => {
        console.log("Do a search with ", term)
        const results = await searchImages(term)
        setResults(results)
    }

    return (
        <div className="App">
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={results} />
        </div>
    )
}

export default App