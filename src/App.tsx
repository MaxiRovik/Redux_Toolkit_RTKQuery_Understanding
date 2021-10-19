import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";


function App() {
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(fetchUsers())
    },[])

  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
        {JSON.stringify(users, null,1)}

    </div>
  );
}

export default App;
