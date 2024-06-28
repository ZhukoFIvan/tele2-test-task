import { configureStore } from '@reduxjs/toolkit'
import search from './slices/searchSlice'
import pagination from './slices/paginationSlice'
export const store = configureStore({
	reducer: {
		search,
		pagination,
	},
})
