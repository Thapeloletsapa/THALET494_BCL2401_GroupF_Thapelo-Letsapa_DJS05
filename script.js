import { createStore } from './store.js';
import { tallyReducer } from './reducer.js';
import { addAction, subtractAction, resetAction } from './actions.js';
import { logState } from './subscriptions.js';

const initialState = { count: 0 };
const store = createStore(tallyReducer, initialState);

logState(store);

// Dispatching actions
store.dispatch(addAction());     // New state: { count: 1 }
store.dispatch(addAction());     // New state: { count: 2 }
store.dispatch(subtractAction()); // New state: { count: 1 }
store.dispatch(resetAction());    // New state: { count: 0 }
