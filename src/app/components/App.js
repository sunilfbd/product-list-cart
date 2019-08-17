import React from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Route, IndexRoute, Switch} from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import ProductCart from "./ProductCart";
import CartTable from "./CartTable";

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Header cartVal={this.props.cartCount} />
					<div className="containerLayoutWrapper">
						<section className="productSection">
							<Switch>
								<Route exact path='/' component={ProductCart} />
								<Route exact path='/cart' component={CartTable} />
								<Route exact render = {() => (<p>Oops! something went wrong...</p>)} />
							</Switch>
						</section>
					</div>
					<Footer/>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cartCount: state.cartDetail.addedProductCount
	}
}

export default connect(mapStateToProps)(App);