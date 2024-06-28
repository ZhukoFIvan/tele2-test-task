import { render, screen } from '@testing-library/react'
import Product from './Product'

test('renders product with title and image', () => {
  const product = {
    title: 'Test Product',
    images: ['image1.jpg', 'image2.jpg'], 
  };

  const { getByAltText, getByText } = render(
    <Product title={product.title} images={product.images} />
  );


  const imageElement = getByAltText(product.title);
  expect(imageElement).toBeInTheDocument();


  const titleElement = getByText(product.title);
  expect(titleElement).toBeInTheDocument();
});