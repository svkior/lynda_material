import React from 'react'

import {Layer, Line, Text} from 'react-konva'

export const Board = ({unit, size, rows}) => {
    let grid = [];
    let stroke = 'grey'
    let strokeWidth = 10
    for(let i = 1; i < rows; i++){
        let position = unit * i;
        grid.push(
            <Line 
             points={[position, 0, position, size]}
             stroke={stroke}
             strokeWidth={strokeWidth}
             key={i+'v'}
            />
        )
        grid.push(
            <Line 
             points={[0, position, size, position]}
             stroke={stroke}
             strokeWidth={strokeWidth}
             key={i+'h'}
            />
        )
        
    }
    return (
        <Layer>
            {grid}
        </Layer>
    )
}

export const Squares = ({unit, ownMark, win, coordinates, move, gameState, gameOver, yourTurn} ) => {
    let squares = coordinates.map(
        (pos, idx) => {
            let makeMove = move;
            let mark = gameState[idx];
            let fill = 'black'
            if (win && win.includes(idx)) {
                fill = 'lightgreen'
            }
            if(gameOver || !yourTurn || mark) {
                makeMove = () => console.log('nope!')
            }

            return <Text 
                    key={idx}
                    index={idx}
                    x={pos[0]}
                    y={pos[1]}
                    fontSize={unit}
                    width={unit}
                    text={mark}
                    fill={fill}
                    fontFamily={'Helvetica'}
                    align={'center'}
                    onClick={ (evt) => {
                        let index = evt.target.index;
                        makeMove(index, ownMark)
                    }}
            />
        }
    )
    return <Layer>
        {squares}
            
    </Layer>;
}