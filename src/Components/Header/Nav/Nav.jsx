import style from './Nav.module.scss'
import cn from 'classnames'
import { useState } from 'react'

export const Nav = ({productsInCart, setProductsInCart}) => {
	let [isHover, setIsHover] = useState(false)
	let [isBurgerActive, setIsBurgerActive] = useState(false)
	isBurgerActive && window.matchMedia("(max-width: 576px)").matches ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
	return <nav className={!isBurgerActive ? cn(style.header__nav, style.nav) : cn(style.header__nav, style.nav, style.nav_active)}>
		<button className={!isBurgerActive ? style.header__burger : cn(style.header__burger, style.header__burger_active)} aria-label='открыть меню' onClick={()=> setIsBurgerActive(!isBurgerActive)}></button>

		<ul className={!isBurgerActive ? style.nav__list: cn(style.nav__list, style.nav__list_active)}>
			<li className={style.nav__item}><a className={style.nav__link} href="#products" onClick={()=> setIsBurgerActive(!isBurgerActive)}>Репродукции</a></li>
			<li className={style.nav__item}><a className={style.nav__link} href="#new" onClick={()=> setIsBurgerActive(!isBurgerActive)}>Новинки</a></li>
			<li className={style.nav__item}><a className={style.nav__link} href="#about" onClick={()=> setIsBurgerActive(!isBurgerActive)}>О нас</a></li>
		</ul>
		<div className={!isBurgerActive ? style.header__CartWrapper : "hidden"} tabIndex={0}  onMouseEnter={() => setIsHover(isHover = true)} onMouseLeave={()=>setIsHover(isHover = false)} onClick={()=> {
			localStorage.setItem('amount', 0)
			setProductsInCart(0)
		}}>
			<svg width="24" height="24" viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_3_996)">
					<path d="M9.25001 21.1667C9.75627 21.1667 10.1667 20.7563 10.1667 20.25C10.1667 19.7438 9.75627 19.3334 9.25001 19.3334C8.74375 19.3334 8.33334 19.7438 8.33334 20.25C8.33334 20.7563 8.74375 21.1667 9.25001 21.1667Z" stroke={isHover ? '#598D66' : '#2C2D35'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M19.3333 21.1667C19.8396 21.1667 20.25 20.7563 20.25 20.25C20.25 19.7438 19.8396 19.3334 19.3333 19.3334C18.8271 19.3334 18.4167 19.7438 18.4167 20.25C18.4167 20.7563 18.8271 21.1667 19.3333 21.1667Z" stroke={isHover ? '#598D66' : '#2C2D35'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M1.91666 1.91663H5.58332L8.03999 14.1908C8.12381 14.6128 8.35341 14.9919 8.68857 15.2617C9.02374 15.5315 9.44313 15.6749 9.87332 15.6666H18.7833C19.2135 15.6749 19.6329 15.5315 19.9681 15.2617C20.3032 14.9919 20.5328 14.6128 20.6167 14.1908L22.0833 6.49996H6.49999" stroke={isHover ? '#598D66' : '#2C2D35'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</g>
			</svg>
			<div className={productsInCart != 0 ? style.header__productsAmount : style.header__productsAmount_hidden}>{productsInCart}</div>
		</div>
	</nav>
}