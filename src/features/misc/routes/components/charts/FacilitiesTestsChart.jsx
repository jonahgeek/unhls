import React from 'react';
import ReactApexChart from 'react-apexcharts';

class FacilitiesTestsChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Tests',
          data: [40, 30, 48, 70, 40, 80, 90, 50, 34, 38],
        },
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: 'Facilities Corresponding to Tests',
        },
        xaxis: {
          categories: [
            'Hoima Regional Referral Hospital',
            'Case Medical Centre Hospital',
            'Adjumani Hospital',
            'Mbale Regional Referral Hospital',
            'Kagadi Hospital',
            'Koboko Hospital',
            'Rukunyu Hospital',
            'Ssembabule HC IV',
            'Aber Hospital',
          ],
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

export default FacilitiesTestsChart;
