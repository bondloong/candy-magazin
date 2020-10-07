import React, {useState} from 'react'
import styled from'styled-components'
import Form from './Form/Form'
const Button = styled.button`
    width: 100%;
`;
const DeliveryWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: gray;
    opacity: 0.8;
    z-index: 998;
    width: 100%;
    height: 100%;
`;

const Delivery = styled.div`
    justify-content: space-between;
    position: fixed;
    width: 100%;
    max-width: 569px;
    height: auto;
    min-height: 400px;
    background-color: white;
    z-index: 999;

    left: 50%;
    opacity: 1;
    margin: -200px 0 0 -200px;
    display: flex;
    padding: 15px;
    flex-direction: row-reverse;
`;




export default function BuyTovars({items, itog}) {
   const [delivery, setdelivery] = useState(false)

    const isShowDelivery = (e) =>{
        setdelivery(!delivery);
    }

    const basket = (items) => {
        return items.map((item, index) => (  
            <div className='collection-item' key={'item ' + index  + item.id} >
                <p key={'item '+ index + item.type + ' ' + item.firma}>{item.type} {item.firma} <br></br> {item.price}{item.val} {item.col}{item.mera}</p>
            </div>
        )) 
    }

    return (
        <>
            <Button className="waves-effect waves-light btn bottom" onClick={(e) => isShowDelivery(e)}>Купить</Button>
            {delivery? 
            <>
                <DeliveryWrapper onClick={() => isShowDelivery()}></DeliveryWrapper>
                <Delivery>
                    <Form itog={itog} items={items} basket={basket(items)}/>
                </Delivery>
            </> 
                : 
            '' 
            }
        </>
            
        
    )
}
