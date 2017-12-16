import React, { Component } from 'react';
import { Calendar } from 'antd';
import moment from 'moment';

export default class Schedule extends Component {

    state = {
        date: 10
    };

    componentDidMount() {
        if (this.props.match.params.date) {
            const date = parseInt(this.props.match.params.date);
            this.setState((prevState) => {
                return {
                    ...prevState,
                    date,
                };
            });
        }
    }

    render() {
        return (
            <div>
                <Calendar value={moment(`2017-01-${this.state.date}`)} />
            </div>
        )
    }
}
