import style from './Header.module.scss'
import { Nav } from './Nav/Nav'
import logo from '../../Img/Icons/logo.svg';
import { Container } from '../layout/Container/Container';

export const Header = ({productsInCart, setProductsInCart}) => {
	return <header className={style.header}>
		<Container className={style.header__container}>
			<div className={style.header__LogoWrapper}>
				<a href='./index.html'>
					<img src={logo} alt="логотип Ink.House" className={style.header__logo} />
				</a>
			</div>
			<div className={style.header__NavWrapper}>
				<Nav productsInCart = {productsInCart} setProductsInCart = {setProductsInCart}/>

			</div>

		</Container>
	</header>
}