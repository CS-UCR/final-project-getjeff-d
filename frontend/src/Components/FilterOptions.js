import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom'


class FilterOptions extends React.Component {
    render() {
      return (
        <div class="sidenav">
          <div class="accordion"><h2><u>Filter:</u></h2></div>
          <div class="panel"><p>test</p></div>
          <button class="accordion"><h3>City</h3></button>
          <div class="panel">sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text </div>
          <button class="accordion"><h3>State</h3></button>
          <div class="panel">sample text</div>
          <button class="accordion"><h3>Zipcode</h3></button>
          <div class="panel">sample text</div>
          <Link to="/upload" class="uploadButton"><h1>Upload</h1></Link>
        </div>
      );
    }
  }

export default FilterOptions;