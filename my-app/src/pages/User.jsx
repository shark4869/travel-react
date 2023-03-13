import React from "react";
import { connect } from "react-redux";
class Account extends React.Component {
    render () {
        let { isLogin, user }=this.props;
        return (
            <h1>Helle {user.first_name} {user.last_name}</h1>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.user.isLogin,
        user: state.user.user,
    }
}
export default connect(mapStateToProps)(Account);