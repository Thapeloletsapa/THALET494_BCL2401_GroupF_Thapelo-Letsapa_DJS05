export const logState = (store) => {
    store.subscribe(() => {
      console.log('New state:', store.getState());
    });
  };
  