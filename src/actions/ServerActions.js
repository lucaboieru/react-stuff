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
}

export default new ServerActions();