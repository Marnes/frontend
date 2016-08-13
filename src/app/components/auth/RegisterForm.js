import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

import {userRegisterRequest} from '../../actions/authAction';

class RegisterForm extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            surname: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.navigateToHome = this.navigateToHome.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}, isLoading: false});
            this.props.userRegisterRequest(this.state).then(
                (res) => alert('REGISTERED'),
                (err) => alert('SOMETHING WENT WRONG')
            );
        }
    }

    navigateToHome(e) {
        e.preventDefault();
        this.context.router.push('/')
    }


    isValid() {
        return true;
    }

    render() {
        return (
            <form action="#" onSubmit={this.onSubmit}>
                <div className="register-container">
                    <div className="input large">
                        <TextField floatingLabelText="Email address" name="email" value={this.state.email}
                                   onChange={this.onChange}/>
                    </div>
                    <div className="input large">
                        <TextField floatingLabelText="Password" name="password" type="password"
                                   value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div className="input large">
                        <TextField floatingLabelText="Name" name="name"
                                   value={this.state.name} onChange={this.onChange}/>
                    </div>
                    <div className="input large">
                        <TextField floatingLabelText="Surname" name="surname"
                                   value={this.state.surname} onChange={this.onChange}/>
                    </div>
                    <div className="auth-actions">
                        <RaisedButton label="Register" primary={true} type="submit" disabled={this.state.isLoading}/>
                        <RaisedButton label="Cancel" onClick={this.navigateToHome} secondary={true}/>
                    </div>
                </div>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    userRegisterRequest: React.PropTypes.func.isRequired
};

RegisterForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(null, {userRegisterRequest})(RegisterForm);