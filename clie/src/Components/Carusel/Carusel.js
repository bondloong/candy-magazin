import React, {useReducer, useEffect} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Carusel.css'
import reducer, {initialState} from './reducer'
import Card from './Card/Card'

export default function Carusel() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { property, index} = state;

    useEffect(() => {
        const intervalId = setTimeout(() => {
            dispatch({type: 'next'})
        }, 10000);

        return () =>{clearInterval(intervalId)};
    })
    
    return (
        <div className='carusel'>
            <TransitionGroup className='card-container'>
                <CSSTransition 
                    key={property[index].id}
                    timeout={2000}
                    classNames='fade'
                >
                    <Card property={property} index={index} pred={() => dispatch({type: 'pred'})} next={() => dispatch({type:'next'})}/>
                </CSSTransition> 
            </TransitionGroup>
            <div className='points'>
                {
                    property.map((prop, i) => (
                        <div key={prop + i} onClick={() => dispatch({type: 'set', i: i})} className={index === i? 'slide-act' : 'slide-def'}></div>
                     ))
                }
            </div>
        </div>
    )
}
