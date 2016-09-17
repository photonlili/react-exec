import React from 'react';
import TextField from 'material-ui/TextField';

var SearchBar = React.createClass({
  onFilterTextChanged: function(e){
    this.props.handleTextChange(this.refs.filterTextInput.getValue());
    //console.log(e.target.value)
  },
  render: function(){
    return (
      <TextField
        floatingLabelText="Line Number"
        multiLine={false}
        rows={2}
        ref="filterTextInput"
        onChange={this.onFilterTextChanged}
      />
    );
  }
});

export default SearchBar;
