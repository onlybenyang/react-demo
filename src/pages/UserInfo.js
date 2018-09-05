import React, {Component} from 'react';

export default class UserInfo extends Component {

    render() {
        let {user, isLoading, errorMsg} = this.props.userInfo;
        console.warn(JSON.stringify(this.props.userInfo))
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    {/* <p>用户名：{user.name}</p>
                                    <p>介绍：{user.intro}</p> */}
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}