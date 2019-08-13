import React, { useState } from 'react';

const Product = props => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log('HERE', e.target.value)
  }
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>
      <p style={{paddingLeft: '25px'}}>Quantity 
        <input style={{width: '40px'}} name="quantity" type="text" value={input} onChange={handleChange}></input>
      </p>

			<button onClick={() => props.addItem(props.product, input)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
