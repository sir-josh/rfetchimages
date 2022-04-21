import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
    onSearchSubmit(searchTerm){
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID abvIIykWJ32MXteDtcd-dPQZyFXp3RLYmQkgSCqdYhg'
            }
        });
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