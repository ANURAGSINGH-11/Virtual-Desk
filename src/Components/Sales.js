import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import './styles/Sales.css';
class Sales extends Component {
    render() {
        return (
            <div>
                <h2 id="sales_title">Our Sales</h2>
                <Chart
  width={'80%'}
  height={'500px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  className="chart"
  data={[
    ['Task', 'Hours per Day'],
    ['Veemy', 11],
    ['Zeplo', 2],
    ['TirnityApp', 2],
    ['Weez', 2],
    ['Finacialle', 7],
  ]}
  options={{
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
<Chart
  width={'80%'}
  height={'300px'}
  className="chart"
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350],
  ]}
  options={{
    // Material design options
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
            </div>
        )
    }
}

export default Sales
