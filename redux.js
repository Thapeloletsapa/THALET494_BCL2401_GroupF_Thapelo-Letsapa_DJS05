const createStore = (reducer) => {
    let state;
    let listeners = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l!== listener);
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
  
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'SUBTRACT' });
  store.dispatch({ type: 'RESET' });