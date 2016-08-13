import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './Layout.css'

class AuthLayout extends React.Component {
    render() {
        const {main} = this.props;

        return (
            <MuiThemeProvider>
                <div>
                    <div className="session-container">
                        <div className="header">
                            Welcome to Frontend
                        </div>
                        <div className="content">
                            {main}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

AuthLayout.propTypes = {
    main: PropTypes.object.isRequired
};

export default AuthLayout;