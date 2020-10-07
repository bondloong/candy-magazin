import React, { useState, useEffect } from 'react'
import Tovars from './Tovars/Tovars'
import Calendar from '../../../Calendar/Calendar'
import Carusel from '../../../Carusel/Carusel'
import Market from './Market/Market';
import styled from'styled-components'

    /*style */
    const Row = styled.div`
        margin-left: auto; 
        margin-right: auto; 
        margin-bottom: 20px; 
        width: 100%;
    `;

export default function Content() {
    const [tovars, setTovars] = useState([
        { id: 0, type: 'Мороженое', firma: '40 копеек', link: 'https://autogear.ru/misc/i/gallery/98503/2739195.jpg', description: 'Ванильное лакомство', col: 1, price: 20, oldprice: 20, val: 'руб.', mera: 'шт.' },
        { id: 1, type: 'Панкейк', firma: 'от Быкова', link: 'https://i.pinimg.com/736x/8a/28/14/8a28144fb5326d6ae8468533de3e4e48.jpg', description: 'Тает во рту', col: 1, price: 38, oldprice: 38, val: 'руб.', mera: 'шт.' },
        { id: 2, type: 'Печенье', firma: 'Тортинка', link: 'https://www.patee.ru/r/x6/0c/55/b1/960m.jpg', description: 'Хрустит с наслаждением', col: 1, price: 40, oldprice: 40, val: 'руб.', mera: 'кг.' },
        { id: 4, type: 'Печенье', firma: 'Tuc', link: 'https://ozon-st.cdn.ngenix.net/multimedia/1016851236.jpg', description: 'Сыр и Лук', col: 1, price: 38, oldprice: 38, val: 'руб.', mera: 'шт.' },
        { id: 5, type: 'Мороженое', firma: 'Сахарный родок', link: 'https://cdn1.ozone.ru/multimedia/1033014424.jpg', description: 'С шоколадным топпингм', col: 1, price: 28, oldprice: 28, val: 'руб.', mera: 'шт.' },
    ]);
    const [items, setItems] = useState([]);
    
    const deleteTovarItem = (itemIndex) => {
         const newItems = items.filter((_, index) => index !== itemIndex);
         setItems(newItems);
    }

    const minusTovarItem = (tovar, itemIndex) => {
        if (items.find(item => (item.id === tovar.id))) {
            var tovs = items;
            var cols = tovs[items.findIndex(item => (item.id === tovar.id))].col;
            cols = cols - 1;
            tovs[items.findIndex(item => (item.id === tovar.id))].col = cols;
            var prices = tovs[items.findIndex(item => (item.id === tovar.id))].oldprice;
            var colprice = cols * prices
            tovs[items.findIndex(item => (item.id === tovar.id))].price = colprice;
            setItems([...items])
        } 

        if ((items.find(item => (item.id === tovar.id)) && (items.find(item => (item.col === 0))))) {
            const newItems = items.filter((_, index) => index !== itemIndex);
            setItems(newItems);
        }
    }
    const addTovarItem = (tovar) => {
        if (items.find(item => (item.id === tovar.id))) {
            var tovs = items;
            var cols = tovs[items.findIndex(item => (item.id === tovar.id))].col;
            cols = cols + 1;
            tovs[items.findIndex(item => (item.id === tovar.id))].col = cols;
            var prices = tovs[items.findIndex(item => (item.id === tovar.id))].oldprice;
            var colprice = cols * prices
            tovs[items.findIndex(item => (item.id === tovar.id))].price = colprice;
            setItems([...items])
        } else {
            setItems([...items, { id: tovar.id, type: tovar.type, firma: tovar.firma, col: tovar.col, price: tovar.oldprice * tovar.col, oldprice: tovar.oldprice, val: tovar.val, mera: tovar.mera }]);
        }

    }

    // getText(){
    //     const tovars = fetch("");

    //     tovars.then(response => {
    //     return response.json();
    //     }).then(tovarsJson => {
    //        this.setState({tovars: tovarsJson})
    //     })
    // };   

    useEffect(() => {
        const raw = localStorage.getItem('items')
        setItems(JSON.parse(raw))
    }, [])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])


    const addTovarhandleClick = (tovar) => {
        if (items.find(item => (item.id === tovar.id))) {
            var tovs = items;
            var cols = tovs[items.findIndex(item => (item.id === tovar.id))].col;
            cols = cols + 1;
            tovs[items.findIndex(item => (item.id === tovar.id))].col = cols;
            var prices = tovs[items.findIndex(item => (item.id === tovar.id))].oldprice;
            var colprice = cols * prices
            tovs[items.findIndex(item => (item.id === tovar.id))].price = colprice;
            setItems([...items])
        } else {
            setItems([...items, { id: tovar.id, type: tovar.type, firma: tovar.firma, col: tovar.col, price: tovar.oldprice * tovar.col, oldprice: tovar.oldprice, val: tovar.val, mera: tovar.mera }]);
        }
    }



    return ( 
        <>
        <Tovars items = { items } deleteTovarItem = { deleteTovarItem } addTovarItem = { addTovarItem } minusTovarItem = {minusTovarItem} /> 
            <Row> 
                <Carusel />
                <Market tovars={tovars} addTovarhandleClick={addTovarhandleClick} setTovars={setTovars}/>
            </Row> 
        <Calendar />
        </>
    )
}