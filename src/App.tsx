import React from 'react';
import './App.css';
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";




function App() {
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  // const dispatch = useAppDispatch()
  //
  //   useEffect(()=> {
  //       dispatch(fetchUsers())
  //   },[])

  return (
    <div className="App">
      {/*{isLoading && <h1>Loading...</h1>}*/}
      {/*{error && <h1>{error}</h1>}*/}
      {/*  {JSON.stringify(users, null,1)}*/}
        <div style = {{display: "flex", flexDirection: "row"}}>
            <PostContainer/>
            <PostContainer2/>
        </div>

    </div>
  );
}

export default App;
