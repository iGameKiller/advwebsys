import React, {Component} from 'react';
import "./ImgManager.css"

export default class ImgManager extends Component {

	constructor(props) {
		super(props);
		this.state = {
				name: '',
				imgArray: [],
				input: 0,
		}
	}


	handleChange = event => {
		this.setState({
				input: event.target.value
		});
	}

	novaImagem = () => {

		let imgsDisplay = document.getElementById('imgs');
		let newImg = this.state.input;
		this.state.imgArray.push(newImg);

		let child = document.createElement('li')
		child.innerHTML = "<li class='grid-item'>"+this.state.input+"</li>"

		imgsDisplay.append(child)
		this.setState({ input: 0 });
		return child;

	};

	render() {
		return (
			<div>
				<div class="main-page-data">
					<input type="number" id="img-input" value={this.state.input} onChange={this.handleChange} />
					<button onClick={this.novaImagem} id="add-img">Adicionar Imagem</button>
					<button id="rmv-img">Remover Imagem</button>
				</div>

				<ul class="grid-container" id="imgs">
				</ul>
			</div>
		)
	}

}
