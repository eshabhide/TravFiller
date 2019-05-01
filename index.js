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
let companies = ['Tesla','Ford','Microsoft','NBC','Parks Department','Oracle','Walmart','MTA']
let restaurants = ['Peter Luger Steak House', 'Chic-Fil-A','Trattoria Trecolori','Greek Tavern','Los Tacos No 1','Indian Accent',
'Jimmy Johns','Open Pancake House']
let locations = ['California','Michigan','Washington','New York','Wyoming','Arkansas','New Jersey','Missippi']
let activities = ['Wine and Dine','Hiking','Fitness','Live concerts','EDM','Art','Museums','Tapas']


Highcharts.chart('container', {
    chart: {
        type: 'networkgraph',
        height: '50%'
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
          color : `red`,
          dataLabels : { format : 'Jon Doe'},
          marker : { radius : 15 },
        },
        {
          id:'Marge',
          color : `blue`,
          dataLabels : { format : 'Marge'}
        },
        {
          id:'Michael Scott',
          color : `green`,
          dataLabels : { format : 'Michael Scott'}
        },
        {
          id:'Pickle Rick',
          dataLabels : { format : 'Pickle Rick'}
        },
        {
          id:'Leslie Knope',
          dataLabels : { format : 'Leslie Knope'}
        },
        {
          id:'Walter White',
          dataLabels : { format : 'Walter White'}
        },
        {
          id:'Cartman',
          dataLabels : { format : 'Cartman'}
        },
        {
          id:'Tommy Shelby',
          dataLabels : { format : 'Tommy Shelby'}
        },
        
      ],

        // data : data,
        data: [{
          from : 'Jon Doe',
          to: 'Marge',
          connectionLabel : 'is friends with',
          color : 'red'
        },
        {
          from : 'Leslie Knope',
          to: 'Michael Scott',
          connectionLabel : 'is friends with',
          color : 'red'
        },
        {
          from : 'Lesie Knope',
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
            // ['Tommy Shelby', 'Walmart'],

            // ['Tesla','California'],
            // ['Ford','Michigan'],
            // ['Microsoft','Washington'],
            // ['NBC', 'New York'],
            // ['Parks Department','Wyoming'],
            // ['Oracle','California'],
            // ['Walmart','Arkansas'],

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
