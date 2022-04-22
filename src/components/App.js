import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
    state = {
        images: []
    };

    onSearchSubmit = async(searchTerm) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchTerm
            },
            headers: {
                Authorization: 'Client-ID abvIIykWJ32MXteDtcd-dPQZyFXp3RLYmQkgSCqdYhg'
            }
        })

        this.setState({images: response.data.results });
    }

    render(){
        return (
            <div className='ui container' style={{ marginTop: '15px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found:{this.state.images.length} images
            </div>
        )
    }
}

export default App;