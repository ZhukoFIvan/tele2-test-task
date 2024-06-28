import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../../redux/slices/paginationSlice'
import Pagination from '../../Pagination/Pagination'
import ProductsList from '../../ProductList/ProductsList'

const Home = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const dispatch = useDispatch()
	const searchValue = useSelector((state) => state.search.searchValue)
	const currentPage = useSelector((state) => state.pagination.currentPage)

	const onChangePage = (number) => {
		dispatch(setCurrentPage(number))
	}
	useEffect(() => {
		setIsLoading(true)
		const limit = 8
		const skip = (currentPage - 1) * limit
		const search = searchValue ? `${searchValue}` : ''
		const apiUrl = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`
		try {
			axios.get(apiUrl).then((response) => {
				setData(response.data.products)
				setIsLoading(false)
			})
		} catch (error) {
			console.error(error)
		}
	}, [currentPage, searchValue])

	return (
		<>
			<ProductsList data={data} isLoading={isLoading} />
			<Pagination
				onChangePage={onChangePage}
				// totalPages={totalPages}
				currentPage={currentPage}
			/>
		</>
	)
}

export default Home
