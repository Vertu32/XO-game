import React from "react";



const image = {
    '': '',
    '0': 'O',
    '1': 'X'
}

const Square = function({onClick, type}) {

    


    return (
        <div className="square" onClick={() => !type && onClick()}>
            {image[type]}
        </div>
    )

}

export default Square;