import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { categoriaReducer } from '../reducers/categoriaReducer';
import { mesaReducer } from '../reducers/mesaReducer';
import { pedidoReducer } from '../reducers/pedidoReducer';
import { platoReducer } from '../reducers/platoReducer';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	mesa: mesaReducer,
	categoria: categoriaReducer,
	plato: platoReducer,
	pedido: pedidoReducer,
	auth: authReducer
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
