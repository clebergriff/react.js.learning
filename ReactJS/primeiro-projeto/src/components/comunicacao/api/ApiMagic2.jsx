import React from 'react';
import './ApiMagic2.css';

export default class ApiMagic2 extends React.Component {

    state = {
      card: null,
      searching: false
    };

    async searchCard() {
      this.setState({card: null, searching: true});  
      console.log('buscando ' +this.state.value);
      const url = "https://api.scryfall.com/cards/search?order=cmc&q=" +this.state.value;
      const response = await fetch(url);
      const data = await response.json();        
      this.setState({card: data, loading: false, searching: false});
    };

    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {   
      console.log(this.loading);
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      this.searchCard()
      event.preventDefault();
    }
  
    render() {

      return ( 
        <div>          
          <form onSubmit={this.handleSubmit}> 
            <input type="text" placeholder="Informe a carta..."
              onChange={this.handleChange} />
            <input type="submit" value="Buscar" />
          </form>

          {this.state.searching ? (
            <div className="title"> Buscando... </div>
          ) : (<div></div>)}
          
          {this.state.card == undefined ? (
              <div> </div> 
          ) : (  
            !this.state.card.data ? (
              <div className="title"> Nenhuma carta encontrada </div>
            ) : (             
              <div>
                  <div className="title">{this.state.card.data[0].name} </div>
                  <img alt="" 
                      src={this.state.card.data[0].image_uris.normal}>
                  </img>
              </div>
          ))}
        </div>        
      );
    }
  }