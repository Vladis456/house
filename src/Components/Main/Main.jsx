import { Banner } from "./Banner/Banner"
import { Hero } from "./Hero/Hero"
import { Reproductions } from "./Reproductions/Reproductions"
import { Team } from "./Team/Team"

export const Main = ({products, country, setCountry, setProductsInCart}) => {
	return <main>
		<Hero />
		<Reproductions products={products} country={country} setCountry={setCountry} setProductsInCart={setProductsInCart}/>
		<Banner setCountry={setCountry}/>
		<Team />
	</main>
}