import React from 'react';

import {
  Text
} from 'react-native';
class RutaInformation extends React.Component {
  render(){
    return (
      <Text>
        vista de informacion - {this.props.rutaId}
      </Text>
    );
  }
}

export default RutaInformation;
