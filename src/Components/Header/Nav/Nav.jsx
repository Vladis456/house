import style from './Nav.module.scss'
import cn from 'classnames'
import cart from '../../../Img/Icons/cart.svg'

export const Nav = () => {
	return <nav className={cn(style.headerNav, style.nav)}>
		<button className={style.headerBurger} aria-label='открыть меню'></button>

		<ul className={style.navList}>
			<li className={style.navItem}><a className={style.navLink} href="#">Репродукции</a></li>
			<li className={style.navItem}><a className={style.navLink} href="#">Новинки</a></li>
			<li className={style.navItem}><a className={style.navLink} href="#">О нас</a></li>
		</ul>
		<div className={style.headerCartWrapper}>
					<img className={style.headerCartLogo} src={cart}></img>
		</div>
	</nav>
}