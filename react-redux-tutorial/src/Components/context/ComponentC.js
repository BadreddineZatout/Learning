import React, { useContext } from 'react'
import UserContext from './userContext'

function ComponentC() {
    const user = useContext(UserContext);
    return (
        <div>
            {user}
        </div>
    )
}

export default ComponentC
