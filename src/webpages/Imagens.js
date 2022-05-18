import ImgManager from '../components/ImgManager.js'
import "./Home.css"

function Imagens() {
  return (
			<body>
				<div className='text'>Imagens</div>
				<ImgManager/>

				<p>
				Uma página de imagens, onde haverá um input de números informando o número da imagem na
				galeria e dois botões: <br/>um para inserir e outro para retirar imagens. A galeria de
				imagens é pré-definidas e deverá existir no projeto. Ao clicar <br/>no botão de
				inserir/retirar imagem, a imagem com o número do input será carregada ou retirada
				da tela. Perceba que <br/> poderá ser exibida várias imagens (inclusive repetidas) ao
				mesmo tempo. A página inicia sem nenhuma imagem carregada. <br/> Não é necessário
				fazer tratamentos para saber se a imagem consta ou não na galeria;
				</p>
			</body>
  );
}

export default Imagens;
