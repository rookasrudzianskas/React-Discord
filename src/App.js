import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import Login from "./components/Login";
import {auth} from "./firebase";

function App() {

    const user = useSelector(selectUser);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                // the user is logged in
            } else {
                // not logged in

            }
        })
    }, []);

  return (
    <div className="app">
        {user ? (
            <>
                <Sidebar />

                <Chat />
            </>
            ) : (
                <Login />
        )}
    </div>
  );
}

export default App;
