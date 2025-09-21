import React from "react";
import MyHeader from '../Header/MyHeader';
import MyItems from "./MyItems";
import MyProfile from "./MyProfile"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <MyHeader></MyHeader>
          <Routes>
            <Route path="/items" element={<MyItems/>}></Route>
            <Route path="/viewprofile" element={<MyProfile/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
export default App;