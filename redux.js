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
  
  // Scenario 1: Initial State Verification
  console.log('Initial state:', store.getState());
  
  // Scenario 2: Incrementing the Counter
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'ADD' });
  
  // Scenario 3: Decrementing the Counter
  store.dispatch({ type: 'SUBTRACT' });
  
  // Scenario 4: Resetting the Counter
  store.dispatch({ type: 'RESET' });