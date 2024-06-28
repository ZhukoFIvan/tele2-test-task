import { useSelector } from 'react-redux'
import Product from '../Product/Product'
import Skeleton from '../Skeleton/Skeleton'
import styles from './ProductList.module.scss'

const ProductsList = ({ data, isLoading }) => {
	const searchValue = useSelector((state) => state.search.searchValue)
	return (
		<section className={styles.list}>
			{isLoading
				? [...new Array(8)].map(() => <Skeleton />)
				: data.map((item) => <Product key={item.id} {...item} />)}
		</section>
	)
}

export default ProductsList
