import React from "react";
import {connect} from "react-redux";

class CartTable extends React.Component {
	constructor(props){
		super(props);
	}

	removeItemHandler() {
		console.log('inside remove item handler');
	}

	generateCartTable() {
		const addedProds = this.props.addedProdcuts;
		if(addedProds) {
			this.cartItems = addedProds.map((addedProd, i) =>
					<tr key={i}>
						<td className="table-body prod-code">{addedProd['product-id']}</td>
						<td className="table-body prod-desc">{addedProd['title']}</td>
						<td className="table-body prod-quantity">
							<input type="number" className="quantity-field" min="1" max="5" name="quantity" id="quantity" />
						</td>
						<td className="table-body prod-unit-value">
							$ {addedProd['price']}
						</td>
						<td className="table-body total-cost">
							$ {addedProd['price']}
						</td>
						<td className="table-body prod-remove">
							<a href="#" onClick={this.removeItemHandler.bind(this, addedProd)} className="prod-remove-link">
								<span className="alternate-text">Remove</span>
							</a>
						</td>
					</tr>
			)
		}
	}

	render() {
		console.log(this.props.addedProdcuts);
		this.generateCartTable();
		return (
			<table className="cart-table">
				<thead>
					<tr>
						<th className="table-head prod-code">Product Code</th>
						<th className="table-head prod-desc">Product Description</th>
						<th className="table-head prod-quantity">Quantity</th>
						<th className="table-head prod-unit-value">Unit Value</th>
						<th className="table-head total-cost">Total Cost</th>
						<th className="table-head prod-remove">Remove</th>
					</tr>
				</thead>
				<tbody>
						{this.cartItems}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		addedProdcuts: state.cartDetail.addedProducts
	}
}

export default connect(mapStateToProps)(CartTable);