import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList'; 
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestDirectory } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchDirectory.searchField,
        directory: state.requestDirectory.directory,
        isPending: state.requestDirectory.isPending,
        error: state.requestDirectory.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (event) => dispatch(setSearchField(event.target.value)),
        onRequestDirectory: () => dispatch(requestDirectory())
    }
}

class App extends Component {
    componentDidMount() {
        this.props.onRequestDirectory();
    }

    render() {
        const { searchField, onSearch, directory, isPending } = this.props;
        const filteredDirectory = directory.filter(directory => {
            return directory.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h2 className='tc'>Loading....</h2> :
            (
                <div className='tc avenir'>
                    <h1 className='orange'>Simulated Directory</h1>
                    <SearchBox onSearch={onSearch} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList directory={filteredDirectory} />
                        </ErrorBoundary>
                    </Scroll>
                    <div className='f6 ma3'>Directory populated using <a href='https://randomuser.me/' target='_new'>Random User Generator</a>.</div>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);