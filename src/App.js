import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList'; 
import directory from './directory';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            directory: directory,
        }
    }

    onSearch = (event) => {
        this.setState({ searchField: event.target.value });       
    }

    render() {
        const filteredDirectory = this.state.directory.filter(directory => {
            return directory.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc avenir'>
                <h1 className='light-purple'>Directory</h1>
                <SearchBox onSearch={this.onSearch} />
                <CardList directory={filteredDirectory}/>
            </div>
        );
    }
}

export default App;