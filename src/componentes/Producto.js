import React from 'react';
import {CardBody, CardText, CardTitle, CardSubtitle, CardImg, Col, Card} from 'reactstrap';
import './Producto.css'
import FichaProducto from './FichaProducto';

class Producto extends React.Component{
    render(){
        return (
            <Col sm="4">
                <Card className='Card'>
                    <CardImg src={this.props.imagen}/>
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle>${this.props.precio}</CardSubtitle>
                        <CardText>
                            {this.props.descripcion}
                        </CardText>
                        <FichaProducto props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}





export default Producto