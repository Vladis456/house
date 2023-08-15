import 'normalize.css'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'
import { useEffect, useState } from 'react'
const products = [
	{
		country: 'Франция', paitings: [
			{
				imgUrl: 'france_01',
				author: 'Марсель Руссо',
				name: 'Охота Амура',
				materials: 'Холст, масло',
				size: '(50х80)',
				price: '14 500 руб'
			},
			{
				imgUrl: 'france_02',
				author: 'Анри Селин',
				name: 'Дама с собачкой',
				materials: 'Акрил, бумага',
				size: '(50х80)',
				price: '16 500 руб'
			},
			{
				imgUrl: 'france_03',
				author: 'Франсуа Дюпон',
				name: 'Процедура',
				materials: 'Цветная литография',
				size: '(40х60)',
				price: '20 000 руб'
			},
			{
				imgUrl: 'france_04',
				author: 'Луи Детуш',
				name: 'Роза',
				materials: 'Бумага, акрил',
				size: '(50х80)',
				price: '12 000 руб'
			},
			{
				imgUrl: 'france_05',
				author: 'Франсуа Дюпон',
				name: 'Птичья трапеза',
				materials: 'Цветная литография',
				size: '(40х60)',
				price: '22 500 руб'
			},
			{
				imgUrl: 'france_06',
				author: 'Пьер Моранж',
				name: 'Пейзаж с рыбой',
				materials: 'Цветная литография',
				size: '(40х60)',
				price: '20 000 руб'
			},
		],
	},
	{
		country: 'Германия', paitings: [
			{
				imgUrl: 'germany_01',
				author: 'Курт Вернер',
				name: 'Над городом',
				materials: 'Цветная литография',
				size: '(40х60)',
				price: '16 000 руб'
			},
			{
				imgUrl: 'germany_02',
				author: 'Макс Рихтер',
				name: 'Птенцы',
				materials: 'Холст, масло',
				size: '(50х80)',
				price: '14 500 руб'
			},
			{
				imgUrl: 'germany_03',
				author: 'Мартин Майер',
				name: 'Среди листьев',
				materials: 'Цветная литография',
				size: '(40х60)',
				price: '20 000 руб'
			},
			{
				imgUrl: 'germany_04',
				author: 'Герман Беккер',
				name: 'Яркая птица',
				materials: 'Цветная литография',
				size: '(40х60)',
				price: '13 000 руб'
			},
			{
				imgUrl: 'germany_05',
				author: 'Вульф Бауэр',
				name: 'Дятлы',
				materials: 'Бумага, акрил',
				size: '(50х80)',
				price: '20 000 руб'
			},
			{
				imgUrl: 'germany_06',
				author: 'Вальтер Хартманн',
				name: 'Большие воды',
				materials: 'Бумага, акрил',
				size: '(50х80)',
				price: '23 000 руб'
			},
		],
	},
	{
		country: 'Англия', paitings: [
			{
				imgUrl: 'england_01',
				author: 'Пол Смит',
				name: 'Дикий зверь',
				materials: 'Акварель, бумага',
				size: '(50х80)',
				price: '19 500 руб'
			},
			{
				imgUrl: 'england_02',
				author: 'Джон Уайт',
				name: 'Дикий зверь',
				materials: 'Цветная литография',
				size: '(40х60)',
				price: '17 500 руб'
			},
			{
				imgUrl: 'england_03',
				author: 'Джим Уотсон',
				name: 'Река и горы',
				materials: 'Акварель, бумага',
				size: '(50х80)',
				price: '20 500 руб'
			},
			{
				imgUrl: 'england_04',
				author: 'Юджин Зиллион',
				name: 'Белый попугай',
				materials: 'Цветная литография',
				size: '(40х60)',
				price: '15 500 руб'
			},
			{
				imgUrl: 'england_05',
				author: 'Эрик Гиллман',
				name: 'Ночная рыба',
				materials: 'Бумага, акрил',
				size: '(50х80)',
				price: '12 500 руб'
			},
			{
				imgUrl: 'england_06',
				author: 'Альфред Барр',
				name: 'Рыжий кот',
				materials: 'Цветная литография',
				size: '(40х60)',
				price: '21 000 руб'
			},
		]
	},
]
const App = () => {
  const [country, setCountry] = useState('Франция')
	const [productsInCart, setProductsInCart] = useState(0)
	useEffect(()=> {
		if (localStorage.getItem('amount') === null) {
			localStorage.setItem('amount', 0)
		} else {
			setProductsInCart(parseInt(localStorage.getItem('amount')))
		}
	}, [productsInCart])
  return <>
    <Header productsInCart = {productsInCart} setProductsInCart = {setProductsInCart}/>
    <Main products={products} country={country} setCountry={setCountry} productsInCart = {productsInCart} setProductsInCart={setProductsInCart}/>
    <Footer setCountry={setCountry}/>
  </>
}

export default App
