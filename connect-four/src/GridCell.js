import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropTile } from './action';


class GridCell extends Component{
    //sends the tile to the column that was clicked
    handleClick(){
        console.log(`Clicked on column ${this.props.x}`)

        this.props.sendTileDrop(this.props.x);
    }

    render(){
        //define variables
        const board = this.props.board;
        const x = this.props.x;
        const y = this.props.y;

        let classes = 'cell';

        //if  the cell is red it is p2
if(board[x][y] != undefined){
    if(board[x][y]=== 'red'){
        classes += ' p2';
        //otherwise p1 (from app.css)
    }else{
        classes += ' p1';
    }
}

//change the colour of the cell
        return(
            <button className={classes} onClick={() => this.handleClick()}>
                <p>{this.props.x}, {this.props.y}</p>
            </button>
        );
        
    }
}

const stateToProps = state => {
    return{
        board: state.board,
    };
};

const dispatchToProps = dispatch => {
    return{
        sendTileDrop: col => dispatch(dropTile(col)),
    };
};



export default connect(stateToProps, dispatchToProps)(GridCell);
//export default GridCell;