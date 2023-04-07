import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const NavbarLogo = styled.h1`
  font-size: 24px;
`;

const NavbarLinks = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarLink = styled.li`
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    color: #ffcc00;
  }
`;

const MobileNavbarMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 20px;
  }
`;

const MobileNavbarIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 5px;
`;

const Footer = styled.footer`
  background-color: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  width: 200px;
  position: relative; /* Add relative positioning */

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ProductTitle = styled.h2`
  font-size: 16px;
  margin-top: 0;
`;

const ProductBody = styled.p`
  font-size: 14px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #ffcc00;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
  position: absolute; /* Set position to absolute */
  bottom: 0; /* Position at the bottom */
  left: 0; /* Align to the left */
  transform: translateY(-50%); /* Move up by 50% of its height */

  @media (max-width: 768px) {
    padding: 5px;
    font-size: 12px;
  }

  &:hover {
    background-color: #e6b800;
  }
`;

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from FakeStoreAPI
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <Navbar>
        <NavbarLogo>My E-commerce Site</NavbarLogo>
        <NavbarLinks>
          <NavbarLink>Home</NavbarLink>
          <NavbarLink>Products</NavbarLink>
          <NavbarLink>About</NavbarLink>
          <NavbarLink>Contact</NavbarLink>
        </NavbarLinks>
      </Navbar>
      <h1>Content goes here</h1>
      <ProductList>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductBody>{product.description}</ProductBody>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ProductCard>
        ))}
      </ProductList>
      <Footer>
        <p>&copy; 2023 My E-commerce Site. All rights reserved.</p>
      </Footer>
    </div>
  );
};

export default App
