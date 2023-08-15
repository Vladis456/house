import style from './Banner.module.scss'
import { Container } from '../../layout/Container/Container'
import cn from 'classnames'
import logo from '../../../img/icons/banner_logo.svg'


export const Banner = ({setCountry}) => {
	return <section id='new' className={style.banner}>
		<Container className={style.banner__container}>
			 <div className={style.banner__group}>
				<img className={style.banner__img} src={logo} width='50px' height='50px'/>
				<h2 className={cn(style.banner__title, 'title')}>Новая коллекция французских авторов</h2>
			 </div>
			 <div className={style.banner__textGroup}>
			 	<p className={style.banner__text}>Сложно сказать, почему акционеры крупнейших компаний призывают нас к&nbsp;новым свершениям, которые, в&nbsp;свою очередь, должны быть заблокированы в&nbsp;рамках своих собственных рациональных ограничений.</p>
			 	<p className={style.banner__text}>Принимая во&nbsp;внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
			 </div>
			 <a href='#products' className={style.banner__link} onClick={()=>setCountry('Франция')}>Ознакомиться</a>
		</Container>
	</section>
}