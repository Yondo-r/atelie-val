import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Cabecalho extends Component {
    constructor(props) {
        super(props)
        this.inscreve = this.inscreve.bind(this)
    }
    inscreve(){
        console.log("Obrigado por testar esse botão")
    }
    render() {
        return(
<div className='cabecalho'>
            <div className='barraNavegacao' media="screen and (min-width: 0px" >
                <Navbar >

                    <Row className="menuPrincipal">
                        <Col sm="true" className="dropBotao">
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-basic" >
                                    Atualizar
                            </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <div className='dropMenu'>
                                        <li><Link to='/'>INÍCIO</Link></li>
                                        <li><Link to='kitsdebercom'>Kits de Berço Masculino</Link></li>
                                        <li><Link to='portifolio'>PORTFOLIO</Link></li>
                                        <li><Link to='../admin'>Admin</Link></li>
                                        <li><Link to='contato'>CONTATO</Link></li>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col sm="true" className="dropBotao">
                            <Dropdown>
                                <Dropdown.Toggle id='dropdown-basic' >
                                    Kits de berço
                            </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <div className='dropMenu'>
                                        <li><Link to='kitsdebercom'>Masculino</Link></li>
                                        <li><Link to='precos'>Feminino</Link></li>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col sm="true" className="dropBotao">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" >
                                    Vestuario
                            </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <div className="dropMenu">

                                        <li><Link to='servicos'>Adulto</Link></li>
                                        <li><Link to='precos'>Infantil</Link></li>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col sm="true" className="dropBotao">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" >
                                    Acessórios
                            </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <div className="dropMenu">
                                        

                                            <li><Link to='servicos'>• Kits de Higiêne</Link></li>
                                            <li><Link to=''>• Papéis de parede</Link></li>
                                            <li><Link to=''>• Ursos e bonecas</Link></li>
                                            <li><Link to=''>• Cortinas</Link></li>
                                            <li><Link to=''>• Almofadas</Link></li>
                                            <li><Link to=''>• Ninho</Link></li>
                                            <li><Link to='precos'>• Carrinho e bebê conforto</Link></li>
                                        

                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                       
                      
                        
                            {/* Botão de pesquisa */}
                            <div className='pesquisar' >
                                <Form>
                                    <FormControl type="text" placeholder="Search"  className="formControl"/>
                                    <Button className="botaoPesquisar" variant="outline-success" onClick={this.inscreve}>Search</Button>
                                </Form>
                            </div>
                       
                        
                    </Row>
                </Navbar>


            </div>
            <div className='inscrever text-center'>
                <h1>Ateliê da Val</h1>
                <p>Kits para bebês e serviços de costura</p>
                <form>
                    <div className='input-group'>
                        <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger' onClick={this.inscreve}>Subscribe</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
        )
    }
}


export default Cabecalho;