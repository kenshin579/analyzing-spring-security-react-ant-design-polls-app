import React, {Component} from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';
//
// import {getCurrentUser} from '../util/APIUtils';
import {ACCESS_TOKEN} from '../constants';
import LoadingIndicator from '../common/LoadingIndicator';

import {Layout, notification} from 'antd';

const {Content} = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        }
        // this.handleLogout = this.handleLogout.bind(this);
        // this.loadCurrentUser = this.loadCurrentUser.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        //
        // notification.config({
        //     placement: 'topRight',
        //     top: 70,
        //     duration: 3,
        // });
    }
    //
    // loadCurrentUser() {
    //     this.setState({
    //         isLoading: true
    //     });
    //     getCurrentUser()
    //         .then(response => {
    //             this.setState({
    //                 currentUser: response,
    //                 isAuthenticated: true,
    //                 isLoading: false
    //             });
    //         }).catch(error => {
    //         this.setState({
    //             isLoading: false
    //         });
    //     });
    // }

    componentDidMount() {
        // this.loadCurrentUser();
    }

    handleLogout(redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        this.props.history.push(redirectTo);

        notification[notificationType]({
            message: 'Polling App',
            description: description,
        });
    }

    handleLogin() {
        notification.success({
            message: 'Polling App',
            description: "You're successfully logged in.",
        });
        this.loadCurrentUser();
        this.props.history.push("/");
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingIndicator/>
        }
        return (
            <div>hello</div>
        );
    }
}

// export default withRouter(App);
export default App;
