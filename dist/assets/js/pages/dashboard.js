! function ($) {
    "use strict";

    var Dashboard = function () {
        this.$body = $("body"),
        this.charts = []
    };

    var yLabels = {
        18: 'Level 1', 36 : 'Level 2', 54 : 'Level 3'
    }

    Dashboard.prototype.respChart = function(selector,type,data, options) {
        var draw = Chart.controllers.line.prototype.draw;
        Chart.controllers.line.prototype.draw = function () {
            draw.apply(this, arguments);
            var ctx = this.chart.chart.ctx;
            var _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = 'rgba(0,0,0,0.01)';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 5;
                _stroke.apply(this, arguments);
                ctx.restore();
            }
        };


        var draw3 = Chart.controllers.bar.prototype.draw;
        Chart.controllers.bar = Chart.controllers.bar.extend({
            draw: function () {
                draw3.apply(this, arguments);
                var ctx = this.chart.chart.ctx;
                var _fill = ctx.fill;
                ctx.fill = function () {
                    ctx.save();
                    ctx.shadowColor = 'rgba(0,0,0,0.01)';
                    ctx.shadowBlur = 20;
                    ctx.shadowOffsetX = 4;
                    ctx.shadowOffsetY = 5;
                    _fill.apply(this, arguments)
                    ctx.restore();
                }
            }
        });

        //default config
        Chart.defaults.global.defaultFontColor = "#8391a2";
        Chart.defaults.scale.gridLines.color = "#8391a2";

        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // this function produce the responsive Chart JS
        function generateChart(){
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width() );
            var chart;
            switch(type){
                case 'Line':
                    chart = new Chart(ctx, {type: 'line', data: data, options: options});
                    break;
                case 'Bar':
                    chart = new Chart(ctx, {type: 'bar', data: data, options: options});
                    break;
            }
            return chart;
        };
        // run function - render chart at first load
        return generateChart();
    },
    // init various charts and returns
    Dashboard.prototype.initCharts = function() {
        var charts = [];

        //dashboard chart
        if ($('#phase-one-training').length > 0) {
            // create gradient
            var ctx = document.getElementById('phase-one-training').getContext("2d");
            var gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
            gradientStroke.addColorStop(0, 'rgba(22,134,180,1.0)');
            gradientStroke.addColorStop(1, 'rgba(22,134,180,1.0)');

            var barChart = {
                // labels: ["01", "02", "03", "04", "05", "06"],
                labels: ["Neck", "Shoulders", "Trunk", "Hips", "Legs", "Ankles"],
                datasets: [
                    {
                        label: "Core | 6 Level",
                        backgroundColor: 'rgba(22,134,180,1.0)',
                        borderColor: 'rgba(22,134,180,1.0)',
                        hoverBackgroundColor: 'rgba(22,134,180,1.0)',
                        hoverBorderColor: 'rgba(22,134,180,1.0)',
                        data: [23, 26, 30, 32, 34, 28]
                    },
                    {
                        label: "Today's Session Effort",
                        backgroundColor: 'rgba(160,101,9, 0.8)',
                        borderColor: 'rgba(160,101,9, 0.8)',
                        hoverBackgroundColor: 'rgba(160,101,9, 0.8)',
                        hoverBorderColor: 'rgba(160,101,9, 0.8)',
                        data: [18, 18, 18, 18, 18, 18]
                    }
                ]
            };
            var barOpts = {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: '#FFF',
                    titleFontColor: 'black',
                    bodyFontColor: 'grey',
                    bodyFontSize: 14,
                    displayColors: true
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            color: "rgba(0,0,0,0.05)"
                        },
                        stacked: false,
                        ticks: {
                            min: 0,
                            max: 54,
                            stepSize: 18,
                            callback: function(value, index, values) {
                              // for a value (tick) equals to 8
                              return yLabels[value];
                              // 'error' will be returned instead and displayed on your chart
                        }
                    },
                    }],
                    xAxes: [{
                        barPercentage: 0.7,
                        categoryPercentage: 0.5,
                        stacked: false,
                        gridLines: {
                            color: "rgba(0,0,0,0.01)"
                        }
                    }]
                },
                legend: {
                    position: 'bottom'
                },
            };

            charts.push(this.respChart($("#phase-one-training"), 'Bar', barChart, barOpts));
        }
    },


    //initializing various components and plugins
    Dashboard.prototype.init = function () {
        var $this = this;
        // font
        Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';        
        
        //default date range picker
        $('#dash-daterange').daterangepicker({
            singleDatePicker: true
        });

        // init charts
        $this.charts = this.initCharts();

        //init maps
        this.initMaps();

        // enable resizing matter
        $(window).on('resize', function(e) {
            $.each($this.charts, function( index, chart ) {
                try {
                    chart.destroy();
                }
                catch(err) {
                }
            });
            $this.charts = $this.initCharts();
        });
    },

    //init flotchart
    $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

    //initializing Dashboard
    function ($) {
        "use strict";
        $.Dashboard.init()
    }(window.jQuery);