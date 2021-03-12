import { React, useState, useEffect } from 'react';
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
import { useAuth } from '../config/Auth';

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

const NavbarLink = styled.a`
	text-decoration: none;
	color: #000;
	padding: 0.2rem 0.2rem;
	transition: 0.2s ease-in-out all;
	/* border-radius: 0.3rem;  */
	border-bottom: 2px solid #fff;
	font-weight: 400;
	cursor: pointer;
	&:hover {
		/* background-color: #ef962d; */
		color: #ef962d;
		border-bottom: 2px solid #ef962d;
	}
`;

const NavbarLinkWrapper = styled.div`
	margin-left: 7rem;
	/* display: flex; */
	width: 270px;
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
	/* max-width: 130px; */
	max-width: ${({ auth }) => (auth ? '130px' : '170px')};
	display: flex;
	justify-content: space-between;
	@media only screen and (min-width: 670px) {
		max-width: ${({ auth }) => (auth ? '100px' : '200px')};
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

const ButtonOnNavbar = styled(Link)`
	/* margin-right: 2rem; */
	text-decoration: none;
	color: #ef962d;
	border: 1px solid #ef962d;
	padding: 0.3rem 0.5rem;
	margin-left: 1rem;
	border-radius: 0.5rem;
	&:not(:last-child) {
		background-color: #ef962d;
		color: white;
	}
	@media only screen and (min-width: 670px) {
		padding: 0.5rem 1rem;
	}
`;

// const useStyles = makeStyles((theme) => ({}));

const Navbar = () => {
	const { authTokens, setAuthTokens } = useAuth();
	const [auth, setAuth] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleLogout = () => {
		setAuthTokens();
		localStorage.clear();
	};

	useEffect(() => {
		if (!(authTokens === null)) {
			setAuth(true);
		}
	});

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		<Redirect to="/login" />;
		setAnchorEl(null);
	};

	// useStyles();

	return (
		<div>
			<AppBar elevation={0} style={{backgroundColor: '#fff'}}>
				<Toolbar>
					<LogoImg src={logo} />
					<NavbarWrapper2>
						<NavbarLinkWrapper>
							<NavbarLink href="/#home">Home</NavbarLink>
							<NavbarLink href="/#produk">Produk</NavbarLink>
							<NavbarLink href="/#galeri">Galeri</NavbarLink>
							<NavbarLink href="/#about">Tentang</NavbarLink>
						</NavbarLinkWrapper>
						<NavbarIconWrapper auth={auth}>
							{auth ? (
								<div>
									<IconButton aria-label="show 4 new mails">
										<Badge badgeContent={2} color="secondary">
											<Link to={'/cart'}>
												<ShoppingCartIcon
													style={{
														fontSize: '2.5rem',
														color: 'black',
													}}
												/>
											</Link>
										</Badge>
									</IconButton>
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
											<Link
												to="/login"
												style={{
													textDecoration: 'none',
													color: 'black',
												}}
												onClick={handleLogout}
											>
												Logout
											</Link>
										</MenuItem>
									</Menu>
								</div>
							) : (
								<div>
									<ButtonOnNavbar to={'/login'}>Masuk</ButtonOnNavbar>
									<ButtonOnNavbar to={'/signup'}>
										Daftar
									</ButtonOnNavbar>
								</div>
							)}
							<HamburgerIcon />
						</NavbarIconWrapper>
					</NavbarWrapper2>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
