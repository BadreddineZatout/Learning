import React, { Component } from 'react'
import { UserConsumer } from './context/userContext'

class NameA extends Component {
    render() {
        return (
                <UserConsumer>
                    {
                        (username) => {
                            return <h1> Hello {username} </h1>
                        }
                    }
                </UserConsumer>
        )
    }
}

export default NameA
