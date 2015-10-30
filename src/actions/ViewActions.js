import Dispatcher from '../dispatcher';
import ActionConsts from '../constants/ActionConstants';
import API from '../api/API';

class ViewActions {
	productChanged(id) {
		API.getProductData(id);
	}
	modelChanged(id) {
		Dispatcher.handleViewAction({
			actionType: ActionConsts.MODEL_CHANGED,
			id: id
		});
	}
	addToCart(product) {
		Dispatcher.handleViewAction({
			actionType: ActionConsts.ADD_TO_CART,
			product: product
		});
	}
	removeFromCart(id) {
		Dispatcher.handleViewAction({
			actionType: ActionConsts.REMOVE_FROM_CART,
			id: id
		});
	}
	updateCartVisibility(visible) {
		Dispatcher.handleViewAction({
			actionType: ActionConsts.UPDATE_CART_VISIBILITY,
			visible: visible
		});
	}
}

export default new ViewActions();