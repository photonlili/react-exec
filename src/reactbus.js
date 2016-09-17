import React from 'react';
import SearchBar from './components/searchbar';
import CarList from './components/carlist'
import RouteData from './api/routedata'

var ReactBus =  React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    };
  },
  handleTextChange(filterText){
    this.setState({
      filterText: filterText
    });
  },
  render: function(){
    // var carList = [
    //   {carNo: '1', carRoute: 'abs-xyz'},
    //   {carNo: '12', carRoute: 'abs-xyz'},
    //   {carNo: '123', carRoute: 'abs-xyz'},
    //   {carNo: '1234', carRoute: 'abs-xyz'},
    //   {carNo: '12345', carRoute: 'abs-xyz'},
    //   {carNo: '123456', carRoute: 'abs-xyz'}
    // ];

    var cars = [];
    RouteData.forEach(function(car){
      if( car.hasOwnProperty('shortName')){
        cars.push(car);
      }
    });

    return(
      <div>
        <SearchBar handleTextChange={this.handleTextChange} />
        <CarList cars={cars} filterText={this.state.filterText} />
      </div>
    );
  }
});

export default ReactBus;
