import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DishesTable from "./component/dishesTable";
import { getDishes } from "./services/fakeDishesData";
import _ from "lodash";
import "./App.css";

class App extends Component {
  state = {
    dishes: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({ dishes: getDishes() });
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn });
  };

  getPageData = () => {
    const { dishes, sortColumn } = this.state;
    const sorted = _.orderBy(dishes, [sortColumn.path], [sortColumn.order]);
    return { data: sorted };
  };

  handleLike = (dish) => {
    const dishes = [...this.state.dishes];
    const index = dishes.indexOf(dish);
    dishes[index] = { ...dishes[index] };
    dishes[index].liked = !dishes[index].liked;
    this.setState({ dishes });
  };

  render() {
    const { sortColumn } = this.state;
    const { data: dishes } = this.getPageData();

    return (
      <div>
        <h1>Dishes you may like!</h1>
        <div className='container'>
          <DishesTable
            dishes={dishes}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onSort={this.handleSort}
          ></DishesTable>
        </div>
        <i className='fa-solid fa-utensils'></i>
      </div>
    );
  }
}

export default App;
