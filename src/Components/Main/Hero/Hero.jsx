import style from './Hero.module.scss'
import heroImg_2x from '../../../img/content/hero-img_2x.jpg'
import heroImg from '../../../img/content/hero-img.jpg'
import imgWebp_2x from '../../../img/content/hero-img_2x.webp'
import imgWebp from '../../../img/content/hero-img.webp'
import { Container } from '../../layout/Container/Container'
export const Hero = () => {
	return <section className={style.hero}>
		<Container className={style.hero__container}>
			<picture className={style.hero__imgWrapper}>
				<source srcSet={imgWebp_2x} type='image/webp' media='(min-width: 1440px)'/>
				<source srcSet={heroImg_2x} media='(min-width: 1440px)'></source>
				<source srcSet={imgWebp} type='image/webp' />
				<img className={style.hero__img} src={heroImg} alt="голубь на ветке"></img>
			</picture>
			<div className={style.hero__info}>
				<h1 className={style.hero__title}>Реплики картин от <span>Ink.&nbsp;House</span></h1>
				<p className={style.hero__description}>Высокое качество отрисовки на&nbsp;плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
				<a href='#products' className={style.hero__button}>Продукция</a>
			</div>
		</Container>

	</section>
}