import React, { Component } from 'react';
import { Badge, Avatar } from 'antd';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
                <h2>John Doe</h2>
            </div>
        )
    }
}
