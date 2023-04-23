import React from "react";
import {Button, Container, Modal, ModalBody, ModalHeader, ModalFooter, CardImg} from "reactstrap";
//import fs from 'fs-extra'
import "./FichaProducto.css";
import {default as data} from '../listaCarrito.json'
//const listaCarrito = data.listaCarrito


class FichaProducto extends React.Component{
    constructor(props){
        super()
        this.state = {
            modal:false,
            data,
            stock: props.props.stock
        }

        this.toggle = this.toggle.bind(this)
        this.agregarCarrito = this.agregarCarrito.bind(this)
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    agregarCarrito(){
        data.listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        })

        this.setState(prevState => ({
            modal: !prevState.modal
        }))

        if (this.state.stock !== 0) {
            this.setState(prevState => ({
                stock: prevState.stock -1
            }))
        } else {
            alert('Stock del producto agotado!')
        }

        const badge = document.getElementById('cantidad')
        badge.innerText = data.listaCarrito.length

    }

    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>Descripción del Producto:  
                            <br></br>
                            {this.props.props.descripcion}
                        </p>
                        <p>Precio: ${this.props.props.precio}</p>
                        <p>Unidades disponibles: {this.state.stock}</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al Carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver Atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}


export default FichaProducto