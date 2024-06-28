import debounce from 'lodash.debounce'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../redux/slices/searchSlice'
import styles from './Search.module.scss'
const Search = () => {
	const [value, setValue] = useState('')
	// const searchValue = useSelector((state) => state.search.searchValue)
	const dispatch = useDispatch()
	
	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str))
		}, 1000),
		[]
	)

	const onChangeInput = (event) => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}
	return (
		<input
			className={styles.input}
			type='text'
			placeholder='Введите название...'
			value={value}
			onChange={onChangeInput}
		/>
	)
}

export default Search
