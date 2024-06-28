import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={300}
		height={400}
		viewBox='0 0 300 400'
		backgroundColor='#2c2b2b'
		foregroundColor='#1d1b1b'
		{...props}
	>
		<rect x='45' y='66' rx='12' ry='12' width='201' height='197' />
		<rect x='45' y='274' rx='4' ry='4' width='205' height='13' />
		<rect x='46' y='293' rx='4' ry='4' width='203' height='14' />
		<rect x='45' y='314' rx='6' ry='6' width='204' height='11' />
	</ContentLoader>
)

export default Skeleton
