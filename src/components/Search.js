import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyworld: ''
        }
    }
    onChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyworld)
    }
    render() {
        var { keyworld } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        name='keyworld'
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        value={keyworld}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn"
                        onClick={this.onSearch}
                    >
                        <button className="btn btn-primary" type="button">
                            <span className="fa fa-search mr-5" />Tìm
                                </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;