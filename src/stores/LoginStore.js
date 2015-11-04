import events from 'events';
import cookie from 'cookie';
import Dispatcher from '../dispatcher.js';
import ActionConsts from '../constants/ActionConstants';

function logTheUserIn(loginObj) {
	document.cookie = cookie.serialize("token", loginObj.token);
}

function logTheUserOut() {
	document.cookie = cookie.serialize("token", "");
}

class LoginStore extends events.EventEmitter {
	isLoggedIn() {
		return !!cookie.parse(document.cookie).token;
	}
	emitChange() {
		this.emit('change');
	}
	addChangeListener(callback) {
		this.on('change', callback);
	}
}

var Store = new LoginStore();

Dispatcher.register((payload) => {
	var action = payload.action;

	switch(action.actionType) {
		case ActionConsts.USER_LOGGED_IN:
			logTheUserIn(action.loginObj);
			break;
		case ActionConsts.USER_LOGGED_OUT:
			logTheUserOut();
			break;
		default:
			return true;
	}

	Store.emitChange();
	return true;
});

export default Store;