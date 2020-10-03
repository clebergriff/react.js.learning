import React from 'react';

export default class ApiMagic2 extends React.Component {

    state = {
      loading: true,
      card: null,
      search: null
    };

    async searchCard() {
        console.log('buscando ' +this.state.value);
        const url = "https://api.scryfall.com/cards/search?order=cmc&q=" +this.state.value;
        const response = await fetch(url);
        const data = await response.json();        
        this.setState({card: data, loading: false})
    };

    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {   
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      this.searchCard()
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {

      return ( 
        <div>          
          <form onSubmit={this.handleSubmit}> 
            <label>
              Nome:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Enviar" />
          </form>
          
            {!this.state.loading ? (
                <div> Loading...</div> 
            ) : (                
                <div>
                    <div>{this.state.card.data[0].name} </div>
                    <img alt="" 
                        src={this.state.card.data[0].image_uris.large}>
                    </img>
                </div>
            )}
        </div>
      );
    }
  }