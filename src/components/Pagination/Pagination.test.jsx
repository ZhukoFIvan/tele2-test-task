
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Pagination from './Pagination'

describe('Pagination component', () => {
	it('renders pagination with arrows and handles page change correctly', () => {
		const onChangePage = jest.fn()

		const { getByLabelText } = render(
			<Pagination onChangePage={onChangePage} />
		)

		const leftArrow = getByLabelText('Previous page')
		const rightArrow = getByLabelText('Next page')
		expect(leftArrow).toBeInTheDocument()
		expect(rightArrow).toBeInTheDocument()

		fireEvent.click(rightArrow)
		expect(onChangePage).toHaveBeenCalledWith(2)

		fireEvent.click(leftArrow)
		expect(onChangePage).toHaveBeenCalledWith(1)
	})
})
