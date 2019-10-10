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
    },
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

  //
// start shoulders Annotations 
//

var shouldersoptions = {
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
    id: 'shoulders_posture_results'
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
    name: "Shoulders Assessment Score",
    data: [14, 17, 27, 33, 36]
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
//end shoulders annotations

// start shoulders posture chart
var chart = new ApexCharts(
  document.querySelector("#shoulders-posture-chart"),
  shouldersoptions
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
  },
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
// end shoulders posture chart

//
// start trunk Annotations 
//

var trunkoptions = {
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
    id: 'trunk_posture_results'
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
    name: "Trunk Assessment Score",
    data: [17, 21, 25, 27, 29]
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
//end trunk annotations

// start trunk posture chart
var chart = new ApexCharts(
  document.querySelector("#trunk-posture-chart"),
  trunkoptions
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
  },
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
// end trunk posture chart

//
// start hips Annotations 
//

var hipsoptions = {
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
    id: 'hips_posture_results'
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
    name: "Hips Assessment Score",
    data: [12, 14, 23, 29, 39]
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
//end hips annotations

// start hips posture chart
var chart = new ApexCharts(
  document.querySelector("#hips-posture-chart"),
  hipsoptions
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
  },
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
// end hips posture chart


//
// start legs Annotations 
//

var legsoptions = {
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
    id: 'legs_posture_results'
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
    name: "Legs Assessment Score",
    data: [22, 28, 34, 40, 48]
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
//end legs annotations

// start legs posture chart
var chart = new ApexCharts(
  document.querySelector("#legs-posture-chart"),
  legsoptions
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
  },
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
// end legs posture chart

//
// start ankles Annotations 
//

var anklesoptions = {
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
    id: 'ankles_posture_results'
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
    name: "Ankles Assessment Score",
    data: [24, 36, 38, 45, 50]
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
//end ankles annotations

// start ankles posture chart
var chart = new ApexCharts(
  document.querySelector("#ankles-posture-chart"),
  anklesoptions
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
  },
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
// end ankles posture chart