import style from './Product.module.scss';
import cn from 'classnames';
export const Product = ({imgName,author, name, materials, size, price, setProductsInCart}) => {
	const imgPath = '/product-images/'
	return <li className={cn(style.products__item, style.product)}>
		<picture className={style.product__imgWrapper}>
			<source srcSet={imgPath+imgName+'.jpg'} className={style.product__img} media='(min-width: 576px)'/>
			<img src={imgPath+imgName+'_phone.jpg'} loading={'lazy'} alt={author + ' ' + name}/>
		</picture>
		<p className={style.product__author}>{author}</p>
		<h2 className={cn(style.product__title, 'title')}>{name}</h2>
		<p className={style.product__material}><span>{materials}</span> {size}</p>
		<p className={style.product__price}>{price}</p>
		<button className={style.product__button} onClick={()=> {
			setProductsInCart(localStorage.getItem('amount') + 1)
			localStorage.setItem('amount', parseInt(localStorage.getItem('amount')) + 1)
		}}>В корзину</button>
	</li>
}