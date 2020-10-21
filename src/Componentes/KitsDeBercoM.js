import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import config from './../firebase-config'
import ItemPortifolio from './ItemPortifolio'


class KitsDeBercoM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            KitsDeBerco: {

            }
        }

        config.syncState('KitsDeBerco', {
            context: this,
            state: 'KitsDeBerco',
            asArray: false
        })
    }
    render() {
        return (
            <Container >
                <div>
                    <Carousel className="CaroulselKitsBerco">
                        {
                            Object.keys(this.state.KitsDeBerco)
                                .map(key => {
                                    return <ItemPortifolio key={key} conteudo={this.state.KitsDeBerco[key]}/> 
                                }) 
                            }
                    
                    </Carousel>
                </div>
            </Container>

        )
    }
}

export default KitsDeBercoM