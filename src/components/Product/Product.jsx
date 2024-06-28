import styles from './Product.module.scss'

const Product = ({ title, images }) => {
	return (
		<div className={styles.block}>
			<img src={images[0]} alt={title} />
			<p>{title}</p>

		</div>
	)
}

export default Product
