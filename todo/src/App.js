import React from "react";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Todo from "./componants/Todo"

class App extends React.Component {
    render () {
      return<>
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
      </>
    };
  }

export default App;
