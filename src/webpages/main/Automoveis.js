import React, { Component } from 'react';
import '../styles/Automoveis.css'
import Car from '../../assets/Car.jpg'
import Prime from '../../assets/Prime.jpg'
import Ninja from '../../assets/Ninja.jpg'

export default class Automoveis extends Component{

	constructor(props){
		super(props);
		this.state = {
			imgAtual: Car,
			desc: ''
		}
	}

	handleChange = e => {
		let btnPress = e.target.innerHTML;
		console.log(btnPress)

		if(btnPress === "Ver Moto"){
			this.setState({imgAtual: Ninja})
		}
		else if(btnPress === "Ver Carro"){
			this.setState({imgAtual: Car})
		}
		else if(btnPress === "Ver Caminhão"){
			this.setState({imgAtual: Prime})
		}

	}
	render(){
		return(
			<body>
					<div className='main-container'>
						<img className='img' src={this.state.imgAtual} alt="#"/>
						<div className='btn-list'>
							<button onClick={e => this.handleChange(e)}>Ver Moto</button>
							<button onClick={e => this.handleChange(e)}>Ver Carro</button>
							<button onClick={e => this.handleChange(e)}>Ver Caminhão</button>
							</div>
					</div>
					<p className="paragraph">Uma página que será renderizada por um componente que possua um filho e a
						frase: “É um tipoAutomovel”. No componente filho existirá um input de texto, um
						button de inclusão e um de exclusão de um novo automóvel. Além disso, o
						componente filho possuirá uma frase “Isto é um tipoAutomóvel” abaixo da frase do
						pai, uma foto mostrando o automóvel em questão e quando clicar na foto, um alerta
						mostrará uma descrição no estilo “Este tipoAutomóvel é um modeloAutomóvel”.
						Perceba que apenas a foto do automóvel em questão estará sendo mostrada.
						Abaixo da foto existirão botões para alternar entre os automóveis, sendo que o botão
						do automóvel mostrado não aparecerá. Para as imagens, usem uma galeria
						pré-definida, da mesma forma que o ponto 2. Não é necessário fazer tratamentos
						para saber se a imagem consta ou não na galeria;
					</p>
			</body>
	);
	}
}
