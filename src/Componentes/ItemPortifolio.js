import React from 'react'


const ItemPortifolio = props => {
    return (
        <div className='justify-content-md-center'>
            <picture>
                <img src={props.conteudo.imagem} alt='imagem' width="100%" height="100%" className="mr-3" />
            </picture>
            <p className="legend"><strong>{props.conteudo.titulo}</strong></p>
            <p>Cor: {props.conteudo.cores}</p>
            <p>Genero: {props.conteudo.genero}</p>
            <p>Material: {props.conteudo.material}</p>
            <p>Quantidade de peças: {props.conteudo.pecas}</p>
            <p>Tema: {props.conteudo.tema}</p>
            <p>Descrição: {props.conteudo.descricao}</p>
        </div>

    )
}

export default ItemPortifolio 