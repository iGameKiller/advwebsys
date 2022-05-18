import React, { Component } from 'react';
import './Automoveis.css'
import Car from '../assets/Car.jpg'
import Ninja from '../assets/Ninja.jpg'
import Prime from '../assets/Prime.jpg'

export default class Automoveis extends Component{

	constructor(props) {
		super(props);
		this.state = {
				imgAtual: Car,
				desc: ''
		}

	}


	alterarVeiculos = e => {
		let veiAtual = e.target.innerHTML
		console.log(veiAtual)
		if(veiAtual === "Ver Moto"){
			this.setState({ imgAtual: Ninja, desc: "Este automóvel é uma moto" })
		}
		else if(veiAtual === "Ver Carro"){
			this.setState({imgAtual: Car, desc: "Este automóvel é um carro"})
		}
		else if(veiAtual === "Ver Caminhão"){
			this.setState({imgAtual: Prime, desc: "Este automóvel é um caminhão"})
		}
	}

	render(){
		return(
			<body>
				<div className='main-container'>
					<img className='img'alt="#" src={this.state.imgAtual}/>

					<div className='btn-list'>
						<button onClick={this.alterarVeiculos}>Ver Moto</button>
						<button onClick={this.alterarVeiculos}>Ver Carro</button>
						<button onClick={this.alterarVeiculos}>Ver Caminhão</button>
						<p className='car-tooltip'> { this.state.desc }</p>
						</div>
				</div>



				<p>Uma página que será renderizada por um componente que possua um filho e a
				frase: “É um tipoAutomovel”. No componente filho existirá um input de texto, um
				button de inclusão e um de exclusão de um novo automóvel. Além disso, o
				componente filho possuirá uma frase “Isto é um tipoAutomóvel” abaixo da frase do
				pai, uma foto mostrando o automóvel em questão e quando clicar na foto, um alerta
				mostrará uma descrição no estilo “Este tipoAutomóvel é um modeloAutomóvel”.
				Perceba que apenas a foto do automóvel em questão estará sendo mostrada.
				Abaixo da foto existirão botões para alternar entre os automóveis, sendo que o botão
				do automóvel mostrado não aparecerá. Para as imagens, usem uma galeria
				pré-definida, da mesma forma que o ponto 2. Não é necessário fazer tratamentos
				para saber se a imagem consta ou não na galeria;</p>
			</body>
	);
	}

}
