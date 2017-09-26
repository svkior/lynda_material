import React from 'react'

import {Stage} from 'react-konva'

import {Board} from '../styled/TicTacToe'

class TicTacToe extends React.Component {

    state = {
        rows: 3,
        gameState: new Array(9).fill(false),
        ownMark: 'X',
        otherMark: 'O',
        gameOver: false,
        yourTurn: true,
        winner: false,
        win: false
    }

    componentWillMount (){
        // when my component mounts
        let height = window.innerHeight;
        let width = window.innerWidth;
        let size = (height < width) ? height * 0.8 : width * 0.8
        let rows = this.state.rows;
        let unit = size / rows;

        let coordinates = [];

        for(let y = 0; y < rows; y++){
            for(let x = 0; x < rows; x++){
                coordinates.push([
                    x*unit,
                    y*unit
                ])
            }
        }

        this.setState({
            size,
            rows,
            unit,
            coordinates
        })
    }

    move = () => {

    }

    makeAiMove = () => {

    }

    turingTest = () => {

    }

    recordGame = () => {

    }

    render(){
        const {size,unit, rows, coordinates,gameState,win, gameOver, yourTurn, ownMark} = this.state;
        return (
            <div>
                <Stage
                    width={size}
                    height={size}
                >
                    <Board unit={unit} size={size} rows={rows}/>
                    <Squares/>
                </Stage>
            </div>
        )
    }
}

export default TicTacToe