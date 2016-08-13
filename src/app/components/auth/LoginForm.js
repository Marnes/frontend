import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

import {userLoginRequest} from '../../actions/authAction';

class LoginForm extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.navigateToRegister = this.navigateToRegister.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}, isLoading: false});
            this.props.userLoginRequest(this.state).then(
                (res) => alert('LOGGED IN'),
                (err) => alert('SOMETHING WENT WRONG')
            );
        }
    }

    navigateToRegister(e) {
        e.preventDefault();

        this.context.router.push('/register')
    }

    isValid() {
        return true;
    }

    render() {
        return (
            <form action="#" onSubmit={this.onSubmit}>
                <div className="login-container">
                    <div className="input large">
                        <TextField floatingLabelText="Email address" name="email" value={this.state.email}
                                   onChange={this.onChange}/>
                    </div>
                    <div className="input large">
                        <TextField floatingLabelText="Password" name="password" type="password"
                                   value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div className="login-actions">
                        <RaisedButton label="Login" primary={true} type="submit" disabled={this.state.isLoading}/>
                        <RaisedButton label="Register" onClick={this.navigateToRegister} secondary={true}/>
                    </div>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(null, {userLoginRequest})(LoginForm);