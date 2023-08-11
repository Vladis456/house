import style from './Hero.module.scss'
import heroImg_2x from '../../../img/content/hero-img_2x.jpg'
import heroImg from '../../../img/content/hero-img.jpg'
import imgWebp_2x from '../../../img/content/hero-img_2x.webp'
import imgWebp from '../../../img/content/hero-img.webp'
import { Container } from '../../layout/Container/Container'
export const Hero = () => {
	return <section className={style.hero}>
		<Container className={style.heroContainer}>
			<picture className={style.heroImgWrapper}>
				<source srcSet={imgWebp_2x} type='image/webp' media='(min-width: 1440px)'/>
				<source src={heroImg_2x} media='(min-width: 1440px)'></source>
				<source srcSet={imgWebp} type='image/webp' />
				<img className={style.heroImg} src={heroImg} ></img>
			</picture>
			<div className={style.heroInfo}>
				<h1 className={style.heroTitle}>Реплики картин от <span>Ink.&nbsp;House</span></h1>
				<p className={style.heroDescription}>Высокое качество отрисовки на&nbsp;плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
				<button className={style.heroButton}>Продукция</button>
			</div>
		</Container>

	</section>
}