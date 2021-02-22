import "./App.css";
import React, { Component } from "react";
import Lists from "./Lists";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTrash);

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  updateHandler = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      this.setState({
        items: items,
      });
    });
  };

  render() {
    return (
      <div className="container divWidth mt-2">
        <h1>Todo App</h1>
        <div className="input-group">
          <form onSubmit={this.addItem}>
            <input
              className="handleInput"
              onChange={this.handleInput}
              value={this.state.currentItem.text}
            />
            <button
              type="submit"
              className="btn btn-success"
              style={{ marginTop: "-3px" }}
            >
              Add
            </button>
          </form>
        </div>
        <Lists
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateHandler={this.updateHandler}
        ></Lists>
      </div>
    );
  }
}

export default App;
