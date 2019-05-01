// Add the nodes option through an event call. We want to start with the parent
// item and apply separate colors to each child element, then the same color to
// grandchildren.

(function(H) {
  H.wrap(H.seriesTypes.networkgraph.prototype.pointClass.prototype, 'renderLink', function(proceed) {
    var renderer = this.series.chart.renderer

    proceed.call(this, arguments)

		// Adding the specific id to every node
    if (this.graphic) {
      this.graphic.attr({
        id: 'highcharts-node-' + this.fromNode.name + '-' + this.toNode.name,
      })
    }

    // Adding the label (by textPath element)
    if (!this.label) {
      this.label = renderer.createElement('text')
        .add(this.series.group)

      renderer.createElement('textPath')
        .attr({
          startOffset: "50%",
          'text-anchor': "middle",
          href: '#highcharts-node-' + this.fromNode.name + '-' + this.toNode.name,
          usePath: false,
          text: this.options.connectionLabel
        })
        .add(this.label)
        
    }
  })
})(Highcharts)

/*
let persons =  ['John Doe', 'Marge']
let companies = ['Tesla','Ford']
let restaurants = ['Peter Luger Steak House', 'Chic-Fil-A']
let locations = ['California','Michigan']
let activities = ['Wine and Dine', 'Hiking']
*/
let persons =  ['John Doe', 'Marge','Michael Scott','Pickle Rick','Leslie Knope','Walter White','Cartman','Tommy Shelby']
let companies = ['Tesla','Ford','Microsoft','NBC','Parks Department','Oracle','Google','MTA']
let restaurants = ['Peter Luger Steak House', 'Chic-Fil-A','Trattoria Trecolori','Greek Tavern','Los Tacos No 1','Indian Accent',
'Jimmy Johns','Open Pancake House']
let locations = ['California','Michigan','Washington','New York','Wyoming','Arkansas','New Jersey','Missippi']
let activities = ['Wine and Dine','Hiking','Fitness','Live concerts','EDM','Art','Museums','Tapas']


