import React, {ChangeEvent} from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    input: any;

    handleSubmit(event) {
        alert('Your name is ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Print your name
                    <input defaultValue="John"
                           type="text"
                           ref={this.input}
                    />
                </label>
                <input type="submit"
                       value="Submit"
                />
            </form>
        );
    }
}

interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label?: string
}

interface InputCompProps {
    value: string;
    onChange: (event: string) => void
}

interface FullNameState {
    firstName: string;
    lastName: string;
}

class FullName extends React.Component<any, FullNameState> {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    firstNameHandler = (event: string) => {
        this.setState({
            firstName: event
        })
    }

    lastNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
        return (
            <>
                <FirstNameInputComponent value={this.state.firstName} onChange={this.firstNameHandler}/>
                <LastNameInput value={this.state.lastName} onChange={this.lastNameHandler}/>
                <FullNameView fullName={`${this.state.firstName} ${this.state.lastName}`}/>
            </>
        );
    }
}

class FirstNameInputComponent extends React.Component<InputCompProps, {}> {
    constructor(props) {
        super(props);
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <label> Print your FIRST name
                <input value={this.props.value}
                       onChange={this.handleInputChange}
                       type="text"
                />
            </label>
        );
    }
}


const FirstNameInput = ({value, onChange, label}: InputProps) => (
    <label> {label}
        <input value={value}
               className={}
               onChange={onChange}
               type="text"
        />
    </label>
)

const LastNameInput = ({value, onChange}: InputProps) => (
    <label> Print your LAST name
        <input value={value}
               onChange={onChange}
               type="text"
        />
    </label>
)

const FullNameView = ({ fullName }: { fullName: string }) => (
    <h1>{fullName}</h1>
)
