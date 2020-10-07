import React from 'react'
import Content from './Content/Content'
import './Home.css'

export default function Home() {
    return (
        <>
        <h1 className='main__content'>Главная</h1>
        <div className='main__content fr'>
            <Content />
        </div>
        </>
    )
}
