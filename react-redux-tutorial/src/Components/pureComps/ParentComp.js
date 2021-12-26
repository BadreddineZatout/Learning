import React, { Component, PureComponent } from 'react'
import MempComp from './MempComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'badi'
        }
    }
    componentDidMount(){
        setInterval(() => {this.setState({
            name: 'badi'
        })},3000)
    }
    
    render() {
        console.log('parent component render');
        return (
            <div>
                <MempComp name={this.state.name} />
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
