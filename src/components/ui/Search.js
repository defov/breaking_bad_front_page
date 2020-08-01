import React, { useState } from 'react'

const Search = ({setQuery}) => {
    const [text, setText] = useState('')

    const onChange = (search) => {
        setText(search)
        setQuery(search)
    }

    return (
        <section className="search">
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search characters" 
                    autoFocus
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search