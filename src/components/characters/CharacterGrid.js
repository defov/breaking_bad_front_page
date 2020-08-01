import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({loading, items}) => {

    const cards = items.map(item => (
        <CharacterItem key={item.char_id} item={item} />
    ))

    return loading ? <Spinner /> : <section className="cards">{cards}</section>

}

export default CharacterGrid