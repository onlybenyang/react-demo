'use strict'

import React, {
    Component
} from 'react';

export default class User extends Component {
    render() {
        return (
            <div>
				<div>用户信息: {this.props.user.userInfo}</div>
				// <div>请求成功: {this.props.user.user}</div>
				<div>请求失败: {this.props.user.errorMsg}</div>
				<button onClick = {()=>{this.props.increase()}}>请求用户信息</button>
				// <button onClick = {()=>{this.props.decrease()}}>请求成功状态</button>
				<button onClick = {()=>{this.props.reset()}}>请求失败状态</button>
			</div>
        );
    }
}
