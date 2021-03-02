import { React, useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../img/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';

const NavbarWrapper1 = styled(AppBar)`
	background: #ffffff;
   
`;
const NavbarWrapper2 = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	align-items: center;
	/* border: 1px solid red; */

	@media only screen and (min-width: 670px) {
		justify-content: space-between;
	}
`;

const LogoImg = styled.img`
	width: 40px;
`;

const NavbarLink = styled(Link)`
	text-decoration: none;
	color: #000;
	padding: 0.2rem 0.2rem;
	transition: 0.2s ease-in-out all;
	/* border-radius: 0.3rem;  */
	border-bottom: 2px solid #fff;
   font-weight: 400;
	&:hover {
		/* background-color: #ef962d; */
		color: #ef962d;
		border-bottom: 2px solid #ef962d;
	}
`;

const NavbarLinkWrapper = styled.div`
	margin-left: 7rem;
	/* display: flex; */
	width: 250px;
	justify-content: space-between;
	display: none;
	/* visibility: hidden; */

	@media only screen and (min-width: 670px) {
		display: flex;
		/* visibility: visible; */
	}
`;

const NavbarIconWrapper = styled.div`
	width: 100%;
	max-width: 140px;
	display: flex;
	justify-content: space-between;
	/* justify-self: end; */
	@media only screen and (min-width: 670px) {
		max-width: 110px;
	}
`;

const HamburgerIcon = styled(MenuIcon)`
	color: black;
	font-size: 2.5rem;
	align-self: center;
	@media only screen and (min-width: 670px) {
		display: none;
	}
`;

const useStyles = makeStyles((theme) => ({}));

const Navbar = () => {
	useStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
	const [auth, setAuth] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
      <Redirect to="/login"/>
		setAnchorEl(null);
	};

	return (
		<div>
			<NavbarWrapper1 elevation={0}>
				<Toolbar>
					<LogoImg src={logo} />
					<NavbarWrapper2>
						<NavbarLinkWrapper>
							<NavbarLink>Home</NavbarLink>
							<NavbarLink>Produk</NavbarLink>
							<NavbarLink>Galeri</NavbarLink>
						</NavbarLinkWrapper>
						<NavbarIconWrapper>
							<IconButton aria-label="show 4 new mails">
								<Badge badgeContent={9} color="secondary">
									<ShoppingCartIcon
										style={{ fontSize: '2.5rem', color: 'black' }}
									/>
								</Badge>
							</IconButton>
							{auth && (
								<div>
									<IconButton
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleMenu}
										color="inherit"
										style={{ color: 'black' }}
									>
										<AccountCircle style={{ fontSize: '2.5rem' }} />
									</IconButton>
									<Menu
										id="menu-appbar"
										anchorEl={anchorEl}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										open={open}
										onClose={handleClose}
									>
										<MenuItem
											style={{ fontSize: '1.5rem' }}
											onClick={handleClose}
										>
											Profile
										</MenuItem>
										<MenuItem
											style={{ fontSize: '1.5rem' }}
											onClick={handleClose}
										>
											Logout
										</MenuItem>
									</Menu>
								</div>
							)}
							{/* <IconButton edge="start" aria-label="menu"> */}
							<HamburgerIcon />
							{/* </IconButton> */}
						</NavbarIconWrapper>
					</NavbarWrapper2>
				</Toolbar>
			</NavbarWrapper1>
		</div>
	);
};

export default Navbar;
