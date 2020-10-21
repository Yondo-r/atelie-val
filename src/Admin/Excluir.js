import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemPortifolio from '../Componentes/ItemPortifolio'
import config, { crudApp } from '../firebase-config'

class Excluir extends Component {
    constructor(props) {
        super(props)
        this.state = {
            KitsDeBerco: {

            }
            
        }
        this.excluiFoto = this.excluiFoto.bind(this)
        this.mudaFoto = this.mudaFoto.bind(this)
        this.elemento = ""

        config.syncState('KitsDeBerco', {
            context: this,
            state: 'KitsDeBerco',
            asArray: false
        })
    }

  
     mudaFoto(e){
       console.log(e, "elemento")
       this.elemento = e
       return e    
     }


    excluiFoto(id) {
        var index = this.mudaFoto(this.elemento)
        
        const porti = Object.keys(this.state.KitsDeBerco)
        .map(key => {
            return <ItemPortifolio key={key} conteudo={this.state.KitsDeBerco[key]} />
        })
        const arquivoDel = porti[index]
        
        
        const refer = crudApp.database().ref('KitsDeBerco').child(arquivoDel.key);
         refer.remove().then(function() {
            console.log("Remove succeeded.")
        })
           .catch(function(error) {
            console.log("Remove failed: " + error.message)
          });  
       id.preventDefault()
    }
    render() {
        
        return (
            <Container >

                <div className='container-fluid text-center bg-grey'>
                    <form onSubmit={this.excluiFoto}>
                        <button type='submit' className='btn btn-danger'>Excluir</button>
                        <Carousel onChange={this.mudaFoto} className="CaroulselKitsBerco">
                            {
                                Object.keys(this.state.KitsDeBerco)
                                    .map(key => {
                                        return <ItemPortifolio key={key} conteudo={this.state.KitsDeBerco[key]} />
                                    })
                            }

                        </Carousel>
                    </form>
                </div>
            </Container>

        )
    }
}

export default Excluir