import React from 'react';
import Producto from './componentes/Producto'
import Navegacion from './componentes/Navegacion';
import {Row, Container} from 'reactstrap';
import './App.css';
import {default as data} from './listaProductos.json'



class App extends React.Component{
  constructor(){
    super()

    this.state = {
      data
    }
  }

  render(){
    const arregloComponentes = this.state.data.listaProductos.map(
      (listaProducto, i) => {
        return(
          <Producto
            key={i}
            titulo={listaProducto.titulo}
            imagen={listaProducto.imagen}
            precio={listaProducto.precio}
            descripcion={listaProducto.descripcion}
            stock={listaProducto.stock}
          />
        )
      }
    )
    return (
        <Container>
          <Navegacion titulo="Mi primer sitio de compras con React"/>
          <Row>
            {arregloComponentes}
          </Row>
        </Container>
    );
  }
}


export default App;
