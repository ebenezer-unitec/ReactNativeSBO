import React from 'react';

import Home from './components/home';
import RutasView from './components/rutas/rutasView';
import RutaInformation from './components/rutas/rutaInformation';
import RouteDirection from './components/rutas/routeDirection';
import RoutePlate from './components/rutas/routePlate';

import ScanningView from './components/scanner/scanningView';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import {
  Platform
} from 'react-native';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Scene key='root' style = {{paddingTop: Platform.OS ==='ios'? 64: 54}}>
          <Scene key='home' component={Home} title='Home' />
          <Scene key='rutasView' component={RutasView} title='Rutas' />
          <Scene key='rutaInformation' component={RutaInformation} title='Informacion de Ruta' />
          <Scene key='routeDirection' component={RouteDirection} title='Entra o Salida de Ruta' />
          <Scene key='routePlate' component={RoutePlate} title='Ingreso de placa' />
          <Scene key='scanningView' component={ScanningView} title='Escaner' />
        </Scene>
      </Router>
    );
  }
}

export default App;
