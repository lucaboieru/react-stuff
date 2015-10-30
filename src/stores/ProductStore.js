import events from 'events';
import Dispatcher from '../dispatcher.js';
import ActionConsts from '../constants/ActionConstants';

// store variables
var products = [];
var selectedProduct = null;
var selectedModel = null;

function setProductList(productList) {
	products = productList;
}

function setSelectedProduct(product) {
	selectedProduct = product;
	setSelectedModel(selectedProduct.models[0].id);
}

function setSelectedModel(id) {
	selectedProduct.models.forEach((model) => {
		if (model.id === id) {
			selectedModel = model;
		}
	});
}

class ProductStore extends events.EventEmitter {
	getProductList() {
		return products;
	}
	getSelectedProduct() {
		return selectedProduct;
	}
	getSelectedModel() {
		return selectedModel
	}
	emitChange() {
		this.emit("change");
	}
	addChangeListener(callback) {
		this.on("change", callback);
	}
}

var Store = new ProductStore();

Dispatcher.register((payload) => {
	var action = payload.action;

	switch(action.actionType) {
		case ActionConsts.RECEIVED_PRODUCT_LIST:
			setProductList(action.products);
			break;
		case ActionConsts.RECEIVED_PRODUCT_DATA:
			setSelectedProduct(action.product);
			break;
		case ActionConsts.MODEL_CHANGED:
			setSelectedModel(action.id);
			break;
		default:
			return true;
	}

	Store.emitChange();
	return true;
});

export default Store;