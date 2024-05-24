const createStore = (reducer) => {
    let state = reducer(undefined, { type: '__INIT__' });
    let listeners = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    };
  
    return { getState, dispatch, subscribe };
  };
  
  const tallyReducer = (state = 0, action) => {
    switch (action.type) {
      case 'ADD':
        return state + 1;
      case 'SUBTRACT':
        return state - 1;
      case 'RESET':
        return 0;
      default:
        return state;
    }
  };
  
const store = createStore(tallyReducer);

store.subscribe(() => {
  console.log('New state:', store.getState());
});

// Scenario 2: Incrementing the Counter
store.dispatch({ type: 'ADD' });  // New state: 1
store.dispatch({ type: 'ADD' });  // New state: 2

// Scenario 3: Decrementing the Counter
store.dispatch({ type: 'SUBTRACT' });  // New state: 1

// Scenario 4: Resetting the Counter
store.dispatch({ type: 'RESET' });  // New state: 0