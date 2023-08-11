import style from './Header.module.scss'
import { Nav } from './Nav/Nav'
import logo from '../../Img/Icons/logo.svg';
import { Container } from '../layout/Container/Container';
export const Header = () => {
	return <header className={style.header}>
		<Container className={style.headerContainer}>
			<div className={style.headerLogoWrapper}>
				<a href='../../../index.html'>
					<img src={logo} alt="" className={style.headerLogo} />
				</a>
			</div>
			<div className={style.headerNavWrapper}>
				<Nav />

			</div>

		</Container>
	</header>
}