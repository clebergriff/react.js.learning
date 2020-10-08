import React from 'react';
import Card from '../../layout/Card';

export default class ApiAnuncios extends React.Component {

    state = {
        anuncios: undefined
    };

    async componentDidMount() {
        const url = "http://localhost:3000/anuncios";
        const response = await fetch(url);
        
        const data = await response.json();
        this.setState({ anuncios: data });
    }

    render() {        

        function getAnunciosList() {
            return (
                <div>
                    <Card titulo={this.state.anuncios.results[0].descricao}>
                        {this.state.anuncios.results[0].nome}
                    </Card>   
                </div>
            )
            // return this.state.anuncios.results.map(anuncio => {
            //     return <Card titulo={anuncio.nome}>
            //         {anuncio.descricao}
            //     </Card>
            // })
        }

        return (
            <div>
                {!this.state.anuncios ? (
                    <div> 
                        {console.log("Vazio " +this.state.anuncios)}
                        Carregando anúncios...
                    </div> 
                ) : (
                    <div>
                        {console.log("Carregado " +this.state.anuncios)}
                        { getAnunciosList() }
                    </div>
                )}
            </div>
        )
    }
}