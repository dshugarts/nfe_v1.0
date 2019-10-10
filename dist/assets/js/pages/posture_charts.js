//
// start neck Annotations 
//

var neckoptions = {
    annotations: {
      yaxis: [{
        y: 0,
        borderColor: '#0acf97',
        label: {
          borderColor: '#0acf97',
          style: {
            color: '#fff',
            background: '#0acf97',
          },
          position: 'left',
          offsetX: 55,
          text: 'Level 1',
        }
      }, {
        y: 18,
        borderColor: '#0acf97',
        label: {
          borderColor: '#0acf97',
          style: {
            color: '#fff',
            background: '#0acf97',
          },
          position: 'left',
          offsetX: 55,
          text: 'Level 2',
      }
    }, {
      y: 36,
        borderColor: '#0acf97',
        label: {
          borderColor: '#0acf97',
          style: {
            color: '#fff',
            background: '#0acf97',
          },
          position: 'left',
          offsetX: 55,
          text: 'Level 3',
      }
    }, {
      y: 54,
        borderColor: '#0acf97',
        label: {
          borderColor: '#0acf97',
          style: {
            color: '#fff',
            background: '#0acf97',
          },
          position: 'left',
          offsetX: 55,
          text: 'Phase 2',
      }
      }],
    },
    chart: {
      height: 380,
      type: 'line',
      id: 'neck_posture_results'
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
      name: "Neck Assessment Score",
      data: [12, 19, 27, 34, 41]
    }],
    xaxis: {
      categories: ['Jan', 'Mar', 'Jun', 'Aug', 'Nov'],
    },
    yaxis: {
      tickAmount: 6,
      min: 0,
      max: 54,
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
        // title: {
        //   formatter: function() {
        //     return ''
        //   }
        // }
      }
    },
    // series: [{
    //   data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
    //     min: 10,
    //     max: 30
    //   })
    // }],
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