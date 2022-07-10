import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DishesTable from "./component/dishesTable";
import { getDishes } from "./services/fakeDishesData";
import _ from "lodash";
import "./App.css";

class App extends Component {
  // This is same as useState hook.
  state = {
    dishes: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    // This is what happened under the useEffect hook. OR simply use useEffect hook.
    // This function is called after all the elements is correctly rendered.
    // Static data is used in this case for simplicity.
    // axios is a famous api that can be used to fetch data from an URL (async & await).
    this.setState({ dishes: getDishes() });
  }

  handleSort = (sortColumn) => {
    // When the header is clicked, the child class passes the sortColumn obj to parent class
    // (tableHeader -> dishesTable -> App)
    // setState method then updates the virtual dom.
    this.setState({ sortColumn: sortColumn });
  };

  getPageData = () => {
    // _. lodash gives accesibility to the nested value in an object.
    const { dishes, sortColumn } = this.state;
    const sorted = _.orderBy(dishes, [sortColumn.path], [sortColumn.order]);
    return { data: sorted };
  };

  handleLike = (dish) => {
    // Clone the dishes state (array), find the index of specific dish.
    // Clone the targeted object and make change on it.
    // Replace the Cloned dishes with the original state.
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
      </div>
    );
  }
}

export default App;
