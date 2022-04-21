import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
    onSearchSubmit(searchTerm){
        console.log(searchTerm);
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