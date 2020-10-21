import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div className="list-group">
            <Link to="#" className="list-group-item list-group-item-action active">
                Selecione uma opção
            </Link>
            <Link to="../admin/adicionar" className="list-group-item list-group-item-action">Adicionar item</Link>
            <Link to="../admin/excluir" className="list-group-item list-group-item-action">Excluir item</Link>

        </div>
    )
}

export default AdminMenu;