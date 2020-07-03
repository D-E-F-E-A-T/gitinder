import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        products: []
    };

    componentDidMout () { //assim que for mostrado em tela
        this.loadProducts();
    }
    
    loadProducts = async () => { //arrow function não sobrepõe o this
        const response = await api.get('/users');
    
        this.setState({products: response.data.docs});
    }

    render () {
        return (<h1>O Usuário encontrado foi: {this.state.products.length}</h1>);
    // <div className="product-list">
    // {this.state.products.map(product => (<h2 key={product._id}>{product.title}</h2>))}
    }
}