import React from 'react';

export default class ApiMagic extends React.Component {    

    state = {
        loading: true,
        card: null,
        search: null
    };

    async componentDidMount() {
        const url = "https://api.scryfall.com/cards/search?order=cmc&q=" +this.props.search;
        const response = await fetch(url);
        const data = await response.json();        
        this.setState({card: data, loading: false})
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
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
        )
    }
}