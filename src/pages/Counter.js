'use strict'

import React, {
    Component
} from 'react';

export default class Counter extends Component {
    render() {
        return (
            <div>
				<div>当前计数: {this.props.counter.count}</div>
			    <button onClick = {()=>{this.props.increase()}}>增加</button>
				<button onClick = {()=>{this.props.decrease()}}>减少</button>
				<button onClick = {()=>{this.props.reset()}}>重置</button>
			</div>
        );
    }
}
