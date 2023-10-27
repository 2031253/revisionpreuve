import React, { Component } from 'react';

class produit extends Component {

    envoyerNouvelleInfon=()=>{
        this.props.renvoyerInfo("nouvelle info looo");
    }

    render() {
        return (
            <div>
                je suis l'enfant et {this.props.infosParent}
                <button onClick={this.envoyerNouvelleInfon}>montrer</button>
            </div>
        );
    }
}

export default produit;