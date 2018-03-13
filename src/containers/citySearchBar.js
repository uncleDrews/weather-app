import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchInputChange(event){
        this.setState({term : event.target.value});
    }

    onSearchSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form onSubmit={this.onSearchSubmit}>
                <div className='form-group'>
                    <div className="col-md-9">
                        <input
                            className='form-control'
                            type="text"
                            placeholder='Get your five-day forecast in your favourite Ukraine cities! (Type in English, please)'
                            value={this.state.term}
                            onChange={this.onSearchInputChange} />
                    </div>
                    <div className='col-md-3'>
                        <button
                            type='submit'
                            className='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);