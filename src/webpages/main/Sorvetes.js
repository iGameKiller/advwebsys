//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '../styles/Sorvetes.css'
import {Component} from 'react'
export default class Sorvetes extends Component{

	constructor(props){
		super(props);
		this.state = {
			defaultMsg: 'Escolha seu sabor de Sorvete',
		}
	}
	mostreSabor = e => {
		//TODO: programar troca de cor dps, uma por fruta
		this.setState({defaultMsg: e.target.innerHTML})
	}
	enviar = () => {
		alert(this.state.defaultMsg)
	}
	render(){
		return(
			<body>
				<div class="dropdown">
					<button class="dropbtn">{ this.state.defaultMsg }</button>
					<div class="dropdown-content">
						<button data-tip = "Manga" onClick={e => this.mostreSabor(e)} href="#">Manga</button>
						<button data-tip = "Côco" onClick={e => this.mostreSabor(e)} href="#">Côco</button>
						<button data-tip = "Uva" onClick={e => this.mostreSabor(e)} href="#">Uva</button>
						<button data-tip = "Morango" onClick={e => this.mostreSabor(e)} href="#">Morango</button>
						<button data-tip = "Manga" onClick={e => this.mostreSabor(e)} href="#">Leite Condensado</button>
					</div>
				</div>
				<input type="text" placeholder="Type some shit"/>
				<button className="btn-enviar" onClick={this.enviar}>Enviar</button>
				<p>Uma página com uma lista no estilo dropdown com tipos de frutas para o usuário
				selecionar. <br/> A página também conterá um botão que, ao ser clicado, mostrará um
				alerta informando a fruta <br/> selecionada e um input de texto que servirá para inserção
				de novas frutas à lista;</p>
			</body>
		);
	}


}
