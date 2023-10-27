import React, { Component } from 'react';
import Produit from './produit';

class magasin extends Component {

    state = {
        infos : "ancienne infos"
    }

    changerInfos = (nouvelleInfo) =>{
        this.setState({
            infos : nouvelleInfo
        })
    }

    render() {
        return (
            <div>
                je suis le magasin et {this.state.infos}
                 <Produit infosParent = {"je viens du parent"} renvoyerInfo = {this.changerInfos}/>
            </div>
           
        );
    }
}

export default magasin;