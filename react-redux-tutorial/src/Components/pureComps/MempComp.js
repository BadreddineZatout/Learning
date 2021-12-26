import React from 'react'

function MempComp({name}) {
    console.log('rendering memo compenent');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MempComp)
