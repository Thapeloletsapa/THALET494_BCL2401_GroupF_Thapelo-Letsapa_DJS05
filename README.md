# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

***How to Run the Code***
Clone the repository:
Copy code
git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:
Copy code
cd your-repo-name
Run the code:
Copy code
node index.js

Overview of the Approach
This project implements a simple Redux-inspired store for managing the state of a tally counter. The store is built using functional programming principles and provides the following methods:

getState: Returns the current state of the tally counter.
dispatch: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
subscribe: Accepts a function that gets called whenever the state changes. This function logs the new state to the console.
The createStore function is responsible for creating the store and managing the state. It takes a reducer function as an argument, which is used to handle state updates based on dispatched actions.

The tallyReducer function is a simple reducer that handles 'ADD', 'SUBTRACT', and 'RESET' actions. It maintains the current state of the tally counter and updates it based on the dispatched action.

The store is created by calling createStore with the tallyReducer. The subscribe method is used to log the new state to the console whenever the state changes.

This approach allows for a simple and flexible way to manage state without the complexity of UI rendering. All state changes are observable through console logs, making it easy to understand the flow of data within the application.
 
