# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

### Redux Tally Project

**Introduction**

This project is a simple implementation of a Redux store, reducer, actions, and subscriptions. It demonstrates a basic tally system where the count can be incremented, decremented, and reset.

**Files** 

**store.js** 

Contains the createStore function, which creates a Redux store with a given reducer and initial state.

**reducer.js**

Contains the tallyReducer function, which handles actions and updates the state accordingly.

**actions.js**

Contains action creators for incrementing, decrementing, and resetting the count.

**subscriptions.js**

Contains the logState function, which sets up a subscription to log the new state whenever an action is dispatched.

**script.js**
The main script where the store is created, subscriptions are set up, and actions are dispatched.

## Usage
To run the project, simply execute node script.js in the terminal. This will create the store, set up the subscription, and dispatch actions to increment, decrement, and reset the count.

## Output

The output will be the new state logged to the console after each action is dispatched:

New state: { count: 1 }
New state: { count: 2 }
New state: { count: 1 }
New state: { count: 0 }

