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
      <Menu style={styles.menu} secondary pointing >
        <Menu.Item style={styles.menuItem} as={Link} to='/' name='Home' />
        <Menu.Item style={styles.menuItem} as={Link} to='/About' name='About' />
        <Menu.Item style={styles.menuHeader} header as={Link} to='/' name='Brand' />
        <Menu.Item style={styles.menuItem} as={Link} to='/Pricing' name='Pricing' />
        <Menu.Item style={styles.menuItem} as={Link} to='/Gallery' name='Gallery' />
      </Menu>
    );
  }
}

const styles = {
  menu: {
    display: 'flex',
    justifyContent: 'center',
  },
  menuHeader: {
    marginLeft: '25px',
    marginRight: '25px',
    alignSelf: 'center',
    fontSize: '25px'
  },
  menuItem: {
    marginLeft: '25px',
    marginRight: '25px',
    alignSelf: 'center',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
