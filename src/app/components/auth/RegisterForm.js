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
            surname: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.navigateToHome = this.navigateToHome.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({errors: {}, isLoading: true});
        this.props.userRegisterRequest(this.state).then(
            (res) => this.setState({isLoading: false}),
            (err) => this.setState({errors: err.response.data, isLoading: false})
        );
    }

    navigateToHome(e) {
        e.preventDefault();
        this.context.router.push('/')
    }

    render() {
        return (
            <form action="#" onSubmit={this.onSubmit}>
                <div className="register-container">
                    <div className="input large">
                        <TextField floatingLabelText="Email address" name="email" value={this.state.email}
                                   onChange={this.onChange} errorText={this.state.errors.email}/>
                    </div>
                    <div className="input large">
                        <TextField floatingLabelText="Password" name="password" type="password"
                                   value={this.state.password} onChange={this.onChange} errorText={this.state.errors.password}/>
                    </div>
                    <div className="input large">
                        <TextField floatingLabelText="Name" name="name"
                                   value={this.state.name} onChange={this.onChange} errorText={this.state.errors.name}/>
                    </div>
                    <div className="input large">
                        <TextField floatingLabelText="Surname" name="surname"
                                   value={this.state.surname} onChange={this.onChange} errorText={this.state.errors.surname}/>
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