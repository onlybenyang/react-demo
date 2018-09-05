import {connect} from 'react-redux';
import {getUserInfo} from "../redux/actions/UserInfo";
import UserInfo from './UserInfo';

export default connect(state =>
{
    userInfo: state.userInfo
},
getUserInfo
)(UserInfo);