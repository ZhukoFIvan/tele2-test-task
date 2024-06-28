import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
const Pagination = ({ onChangePage }) => {
	
	return (
		<ReactPaginate
			className={styles.pagination}
			breakLabel='...'
			nextLabel={<ArrowBigRight />}
			previousLabel={<ArrowBigLeft />}
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={3}
			pageCount={25}
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
