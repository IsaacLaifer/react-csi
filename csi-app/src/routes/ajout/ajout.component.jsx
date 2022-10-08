import { Component } from "react";

import './ajout.styles.scss';

class Ajout extends Component {

    render() {
        return (
            <div className="homeBackground">
                <div className="form-container">
                    <form action="http://localhost:8080/controller/newBlog.php" method='POST' className="form-background">

                        <p className="formTitle">Ajouter un blog</p>
                        <input type="text" name="titleBlog" placeholder="Titre.." className="form-input" required />

                        <br />

                        <input type="text" name="textBlog" placeholder="Description.." className="form-input" required />

                        <br />
                        <input type="submit" value="Submit" className="form-input" />
                    </form >
                </div>
            </div>
            
        )
    }
}

export default Ajout;