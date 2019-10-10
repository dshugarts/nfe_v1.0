//
// Start TSE Grouped Bar Chart


var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
        },
    }  
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    colors: ["#C0C0C0", "#FFA500", "#0000ff"],
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [{
        name: 'Metabolic',
        data: [36, 36, 36, 36, 36, 36]
    },{
        name: 'Neurologic',
        data: [54, 54, 54, 36, 54, 54]
    },{
        name: 'Mechanical',
        data: [18, 18, 18, 36, 18, 18]
    }],
    xaxis: {
        categories: ["Neck", "Shoulders", "Trunk", "Hips", "Legs", "Ankles"],
    },
    legend: {
        offsetY: -10,
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#grouped-bar"),
    options
);

chart.render();

// End TSE Grouped Bar Chart