import React from 'react';

const Item = props => {
  const totalPrice = (props.price * props.quantity).toFixed(2)
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
        <p>Quantity {props.quantity} ($ {totalPrice})</p>
				<button onClick={() => props.removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
