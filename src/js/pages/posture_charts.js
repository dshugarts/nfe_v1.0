//
// start neck Annotations 
//

var neckoptions = {
    annotations: {
      yaxis: [{
        y: 8200,
        borderColor: '#0acf97',
        label: {
          borderColor: '#0acf97',
          style: {
            color: '#fff',
            background: '#0acf97',
          },
          text: 'Support',
        }
      }],
      xaxis: [{
        x: new Date('23 Nov 2017').getTime(),
        borderColor: '#775DD0',
        label: {
          borderColor: '#775DD0',
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'Anno Test',
        }
      }, {
        x: new Date('03 Dec 2017').getTime(),
        borderColor: '#ffbc00',
        label: {
          borderColor: '#ffbc00',
          style: {
            color: '#fff',
            background: '#ffbc00',
          },
          orientation: 'horizontal',
          text: 'New Beginning',
        }
      }],
      points: [{
        x: new Date('27 Nov 2017').getTime(),
        y: 8506.9,
        marker: {
          size: 8,
          fillColor: '#fff',
          strokeColor: '#fa5c7c',
          radius: 2
        },
        label: {
          borderColor: '#fa5c7c',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#fa5c7c',
          },
  
          text: 'Point Annotation',
        }
      }]
    },
    chart: {
      height: 380,
      type: 'line',
      id: 'areachart-2'
    },
    colors: ['#39afd1'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [3],
      curve: 'straight'
    },
    series: [{
      data: series.monthDataSeries1.prices
    }],
    title: {
      text: 'Line with Annotations',
      align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
      type: 'datetime',
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.2
      },
      borderColor: '#f1f3fa'
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        legend: {
          show: false
        },
      }
    }]
  }
  //end neck annotations
  
  // start neck posture chart
  var chart = new ApexCharts(
    document.querySelector("#neck-posture-chart"),
    neckoptions
  );
  
  chart.render();
  
  //
  // Syncing charts
  //
  
  var optionsline2 = {
    chart: {
      type: 'line',
      height: 160,
      id: 'fb',
      group: 'social'
    },
    colors: ['#727cf5'],
    stroke: {
      width: [3],
      curve: 'straight'
    },
    toolbar: {
      tools: {
        selection: false
      }
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      followCursor: false,
      theme: 'dark',
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        title: {
          formatter: function() {
            return ''
          }
        }
      }
    },
    series: [{
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 30
      })
    }],
    xaxis: {
      type: 'datetime'
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.2
      },
      borderColor: '#f1f3fa'
    }
  }
  // end neck posture chart