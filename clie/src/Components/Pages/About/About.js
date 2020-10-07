import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
const theme = {
    main: "mediumseagreen",
    dark: "darken"
};

const Content = styled.div `
    margin: 0px auto;
    max-width: 900px
`
const Map = styled.div`
    position:relative;
    overflow:hidden;
`
const MapA = styled.a`
    color:#eee;
    font-size:12px;
    position:absolute;
    top:0px;
    width: 300px
`

const MapAT = styled.a`
    color:#eee;
    font-size:12px;
    position:absolute;
    top:14px;
`

const Comments = styled.div`
    width:560px;
    height:800px;
    overflow:hidden;
    position:relative;
    margin: 0px auto;
    background-color: ${props => props.theme.dark};
`
const Frame = styled.iframe`
    width:100%;
    height:100%;
    border:1px solid #e6e6e6;
    border-radius:8px;
    box-sizing:border-box;
`
const ComA = styled.a`
    box-sizing:border-box;
    text-decoration:none;
    color:#b3b3b3;
    font-size:10px;
    font-family:YS Text,sans-serif;
    padding:0 20px;
    position:absolute;
    bottom:8px;
    width:100%;
    text-align:center;
    left:0;
`
export default function About() {
    return (
        <ThemeProvider theme={theme}>
        <Content>
            <h1>О нас</h1>
            <p>Привет! Рады видеть Вас в интернет-магазине Sweet33!</p>
            <p>Мы небольшой, уютный магазинчик работающий для вас в формате офлайн и онлайн. Наша история начинается с 2016 года, когда мы открыли розничный магазин в г. Владимир, основным ассортиментом на тот момент являлись европейские и американские сладости. Постепенно, понимая потребности наших друзей (клиентов), мы расширили предлагаемый товар подарочной упаковкой, мягкими игрушками, канцелярией, кружками и термокружками, воздушными шарами… Мы стараемся отбирать на витрины нашего магазинчика оригинальные, интересные и необычные товары, чтобы приятно удивлять Вас!</p>
            <p>Теперь нас смело можно назвать магазин ПОДАРКОВ Sweet33! Мы можем предложить большой выбор подарков и товаров для праздника, надуем как свои, так и ваши воздушные шары, составим композицию из шаров. Ну и конечно, Европейские и Американские сладости никуда не делись! Естественно, у нас есть и доставка по городу Владимир, выбранный товар мы с радостью привезем вам лично в руки, или доставим как сюрприз вашим родным и близким. </p>
            <p>С самого начала нашей работы мы существуем как розничный, и как интернет-магазин, на нашем сайте, к слову, на котором вы сейчас и находитесь, вы можете выбрать понравившейся вам товар и приобрести его. Мы в свою очередь организуем его доставку в любой город России.</p>
            <p>Нам всегда можно позвонить по указанному номеру по любым вопросам! Мы сфотографируем для вас любой товар или вариант упаковки и отправим куда скажете. Мы постараемся стать для вас уютным, любимым магазином, в который приятно возвращаться!</p>
            <Map><MapA href="https://yandex.ru/maps/org/vkusvill/136027990260/?utm_medium=mapframe&utm_source=maps">ВкусВилл</MapA><MapAT href="https://yandex.ru/maps/213/moscow/category/grocery_store/?utm_medium=mapframe&utm_source=maps">Магазин продуктов в Москве</MapAT><iframe src="https://yandex.ru/map-widget/v1/-/CCQd5SR8TD" width="100%" height="400" frameborder="1" allowfullscreen="true"></iframe></Map>
            <Comments><Frame src="https://yandex.ru/maps-reviews-widget/136027990260?comments"></Frame><ComA href="https://yandex.ru/maps/org/vkusvill/136027990260/" target="_blank">ВкусВилл на карте Москвы — Яндекс.Карты</ComA></Comments>
        </Content>
        </ThemeProvider>
    )
}
