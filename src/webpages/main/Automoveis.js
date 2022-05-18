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

					<h3 className="page-title">Automóveis</h3>

					<div className='main-container'>
						<img className='img' src={this.state.imgAtual} alt="#"/>

						<div className='btn-list'>
							<button onClick={e => this.handleChange(e)}>Ver Moto</button>
							<button onClick={e => this.handleChange(e)}>Ver Carro</button>
							<button onClick={e => this.handleChange(e)}>Ver Caminhão</button>
							</div>
					</div>



			</body>
	);
	}

}
