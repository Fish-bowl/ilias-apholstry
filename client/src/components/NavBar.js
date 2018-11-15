import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  // rightNavs = () => {
  //   const { user, dispatch, history } = this.props;

  //   if (user.id) {
  //     return (
  //       <Menu.Menu position='right'>
  //         <Menu.Item
  //           name='Logout'
  //           onClick={() => dispatch(handleLogout(history))}
  //         />
  //       </Menu.Menu>
  //     );
  //   }
  //   return (
  //     <Menu.Menu position="right">
  //       <Link to="/register">
  //         <Menu.Item name="Register" />
  //       </Link>
  //       <Link to="/login">
  //         <Menu.Item name="Login" />
  //       </Link>
  //     </Menu.Menu>
  //   );
  // }

  render() {
    return (
      <Menu>
        <Menu.Item as={Link} to='/' name='Home' />
        <Menu.Item as={Link} to='/About' name='About' />
        <Menu.Item as={Link} to='/Pricing' name='Pricing' />
        <Menu.Item as={Link} to='/Gallery' name='Gallery' />
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
