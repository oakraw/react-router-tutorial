import React, { Component } from 'react';
import { Calendar } from 'antd';
import moment from 'moment';

export default class Schedule extends Component {

    state = {
        date: 10
    };

    componentDidMount() {
        const date = parseInt(this.props.match.params.date, 10)
        this.setState((prevState) => {
            return {
                ...prevState,
                date,
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{ this.state.date }</h1>
                <Calendar value={moment(`2017-01-${this.state.date}`)}/>
            </div>
        )
    }
}
