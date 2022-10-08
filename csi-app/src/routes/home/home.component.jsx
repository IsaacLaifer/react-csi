import { Component } from 'react';
import { Link } from "react-router-dom";

import '../home/home.style.scss';
import listLogo from '../../assets/logolist.png'
import addLogo from '../../assets/logoAdd.png'

class Home extends Component {
    render() {
        return (
            <div className='homeBackground'>
                <div className="cardContainer">
                    <section>
                        <div className="row">
                            <h1 className="cardTitle">Menu</h1>
                        </div>
                        <div className="row centerCard">
                            <div className="column">
                                <Link to="/list">
                                    <div class="card">
                                        <div className="img-container">

                                            <img src={listLogo} />

                                        </div>

                                        <h3>Afficher la liste</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="column">
                                <Link to="/ajout">
                                    <div className="card">
                                        <div className="img-container">

                                            <img src={addLogo} />

                                        </div>

                                        <h3>Ajouter un blog</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
