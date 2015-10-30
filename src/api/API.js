import ServerActions from '../actions/ServerActions';

function makeAjaxRequest (ajaxObj, callback) {
    $.ajax({
        url: ajaxObj.operation,
        type: ajaxObj.method || "POST",
        data: ajaxObj.data || {},
        error: function(jqXHR, exception) {
            if (jqXHR.status === 0) {
                callback('Not connect. Verify Network.' + jqXHR.responseText);
            } else if (jqXHR.status == 404) {
                callback('Requested page not found. [404].' + jqXHR.responseText);
            } else if (jqXHR.status == 500) {
                callback('Internal Server Error [500].' + jqXHR.responseText);
            } else if (exception === 'parsererror') {
                callback('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                callback('Time out error.');
            } else if (exception === 'abort') {
                callback('Ajax request aborted.');
            } else {
                callback('Uncaught Error.\n' + jqXHR.responseText);
            }
        },
        success: function (data) {
            callback(null, data);
        }
    });
}

class API {
	getProductList() {
		var self = this;

		makeAjaxRequest({
			operation: "/@/products/getProducts",
			data: {}
		}, (err, response) => {
			if (err) { alert(err); }
			var products = JSON.parse(response);
			ServerActions.receivedProductList(products);
			self.getProductData(products[0].id);
		});
	}
	getProductData(id) {
		var self = this;

		makeAjaxRequest({
			operation: "/@/products/getProduct",
			data: {id: id}
		}, (err, response) => {
			if (err) { alert(err); }
			ServerActions.recievedProductData(JSON.parse(response));
		});
	}
}

export default new API();