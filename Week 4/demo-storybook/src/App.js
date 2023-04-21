import React, { Component, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import Title from "./Components/Title";
import Search from "./Components/Search";
import Sort from "./Components/Sort";
import Form from "./Components/Form/Form";
import ListItem from "./Components/ListItem";
import AddButton from "./Components/Atoms/AddButton/AddButton";

const App = () => {
  const [newItem, setNewItem] = useState("");
  return (
    <div className="container">
      <Title />
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Search />
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Sort />
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <AddButton />
          <div className="col-md-offset-7 col-md-5">
            <Form newItem={newItem} setNewItem={setNewItem} />
          </div>
        </div>
      </div>
      <div className="row marginB10"></div>
      <ListItem newItem={newItem} />
    </div>
  );
};

export default App;
