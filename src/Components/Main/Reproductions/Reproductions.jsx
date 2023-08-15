import { Container } from "../../layout/Container/Container"
import style from "./Reproductions.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import cn from "classnames";
import { Product } from "./Product/Product";


export const Reproductions = ({products, country, setCountry, setProductsInCart}) => {
	
	return <section id="products" className={style.reproductions}>
		<h2 className={cn(style.reproductions__title, 'title')}>Репродукции</h2>
		<Swiper
			spaceBetween={20}
			slidesPerView={'auto'}
			className={style.reproductions__options}
		>
			<SwiperSlide className={country === 'Франция' ? cn(style.reproductions__country, style.reproductions__country_selected) : style.reproductions__country} tabIndex={0} role={"button"} onClick={()=> setCountry("Франция")} >Франция</SwiperSlide>
			<SwiperSlide className={country === 'Германия' ? cn(style.reproductions__country, style.reproductions__country_selected) : style.reproductions__country} tabIndex={0} role={"button"} onClick={()=> setCountry("Германия")}>Германия</SwiperSlide>
			<SwiperSlide className={country === 'Англия' ? cn(style.reproductions__country, style.reproductions__country_selected) : style.reproductions__country} tabIndex={0} role={"button"} onClick={()=> setCountry("Англия")}>Англия</SwiperSlide>

		</Swiper>
		<Container className={style.reproductions__container}>
			<ul className={cn(style.reproductions__list, style.products)}>
				{products.map((item) => {
					if (item.country === country) {
						return item.paitings.map((paiting) => {
							return <Product key={paiting.imgUrl} imgName={paiting.imgUrl} author={paiting.author} name={paiting.name} materials={paiting.materials} size={paiting.size} price={paiting.price} setProductsInCart={setProductsInCart} />
						})
					}
				})}
			</ul>
		</Container>
	</section>
}