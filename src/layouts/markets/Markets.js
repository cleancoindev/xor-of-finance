import React, { Component } from 'react'
import { Table } from "react-bootstrap";
import { Link } from 'react-router'

import CreateMarketContainer from '../../ui/createMarket/CreateMarketContainer';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Markets extends Component {
  constructor(props) {  
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Markets</h1>

            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Risk</th>
                  <th># Debtors</th>
                  <th># Creditors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link to="/markets/2">2</Link></td>
                  <td>3.2</td>
                  <td>8</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td><Link to="/markets/3">3</Link></td>
                  <td>5.4</td>
                  <td>4</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td><Link to="/markets/1">1</Link></td>
                  <td>1.2</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td><Link to="/markets/5">5</Link></td>
                  <td>1.2</td>
                  <td>8</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td><Link to="/markets/8">8</Link></td>
                  <td>1.2</td>
                  <td>20</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td><Link to="/markets/9">9</Link></td>
                  <td>1.2</td>
                  <td>34</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td><Link to="/markets/10">10</Link></td>
                  <td>1.2</td>
                  <td>3</td>
                  <td>20</td>
                </tr>
              </tbody>
            </Table>

            <br/><br/>

            <CreateMarketContainer/>
            <br/><br/>

          </div>
        </div>
      </main>
    )
  }
}

export default Markets
