import React, { Component } from "react";

class TableHeader extends Component {
  // This will raise an event and send the current path value to the parent.
  // Compare the current column.path value with previous value (in the state)
  // If the path is the same, the order will be set to opposite
  // Otherwise, the current path will take place, order will be set to ascending by default.
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    // Rendering the shorting icon.
    // It is displaying only on the selected column which is sortColumn.path
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    //i.fa.fa-sort-asc shortcut
    if (sortColumn.order === "asc") return <i className='fa fa-sort-asc'></i>;
    return <i className='fa fa-sort-desc'></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              style={{ cursor: "pointer" }}
              className='clickable'
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
