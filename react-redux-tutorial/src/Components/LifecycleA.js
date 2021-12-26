import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'badi'
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA did mount');
    }

    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentUpdate');
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'badreddine'
        })
    }
    
    render() {
        console.log('Lifecycle A render');
        return (
            <div>
                <h1>Lifecycle A</h1>
                <button onClick={this.changeState} >Change State</button>
            </div>
        )
    }
}

export default LifecycleA

