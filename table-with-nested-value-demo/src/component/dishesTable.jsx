import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class DishesTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "cuisine.name", label: "Cuisine" },
    { path: "price", label: "Price" },
    { path: "starRating", label: "Star Rating" },
    {
      key: "favourite",
      content: (dish) => (
        <Like liked={dish.liked} onClick={() => this.props.onLike(dish)}>
          1
        </Like>
      ),
    },
  ];

  render() {
    const { dishes, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={dishes}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default DishesTable;
