import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
    async onSearchSubmit(searchTerm){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchTerm
            },
            headers: {
                Authorization: 'Client-ID abvIIykWJ32MXteDtcd-dPQZyFXp3RLYmQkgSCqdYhg'
            }
        })

        console.log(response.data.results[0]);
    }

    render(){
        return (
            <div className='ui container' style={{ marginTop: '15px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;