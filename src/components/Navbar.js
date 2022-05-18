import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SLJackson from "../assets/SLJ.jpg"
import Imagens from '../webpages/main/Imagens'
import Sorvetes from '../webpages/main/Sorvetes'
import Automoveis from '../webpages/main/Automoveis'
import "./Navbar.css"

// Essa Navbar é a minha obra prima............................ até agora
export default function Navbar () {

    const [isActive, setActive] = useState();/* React Hooks mtfk! */

    const toggleClass = () => {
        setActive(!isActive);
    }

    const activestyle = {backgroundColor:"#fff",color:'black'}

    return (
        <div>
            <Router>

                <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
                <nav className={`sidebar ${isActive ? "active" : ""}`}>

                    <div className="top-content">
                        <div className="logo-box">
												<i className='bx bxl-c-plus-plus'/>
													<p className='title'> ctos_Systems</p>
                        </div>

                        <i className='bx bx-menu' id="oc-btn" onClick={toggleClass}></i>
                    </div>

                    <ul className="nav_list">

											<li>
													<i className='bx bx-search' onClick={toggleClass}/>
													<input type="text" placeholder="Search..."/>
													<span className="tooltip">Pesquisar</span>
											</li>

											<li>
												<Link activeStyle={activestyle} to="/imagens">
													<i className='bx bx-user-pin'/>
													<span className="link-name">Imagens</span>
												</Link>
												<span className="tooltip">Imagens</span>
											</li>

											<li>
												<Link activeStyle={activestyle} to="/sorvetes">
													<i className='bx bx-user-pin'/>
													<span className="link-name">Lista de Sorvetes</span>
												</Link>
												<span className="tooltip">Lista de Sorvetes</span>
											</li>

											<li>
												<Link activeStyle={activestyle} to="/automoveis">
													<i className='bx bx-user-pin'/>
													<span className="link-name">Automóveis</span>
												</Link>
												<span className="tooltip">Automóveis</span>
											</li>

											<li>
												<Link activeStyle={activestyle} to="/automoveis">
													<i className='bx bx-user-pin'/>
													<span className="link-name">Listagem</span>
												</Link>
												<span className="tooltip">Listagem</span>
											</li>

											<li>
												<Link activeStyle={activestyle} to="/automoveis">
													<i className='bx bx-user-pin'/>
													<span className="link-name">Autores</span>
												</Link>
												<span className="tooltip">Autores</span>
											</li>

                    </ul>

                    <div className="profile-content">
                        <div className="profile">
                            <div className="profile-details">
                                <img src={ SLJackson } alt="#"/>
                                <div className="name-box">
                                    <div className="name">Bad Motherfucker</div>
                                    <div className="job">@_pedromend</div>
                                </div>
                            </div>
                            <i className='bx bx-log-out' id="log-out"></i>
                        </div>
                    </div>

                </nav>

							<Routes>
								<Route path="/imagens" element={<Imagens/>}/>
								<Route path="/sorvetes" element={<Sorvetes/>}/>
								<Route path="/automoveis" element={<Automoveis/>}/>
							</Routes>



            </Router>
        </div>
    );
}
/*
<li>
													<NavLink activeStyle={activestyle} to="/dashboard">
															<i className='bx bx-grid-alt'/>
															<span class="link-name">Dashboard</span>
													</NavLink>
													<span class="tooltip">Dashboard</span>
											</li>

											<li>
													<NavLink activeStyle={activestyle} to="/perfil">
															<i class='bx bx-user'/>
															<span class="link-name">Perfil</span>
													</NavLink>
													<span class="tooltip">Perfil</span>
											</li>

											<li>
													<NavLink activeStyle={activestyle} to="/listatarefas">
															<i class='bx bx-task'></i>
															<span class="link-name">Lista de Tarefas</span>
													</NavLink>
													<span class="tooltip">Lista de Tarefas</span>
											</li>

											<li>
													<NavLink activeStyle={activestyle} to="/financas">
															<i class='bx bx-money' ></i>
															<span class="link-name">Finanças</span>
													</NavLink>
													<span class="tooltip">Finanças</span>
											</li>

											<li>
													<NavLink activeStyle={activestyle} to="/fotos">
															<i class='bx bx-photo-album' ></i>
															<span class="link-name">Fotos</span>
													</NavLink>
													<span class="tooltip">Fotos</span>
											</li>

											<li>
													<NavLink activeStyle={activestyle} to="/jogos">
															<i class='bx bx-game' ></i>
															<span class="link-name">Jogos</span>
													</NavLink>
													<span class="tooltip">Jogos</span>
											</li>

											<li>
													<NavLink activeStyle={activestyle} to="/formulario">
															<i class='bx bx-receipt' ></i>
															<span class="link-name">Formulário</span>
													</NavLink>
													<span class="tooltip">Formulário</span>
											</li>

											<li>
													<NavLink activeStyle={activestyle} to="/configuracoes">
															<i class='bx bxs-cog'/>
															<span class="link-name">Configurações</span>
													</NavLink>
													<span class="tooltip">Configurações</span>
											</li>
*/
