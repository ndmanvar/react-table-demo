/*global undefinedVariable:false axios:false*/
/*eslint no-unused-vars:0 no-eval:0*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



import ReactTable from "react-table";
import 'react-table/react-table.css';

const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gh_data: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/repos/ndmanvar/react/commits')
      .then(({
        data
      }) => {
        this.setState({
          commits: data, // could use this.state.gh_data.push(data) as well
        });
      })
      .catch((err) => {})
  }

  render() {
    const columns = [{
        Header: 'sha',
        accessor: 'sha' // String-based value accessors!
      }, {
        Header: 'Public repos',
        accessor: 'commit.author.email'
      }];

    return (
      <ReactTable
        data={this.state.commits}
        columns={columns}
      />
    );
  }
}

export default App;
