import React from 'react';

export default class FetchRandomUser extends React.Component {

    state = {
        loading: true,
        person: null,
    };

    async componentDidMount() {
        const url = "https://randomuser.me/api/";
        const response = await fetch(url);
        const data = await response.json();        
        this.setState({person: data.results[0], loading: false})
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
                    <div> Loading...</div> 
                ) : (                
                    <div>
                        <div>{this.state.person.name.first +' ' 
                            +this.state.person.name.last}</div>
                        <img alt="" src={this.state.person.picture.large}></img>
                    </div>
                )}
            </div>
        )
    }
}