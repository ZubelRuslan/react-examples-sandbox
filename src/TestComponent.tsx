import ReactDOM from 'react-dom';
import React, { MouseEvent } from "react";


class Clock extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: 'Ruslan'
        }
    }

    timerId;

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    tick() {
        this.setState({
            date: new Date()
        }, () => {
            console.log(this.state.date);
        })

    }

    getDeliveredStateFromProps() {

    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): any | null {
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    test = false

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                {this.props}
                <h2>
                    Datetime: {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        )
    }
}



ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)















interface ToggleState {
    isToggleOn: boolean;
    name: string;
}


class Toggle extends React.Component<any, ToggleState> {

    private static initialName = 'Ruslan';

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            name: Toggle.initialName
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: Toggle.initialName + new Date()
            })
        }, 3000)
    }

    handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('HELLO BUTTON')
        event.stopPropagation();

        this.setState((prevState: ToggleState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
        this.render();
    }

    handleDivClick = (event: MouseEvent<HTMLDivElement>) => {
        console.log('HELLO DIV')
    }

    render() {
        const { name: myName, isToggleOn } = this.state;
        return (
            <div onClick={this.handleDivClick}>
                <button onClick={this.handleClick}>
                    {isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}


export class Example extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        };
    }

    array = [1,2,3,4,5,6]

    render() {
        return (
            <>
                {this.array.map((elem, index) => <React.Fragment key={index} onClick={}>{elem}</React.Fragment>)}
            </>
        )
    }
}



const TestFC = () => {

    this.state = {
        firstName: ''
    }

    const handleFirstNameChange = (event) => {
        this.state.firstName = event.target.value;
    }

    return <>
        <input value={this.state.firstName} onChange={handleFirstNameChange}/>
        {this.state.firstName}
    </>
}
