import React, {Component} from 'react';
import "./ImgManager.css"
import one from '../galeria/1.jpg'
import two from '../galeria/2.jpg'
import three from '../galeria/3.jpg'
import four from '../galeria/4.jpg'
import five from '../galeria/5.jpg'
import six from '../galeria/6.jpg'
import eight from '../galeria/8.jpg'
import nine from '../galeria/9.jpg'
import ten from '../galeria/10.jpg'
export default class ImgManager extends Component {

	constructor(props) {
		super(props);
		this.state = {
				name: '',
				imgArray: [one,two,three,four,five,six,eight,nine,ten],
				input: 0,

		}
	}


	handleChange = event => {
		this.setState({
				input: event.target.value
		});
	}

	novaImagem = () => {

		let id = this.state.input
		let imgsDisplay = document.getElementById('imgs');
		let newImg = this.state.imgArray[id]
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
