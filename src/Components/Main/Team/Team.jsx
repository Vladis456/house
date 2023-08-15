import { Container } from '../../layout/Container/Container'
import style from './Team.module.scss'
import cn from 'classnames'
import img from '../../../img/content/team_img.jpg'
import img576 from '../../../img/content/team_img_576.jpg'
import img768 from '../../../img/content/team_img_768.jpg'
import teamMemberImg1 from '../../../img/content/team_member1.png'
import teamMemberImg2 from '../../../img/content/team_member2.png'
import teamMemberImg3 from '../../../img/content/team_member3.png'
export const Team = () => {
	return <section id='about' className={style.team}>
		<Container className={style.team__container}>
			<picture className={style.team__imgWrapper}>
				<source srcSet={img768} media='(min-width:768px)' />
				<source srcSet={img576} media='(min-width:576px)' />
				<img src={img} alt='картина с рукой'/>
			</picture>
			<div className={style.team__info}>
				<div className={style.team__textBlock}>
					<h2 className={cn(style.team__title, 'title')}>Наша команда</h2>
					<p className={style.team__text}>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по&nbsp;своей масштабности и&nbsp;грандиозности. Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что консультация с&nbsp;широким активом.</p>
				</div>
				<ul className={style.team__imgList}>
					<li className={style.team__member}>
						<img src={teamMemberImg1} alt='сотрудник Ink House'/>
					</li>
					<li className={style.team__member}>
						<img src={teamMemberImg2} alt='сотрудник Ink House'/>
					</li>
					<li className={style.team__member}>
						<img src={teamMemberImg3} alt='сотрудник Ink House'/>
					</li>
				</ul>
			</div>

		</Container>
	</section>
}