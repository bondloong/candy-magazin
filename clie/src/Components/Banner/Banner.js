import React, { useReducer } from 'react'
import './Banner.css'
import reducer, { initialState } from './reducer'

export default function Banner() {
    const [count, setCount] = useReducer(reducer, initialState)
    const [banners, setBannres] = useReducer(reducer, initialState)

    return (
        <div    id = "banner"
                className = "banner anim-banner"
                style = {{ backgroundImage: `url(${banners.banners[count.count]})`}}>
            <span className = 'pred' onClick = {() => setCount({ type: 'pred' }) } > { '<' } </span>
                Banner { count.count }
            <span className = 'next'onClick = {() => setCount({ type: 'next' }) } > { '>' } </span> 
        </div>
    )
}