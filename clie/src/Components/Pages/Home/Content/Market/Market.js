import React, {useState} from 'react'
import styled from'styled-components'
import './Market.css'


const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`;
const Tovar = styled.div`
    max-width: 200px;
    margin: 15px
`;


export default function Market({tovars, addTovarhandleClick, setTovars}) {
    var initialState = [...new Set(tovars.map(tovar => (tovar.type)))]
    const [filter, setFilter] = useState({filters: initialState, onFilter: true})

    const duplicatedValues = [...new Set(tovars)].filter(item => filter.filters.includes(item.type));
    
    const FilterItem =(type) => {
        setFilter({filters: type})
    }
    const resetFilter = () => {
         setFilter({filters: initialState})
    }



    return (
        <>
            <div className="boxes">
            <button key='reset'  onClick={() => resetFilter()} >Сброс</button>
                {
                    initialState.map(type => (
                        <>
                            <button key={type}  onClick={(e) => (FilterItem(e.target.value))} value={type} id={type} >{type}</button>
                        </>
                    ))
                }  
            </div>
            <Wrapper>{duplicatedValues.map((tovar, index) => ( 
                <Tovar key = { "col " + tovar.id } >
                    <div key = { "card " + tovar.id } className = "card"  >
                        <div key = {'image-box ' + tovar.id} className = "card-image" >
                            <img key = {'image ' + tovar.id} src = { tovar.link } alt = { tovar.firma } width = "200px"/>  
                            <button key = {'add-tovar ' + tovar.id} className = "waves-effect waves-light btn" onClick = {() => addTovarhandleClick(tovar) } > Купить </button>  
                        </div> 
                        <div key = {'card-box ' + tovar.id} className = "card-content" >
                            <p key = {'card-title ' + tovar.id} > 
                                <span key = {'card-firma ' + tovar.id} className = "card-title" > { tovar.type + ' ' + tovar.firma } </span>
                            </p>
                            <p key = {'tovar-description ' + tovar.id}> { tovar.description } </p> 
                            <p key = {'tovar-price ' + tovar.id}> Цена { tovar.price }р. { tovar.mear } </p> 
                        </div>
                    </div> 
                </Tovar>
            ))}</Wrapper>
        </>
    )
}
