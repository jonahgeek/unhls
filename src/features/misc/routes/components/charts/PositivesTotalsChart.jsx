import React from 'react';
import ReactApexChart from 'react-apexcharts';

class PositivesTotalsChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Positives',
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: 'Total Tests',
          data: [53, 32, 33, 52, 13, 43, 32],
        },
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: '100%',
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff'],
        },
        title: {
          text: 'Positive vs. Total Tests',
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + 'K';
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default PositivesTotalsChart;
