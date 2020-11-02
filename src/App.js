import React from 'react';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/Messages/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import Login from './Components/Login/Login';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={() => <DialogsContainer store={props.store} />} />
                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer />} />
                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/login'
                        render={() => <Login />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
