import React, {useState} from 'react'
import styled from'styled-components'
import axios from 'axios'

const Tovars = styled.div`
    margin: 0px auto;
    overflow: scroll auto;
    overflow-x: hidden;
`;
    
export default function Form({itog, items, basket}) {
    const [form, setForm] = useState({
        isShowForm: false,
        _phone: '',
        _adress: '',
        _fName: '',
        _sName: '',
        _mail: '',
        _city: '',
        _cityPin: 0,
        _itog: itog,
        message: JSON.stringify(items)
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    async function handleSubmit(e) {
        // e.preventDefault()

        const {_phone, _adress, _fName, _sName, _mail, _city, _cityPin, _itog, message} = form;

        const myForm = await axios.post('/api/form', {
            _phone, 
            _adress, 
            _fName, 
            _sName,
            _mail, 
            _city, 
            _cityPin,
            _itog,
            message
        })
    }

    return (
        <>
        <Tovars>
            {basket}
            <p style={{ textAlign: 'center'}}>Total <span className="price" style={{ color:"black"}}><b>{itog} руб.</b></span></p>
         </Tovars>
        <form onSubmit={(e) => handleSubmit(e)} id="forma">

            <label htmlFor="_sName">Фамилия</label>
            <input  onChange={(e) => handleChange(e)} 
                    type="text" 
                    name="_sName" 
                    placeholder="Фамилия"/>

            <label htmlFor="_fName">Имя</label>
            <input  onChange={(e) => handleChange(e)}
                    type="text" 
                    name="_fName" 
                    placeholder="Имя" />

            <label htmlFor="_phone">Телефон</label>
            <input  onChange={(e) => handleChange(e)}
                    type="tel" 
                    name="_phone" 
                    placeholder="Телефон" />

            <label htmlFor="_mail">E-Mail</label>
            <input  onChange={(e) => handleChange(e)}
                    type="email" 
                    name="_mail" 
                    placeholder="E-Mail" />

            <label htmlFor="_adress">Адрес</label>
            <input  onChange={(e) => handleChange(e)}
                    type="text" 
                    name="_adress" 
                    placeholder="Адрес доставки" />

            <label htmlFor="_city">Город</label>
            <input  onChange={(e) => handleChange(e)}
                    type="text" 
                    name="_city" 
                    placeholder="Города" />

            <label  htmlFor="_cityPin">Код города</label>
            <input  onChange={(e) => handleChange(e)}
                    type="text" 
                    name="_cityPin" 
                    placeholder="Код города" />

            <input type="submit" value="отправить" />
        </form>
        </>
    )
}
