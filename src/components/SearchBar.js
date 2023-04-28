import { useState } from "react"

import "./SearchBar.css"

function SearchBar({onSubmit}) {

    const [term, setTerm] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(term)
    }

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for images: </label>
                <input className="input" value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar