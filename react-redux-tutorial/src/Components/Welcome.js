import React, {Component} from 'react';
import ComponentA from './context/ComponentA';
import { UserProvider } from './context/userContext';
import CounterOne from './CounterOne';
import CounterThree from './CounterThree';
import CounterTwo from './CounterTwo';
import ErrorBoundary from './error/ErrorBoundary';
import Hero from './error/Hero';
import FetchingDataOne from './FetchingDataOne';
import FetchingDataTwo from './FetchingDataTwo';
import FragmentDemo from './FragmentDemo';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import LifecycleA from './LifecycleA';
import NameA from './NameA';
import ParentComp from './pureComps/ParentComp';
import FocusInput from './refs/FocusInput';
import FRParentInput from './refs/FRParentInput';
import RefsDemo from './refs/RefsDemo';
import ClickCounterTwo from './renderProps/ClickCounterTwo';
import Counter from './renderProps/Counter';
import HoverCounterTwo from './renderProps/HoverCounterTwo';

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
            </ErrorBoundary>
            <ClickCounter name='badi' />
            <HoverCounter name='badi' /> 
            <Counter render={ (count, incrementCount) => (
                <ClickCounterTwo count={count} incrementCount={incrementCount} />
            ) }/> 
            <Counter render={ (count, incrementCount) => (
                <HoverCounterTwo count={count} incrementCount={incrementCount} />
            ) }/>
            <UserProvider value='Badreddine'>
                <NameA /> 
                <ComponentA />
            </UserProvider>
            <CounterOne />
            <CounterTwo />
            <CounterThree />*/}
            <FetchingDataOne />
            <FetchingDataTwo />
        </div>
        );
    }
}
 
export default Welcome;