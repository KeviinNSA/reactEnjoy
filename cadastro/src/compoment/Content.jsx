import React from 'react'
import  "./Content.css";
import Axios from 'axios'
import { Link } from 'react-router-dom';

/*Slick reponsanvel pelo carousel no site*/
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import img from '../dist/img/coca_cola.png'

// minha url da API
let url = 'http://localhost:3001/produtos'

let inicialState = {
    produto : {name: 'Coca_cola', preco: '200, 00 AOA', img: img},
    list : []
}

// Configuracao do Slick
const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
}

export default class Content extends React.Component{
    state = {...inicialState }

    // consumiindo os dados da API
    componentWillMount(){
        Axios(url)
        .then(resp => {
            this.setState({list : resp.data})
        })
    }
    
    conteudo(){
        return (
            <div className="container">
                <header>
                    <div className="center">
                        <div className="logo">LogoTipo</div>
                        <nav>
                            <ul>
                                <li><a href="">Produtos</a></li>
                                <li><Link to='/painel' >Sign in</Link></li>
                            </ul>
                        </nav>
                        <div className="center"></div>
                    </div>
                </header>

                <section className="search">
                    <div className="center">
                        <div className="w50 left">Produtos</div>
                        <div className="w50 right"><input type="text" placeholder="Pesquisar" /></div>
                    </div>
                    <div className="clear"></div>
                </section>

                <section className="listaProdutos">
                    <div className="center">
                        <ul className="listaP">
                            <Slider {...settings}>
                            {this.renderLista()}
                            </Slider>
                        </ul>
                    </div>
                    <div className="clear"></div>
                </section>

                <section className="boxProduto">
                    <div className="center">
                        <div className="box">
                            <div className="box-img">
                                <img src={this.state.produto.img} alt="" />
                            </div>
                            <div className="box-title">
                                <p>{this.state.produto.name}</p>
                            </div>
                            <div className="box-content">
                                <p className="left w50">{this.state.produto.preco}</p>
                                <p className="right w50"><button>Detalhes</button></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    renderLista(){
        return this.state.list.map( produto => {
            return(
                <li className="left"><a onClick={() => this.buscarDados(produto)}>{produto.name}</a></li>
            )
        })
    }

    //buscando dados do produto
    buscarDados(produto){
        this.setState({produto})
        const baseUrl = `${url}/${produto.name}`
        Axios(baseUrl, produto)
        .then(resp => {
            this.setState({produto: inicialState.produto})
        })
    }
    
    render(){
        return(
            this.conteudo()
        )
    }
} 
    