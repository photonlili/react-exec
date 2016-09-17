import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

var CarItem = React.createClass({
  render: function(){
    var car = this.props.car;
    return (
      <ListItem
        //onClick={()=>{console.log(car)}}
        primaryText={car.shortName}
        secondaryText={car.longName}
      />
    );
  }
});

var CarList = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    };
  },
  handleChange: function(filterTextInput){
    this.setState({
      filterText: filterTextInput
    });
  },
  render: function(){
    var rows = [];
    this.props.cars.forEach(function(car){
      if( car.shortName.indexOf(this.props.filterText) === -1){
        return;
      }
      rows.push(<CarItem car={car} key={car.gtfsId}/>);
    }.bind(this))

    return (
      <List>
        <Subheader>Avaliable Lines</Subheader>
        {rows}
      </List>
    );
  }
});

export default CarList;