Highcharts.chart('container', {

  legend: {
    enabled: true,
    y: -40,
    bubbleLegend: {
        enabled: true,
        borderWidth: 2,
        ranges: [{
            borderColor: '#1aadce',
            connectorColor: '#1aadce'
        }, {
            borderColor: '#0d233a',
            connectorColor: '#0d233a'
        }, {
            borderColor: '#f28f43',
            connectorColor: '#f28f43'
        }]
    }
},
    chart: {
        type: 'networkgraph',
        height: '100%'
    },
    title: {
        text: 'TravFiller'
    },
    subtitle: {
        text: 'A Knowledge Graph Simulation'
    },
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to','color'],
       
            layoutAlgorithm: {
              initialPositions : "circle",
              enableSimulation: true
                // friction: -0.9
            }
        }
    },
    series: [{
      keys: ['from', 'to', 'color'],
        dataLabels: {
            enabled: true,
            linkFormat: ''
        },

      // nodes : nodes,
        nodes : [{
          id:'Jon Doe',
          color : `blue`,
          dataLabels : { format : 'Jon Doe'},
          marker : { radius : 40 },
        },
        {
          id:'Marge',
          color : `blue`,
          dataLabels : { format : 'Marge'},
          marker : { radius : 34 },
        },
        {
          id:'Michael Scott',
          color : `blue`,
          dataLabels : { format : 'Michael Scott'},
          marker : { radius : 27 },
        },
        {
          id:'Pickle Rick',
          color : `blue`,
          dataLabels : { format : 'Pickle Rick'},
          marker : { radius : 15 },
        },
        {
          id:'Leslie Knope',
          color : `blue`,
          dataLabels : { format : 'Leslie Knope'},
          marker : { radius : 10 },
        },
        {
          id:'Walter White',
          color : `blue`,
          dataLabels : { format : 'Walter White'},
          marker : { radius : 18 },
        },
        {
          id:'Cartman',
          color : `blue`,
          dataLabels : { format : 'Cartman'},
          marker : { radius : 22 },
        },
        {
          id:'Tommy Shelby',
          color : `blue`,
          dataLabels : { format : 'Tommy Shelby'},
          marker : { radius : 20 },

        },

        {
          id:'New York',
          color : `red`,
          dataLabels : { format : 'New York'},
          marker : { radius : 25 },

        },

        {
          id:'Wyoming',
          color : `red`,
          dataLabels : { format : 'Wyoming'},
          marker : { radius : 32 },

        },

        {
          id:'Google',
          color : `gray`,
          dataLabels : { format : 'Google'},
          marker : { radius : 19 },

        },

        {
          id:'Whole Foods',
          color : `gray`,
          dataLabels : { format : 'Whole Foods'},
          marker : { radius : 27 },

        },

        {
          id:'Parks Department',
          color : `gray`,
          dataLabels : { format : 'Parks Department'},
          marker : { radius : 21 },

        },
        {
          id:'Chic-fil-A',
          color : `orange`,
          dataLabels : { format : 'Chic-fil-A'},
          marker : { radius : 21 },

        },
        {
          id:'Peter Luger Steak House',
          color : `orange`,
          dataLabels : { format : 'Peter Luger Steak House'},
          marker : { radius : 29 },

        },
        {
          id:'Saitama',
          color : `blue`,
          dataLabels : { format : 'Saitama'},
          marker : { radius : 30 },

        },
        {
          id:'Hiking',
          color : `green`,
          dataLabels : { format : 'Hiking'},
          marker : { radius : 35 },


        },
        {
          id:'Museums',
          color : `green`,
          dataLabels : { format : 'Museums'},
          marker : { radius : 20 },

        },
        {
          id:'cooking',
          color : `green`,
          dataLabels : { format : 'cooking'},
          marker : { radius : 18 },

        },



        
      ],

        // data : data,
        data: [

        // {
        //   from : 'Cartman',
        //   to: 'Jon Doe',
        //   connectionLabel : 'is friends with',
        //   color : 'red'
        // },

        {
          from : 'Cartman',
          to: 'Pickle Rick',
          connectionLabel : 'is friends with',
          color : 'red'
        },

        {
          from : 'Leslie Knope',
          to: 'Cartman',
          connectionLabel : 'is friends with',
          color : 'red'
        },
        {
          from : 'Jon Doe',
          to: 'Tommy Shelby',
          connectionLabel : 'is friends with',
          color : 'red'
        },
        {
          from : 'Walter White',
          to: 'Michael Scott',
          connectionLabel : 'is friends with',
          color : 'red'
        },
        {
          from : 'Walter White',
          to: 'Tommy Shelby',
          connectionLabel : 'is friends with',
          color : 'red'
        },

        {
          from : 'Marge',
          to: 'Hiking',
          connectionLabel : 'loves',
          color : 'green'
        },

        {
          from : 'Saitama',
          to: 'Hiking',
          connectionLabel : 'loves',  
          color : 'green'
        },

        {
          from : 'Saitama',
          to: 'cooking',
          connectionLabel : 'loves',
          color : 'green'
        },
        
        {
          from : 'Marge',
          to: 'Google',
          connectionLabel : 'works at',
          color : 'orange'
        },

        {
          from : 'Jon Doe',
          to: 'Hiking',
          connectionLabel : 'loves',
          color : 'green'
        },

        {
          from : 'Google',
          to: 'New York',
          connectionLabel : 'located in',
          color : 'black'
        },

        {
          from : 'Peter Luger Steak House',
          to: 'New York',
          connectionLabel : 'located in',
          color : 'black'
        },

        {
          from : 'Whole Foods',
          to: 'Cartman',
          connectionLabel : 'works',
          color : 'orange'
        },

        {
          from : 'Whole Foods',
          to: 'New York',
          connectionLabel : 'located in',
          color : 'black'
        },
        {
          from : 'Museums',
          to: 'New York',
          connectionLabel : 'has',
          color : 'aqua'
        },
        {
          from : 'Leslie Knope',
          to: 'Parks Department',
          connectionLabel : 'works at',
          color : 'orange'
        },    
        {
          from : 'Pickle Rick',
          to: 'Parks Department',
          connectionLabel : 'works at',
          color : 'orange'
        },

        {
          from : 'Michael Scott',
          to: 'Chic-fil-A',
          connectionLabel : 'dines at',
          color : 'purple'
        },
        {
          from : 'Parks Department',
          to: 'Chic-fil-A',
          connectionLabel : 'near',
          color : 'black'
        },
        {
          from : 'Whole Foods',
        to: 'Peter Luger Steak House',
        connectionLabel : 'near',
        color : 'black'
      },
        {
          from : 'Walter White',
          to: 'cooking',
          connectionLabel : 'loves',
          color : 'green'
        },
        {
        from : 'Walter White',
        to: 'Museums',
        connectionLabel : 'loves',
        color : 'green'
      },
        {
          from : 'Tommy Shelby',
          to: 'New York',
          connectionLabel : 'lives in',
          color : 'brown'
        },

        {
          from : 'Marge',
          to: 'Wyoming',
          connectionLabel : 'lives in',
          color : 'brown'
        },

        {
          from : 'Saitama',
          to: 'Wyoming',
          connectionLabel : 'lives in',
          color : 'brown'
        },










        
        ,




      ],



            // ['Jon Doe', 'Marge',],
            // ['Jon Doe', 'Michael Scott'],
            // ['Jon Doe', 'Pickle Rick'],
            // ['Jon Doe', 'Leslie Knope'],
            // ['Jon Doe', 'Walter White'],
            // ['Jon Doe', 'Cartman'],
            // ['Jon Doe', 'Tommy Shelby'],

            // ['Marge', 'Peter Luger Steak House'],
            // ['Michael Scott', 'Chic-Fil-A'],
            // ['Pickle Rick', 'Trattoria Trecolori'],
            // ['Leslie Knope', 'Greek Tavern'],
            // ['Walter White', 'Los Tacos No 1'],
            // ['Cartman', 'Indian Accent'],
            // ['Tommy Shelby', 'Jimmy Johns'],


            // ['Marge', 'Tesla'],
            // ['Michael Scott', 'Ford'],
            // ['Pickle Rick', 'Microsoft'],
            // ['Leslie Knope', 'NBC'],
            // ['Walter White', 'Parks Department'],
            // ['Cartman', 'Oracle'],
            // ['Tommy Shelby', 'Google'],

            // ['Tesla','California'],
            // ['Ford','Michigan'],
            // ['Microsoft','Washington'],
            // ['NBC', 'New York'],
            // ['Parks Department','Wyoming'],
            // ['Oracle','California'],
            // ['Google','Arkansas'],

            // ['Marge', 'Wine and Dine'],
            // ['Michael Scott', 'Hiking'],
            // ['Pickle Rick', 'Fitness'],
            // ['Leslie Knope', 'Live concerts'],
            // ['Walter White', 'EDM'],
            // ['Cartman', 'Art'],
            // ['Tommy Shelby', 'Museums'],
            // ['Pickle Rick', 'Tapas'],
            // ['Leslie Knope', 'Hiking'],
            // ['Walter White', 'EDM'],
            




            
        // ]
    }]
});
