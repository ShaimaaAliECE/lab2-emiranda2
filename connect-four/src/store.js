import { createStore } from 'redux';

//Initial state for my store
const initial = {
    current: 'red',//can also be yellow
    board: [
        [], //column 0
        [], //column 1
        [], //column 2
        [], //column 3
        [], //column 4
        [], //column 5
        [], //column 6
    ],
};

function reducerstate(state, action){
    if (action.type === 'DROP_TILE'){
        //console.log("dropping onto column " + action.payload)
        const tile = state.current;
        const col = state.board[action.payload].concat(tile);//our new column

        const board = state.board.slice();
        board[action.payload] = col;

        return{
            current: state.current ==='red' ? 'yellow' : 'red',
            board: board,
        }
    }
    return state;
}

export default createStore(reducer, action);


