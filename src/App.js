import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList'; 

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            directory: [],
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=100')
            .then(response => response.json())
            .then(data => {
                let people = data.results;
                for (let i = 0; i < people.length; i++) {
                    let person = {
                                    id: i,
                                    picture: people[i].picture.large,
                                    name: people[i].name.first + " " + people[i].name.last,
                                    username: people[i].login.username,
                                    email: people[i].email,
                                    cell: people[i].cell
                                 };
                    this.setState({directory: this.state.directory.concat(person)});
                }
            });
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
                {(this.state.directory.length === 0) ? <h2 className='tc'>Loading....</h2> : <CardList directory={filteredDirectory}/>}
                <div className='f6 ma3'>Directory populated using <a href='https://randomuser.me/' target='_new'>Random User Generator</a>.</div>
            </div>
        );
    }
}

export default App;