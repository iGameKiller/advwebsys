//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import '../styles/Sorvetes.css'

export default function Sorvetes(){

	function mostreSabor(e){
		alert(e.target.innerHTML)
	}
		return(
			<body className="div">
				<div class="dropdown">
					<button class="dropbtn">Escolha seu sabor de Sorvete</button>
					<div class="dropdown-content">
						<button data-tip = "Manga" onClick={e => mostreSabor(e)} href="#">Manga</button>
						<button data-tip = "Côco" onClick={e => mostreSabor(e)} href="#">Côco</button>
						<button data-tip = "Uva" onClick={e => mostreSabor(e)} href="#">Uva</button>
						<button data-tip = "Morango" onClick={e => mostreSabor(e)} href="#">Morango</button>
						<button data-tip = "Manga" onClick={e => mostreSabor(e)} href="#">Leite Condensado</button>
					</div>
				</div>
				<input type="text" placeholder="Type some shit"/>
				<button className="btn-enviar">Enviar</button>
				<p>Uma página com uma lista no estilo dropdown com tipos de frutas para o usuário
				selecionar. <br/> A página também conterá um botão que, ao ser clicado, mostrará um
				alerta informando a fruta <br/> selecionada e um input de texto que servirá para inserção
				de novas frutas à lista;</p>
			</body>
		);

}
