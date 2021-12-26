import React, {Component} from 'react';
import ErrorBoundary from './error/ErrorBoundary';
import Hero from './error/Hero';
import FragmentDemo from './FragmentDemo';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import LifecycleA from './LifecycleA';
import ParentComp from './pureComps/ParentComp';
import FocusInput from './refs/FocusInput';
import FRParentInput from './refs/FRParentInput';
import RefsDemo from './refs/RefsDemo';

class Welcome extends Component {
    render() { 
        return (
        <div>
            <h1>Welcome to Badi</h1>
            {/* <LifecycleA /> 
            <FragmentDemo />
            <ParentComp />
            <RefsDemo />
            <FocusInput /> 
            <FRParentInput />
            <ErrorBoundary>
                <Hero heroName='Batman' />
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName='joker' />
            </ErrorBoundary>*/}
            <ClickCounter />
            <HoverCounter />
        </div>
        );
    }
}
 
export default Welcome;