import React, {useState, useMemo} from 'react'
import BuyTovars from './BuyTovars/BuyTovars'

export default function Tovars ({items, deleteTovarItem, addTovarItem, minusTovarItem}){
    const [itog, setItog] = useState(0);

    const itogUs = (items) => {
        var itogic = items.map(item => item.price);
        var summ = 0;
        for(var i = 0; i < itogic.length; i++){
            summ += itogic[i];
        }
        setItog (summ)
    }
    
    useMemo(
        () => {
            itogUs(items)
        },
        [items],
    )
    
    return (
        <div className="collection l-col">
                { items.length > 0 ? <div className='collection-item'>Итого: {itog} р.</div> : '' }
                { items.length > 0 ? <BuyTovars items={items} itog={itog} /> : '' }
            {  
                items.map((item, index) => (  
                    <div className='collection-item' key={'item ' + index  + item.id} >
                        <p key={'item '+ index + item.type + ' ' + item.firma}>{item.type} {item.firma} <br></br> {item.price}{item.val} {item.col}{item.mera}</p>
                        <button 
                            className="waves-effect waves-light btn" 
                            key={'add' + item.id + index}
                            onClick={(e) => addTovarItem(item)}
                        >+</button>
                        <button 
                            className="waves-effect waves-light btn" 
                            onClick={() => minusTovarItem(item, index)}
                        >-</button>
                        <button 
                            className="waves-effect waves-light btn" 
                            key={'del' + item.id + index}
                            onClick={() => deleteTovarItem(index)}
                        >Удалить</button>   
                    </div>
                )) 
            } 
        </div>
    )
}
