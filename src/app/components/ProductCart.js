import React, {Component} from "react";
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { addtocart } from "./../action/addtocart";
import { setstate } from "./../action/setstate";

class ProductCart extends React.Component {

	constructor(props){
		super(props);
		this.props.dispatch(setstate());
	}

	handleClick(addedProdItem) {
		const modifiedProdArr = [...this.props.addedProducts, addedProdItem];
		let addedProd = {
			cartCount: this.props.cartCount + 1,
			prodList: modifiedProdArr
		};
		this.props.dispatch(addtocart(addedProd));
	}

	generateListItem() {
		const { productsDetails } = this.props.productslist;
		if(productsDetails) {
			this.listItems = productsDetails.map((productsDataSet, i) =>
				<li className="product-list-item" key={i} data-prod-code={productsDataSet['product-id']}>
					<h3 className="product-list-item-title">{productsDataSet['title']}</h3>
					<img className="product-list-item-img" src={productsDataSet['image-path']} alt="lorem image"/>
					<p className="product-list-item-desc">{productsDataSet['shortDescription']}</p>
					<span className="product-list-item-price">$ {productsDataSet['price']}</span>
					<button onClick={this.handleClick.bind(this, productsDataSet)} className="product-list-item-btn">{productsDataSet['product-cta-label']}</button>
				</li>
			)
		}
	}

	render() {
		this.generateListItem();
		
		return (
			<ul className="clearfix product-list">
				{this.listItems}
			</ul>
		);
	}
}

function mapStateToProps(state){
	return {
		productslist: state.prodList,
		cartCount:state.cartDetail.addedProductCount,
		addedProducts:state.cartDetail.addedProducts
	}
}

export default connect(mapStateToProps)(ProductCart);