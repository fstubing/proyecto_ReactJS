import React from "react";
import { Badge, Button, Popover, PopoverBody, PopoverHeader, Table } from "reactstrap";
import { Cart3 } from 'react-bootstrap-icons';
import {default as data} from '../listaCarrito.json';
const {listaCarrito} = data;



class Carro extends React.Component{
    constructor(){
        super()
        this.state={
            popoverOpen:false,
            listaCarrito
        }
        this.toggle=this.toggle.bind(this)
    }

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }))
    }

    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
                return(
                    <tr key={i}>
                        <td>{(i += 1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>${listaCarrito.precio}</td>
                    </tr>
                )
            }
        )
        
        
        const arrayPrecios = []
        this.state.listaCarrito.forEach(product => {
            let precio = parseFloat(product.precio)*1000000
            arrayPrecios.push(precio)
        })

        let sumaCarrito = 0
        if(arrayPrecios.length>0) {
            sumaCarrito = arrayPrecios.reduce((accumulator, number) => {
                return accumulator + number;
            });
        }


        return(
            <div>
                <Button id="Popover1" color="info">
                    <Cart3 size={25}/>
                    <Badge color="primary" id="cantidad">{listaCarrito.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Listado de Compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th scope="row"><b>Total:</b></th>
                                    <td></td>
                                    <td>{Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(sumaCarrito)} CLP</td>
                                </tr>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        )
    }
}


export default Carro