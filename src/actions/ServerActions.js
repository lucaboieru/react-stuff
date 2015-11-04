import Dispatcher from '../dispatcher';
import ActionConsts from '../constants/ActionConstants';

class ServerActions {
	receivedProductList(products) {
		Dispatcher.handleServerAction({
			actionType: ActionConsts.RECEIVED_PRODUCT_LIST,
			products: products
		});
	}
	recievedProductData(product) {
		Dispatcher.handleServerAction({
			actionType: ActionConsts.RECEIVED_PRODUCT_DATA,
			product: product
		});
	}
	userLoggedIn(loginObj) {
		Dispatcher.handleServerAction({
			actionType: ActionConsts.USER_LOGGED_IN,
			loginObj: loginObj
		});
	}
}

export default new ServerActions();