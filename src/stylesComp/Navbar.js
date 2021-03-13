import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logoText from '../img/logoText.png';
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
	@media only screen and (min-width: 670px) {
		justify-content: space-between;
	}
`;

const LogoImg = styled.img`
	width: 100px;
`;

const NavbarLink = styled.a`
	text-decoration: none;
	color: #000;
	padding: 0.7rem 0.2rem;
	transition: 0.2s ease-in-out all;
	border-bottom: 2px solid #fff;
	font-weight: 400;
	border: 2px solid transparent;
	cursor: pointer;
	@media only screen and (min-width: 670px) {
		padding: 0.2rem 0.2rem;
	}

	&:hover {
		color: #ef962d;
		border-bottom: 2px solid #ef962d;
	}
`;

const NavbarLinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 100vh;
	position: absolute;
	top: 50px;
	left: ${({ click }) => (click ? 0 : '-100%')};
	opacity: 1;
	transition: all 0.5s ease;
	background: #fff;

	@media only screen and (min-width: 670px) {
		margin-left: 7rem;
		position: static;
		height: inherit;
		flex-direction: inherit;
	}
`;

const NavItem = styled.div`
	display: flex;
	flex-direction: column;
	height: 300px;
	justify-content: space-around;
	text-align: center;

	@media only screen and (min-width: 670px) {
		width: 270px;
		justify-content: space-between;
		display: flex;
		flex-direction: inherit;
		height: inherit;
	}
`;

const NavbarIconWrapper = styled.div`
	width: 100%;
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

const Navbar = ({ counts, setCounts }) => {
	const { authTokens, setAuthTokens } = useAuth();
	const [auth, setAuth] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const handleLogout = () => {
		setAuthTokens();
		localStorage.clear();
	};

	const handleInvoice = () => {
		<Redirect to="/invoice" />;
	};

	useEffect(() => {
		if (!(authTokens === null)) {
			setAuth(true);
		}
	},[]);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};


	return (
		<AppBar elevation={0} style={{ backgroundColor: '#fff' }}>
			<Toolbar>
				<Link to={'/'}>
					<LogoImg src={logoText} />
				</Link>
				<NavbarWrapper2>
					<NavbarLinkWrapper click={click}>
						<NavItem>
							<NavbarLink href="/#home">Home</NavbarLink>
							<NavbarLink href="/#produk">Produk</NavbarLink>
							<NavbarLink href="/#galeri">Galeri</NavbarLink>
							<NavbarLink href="/#about">Tentang</NavbarLink>
						</NavItem>
					</NavbarLinkWrapper>
					<NavbarIconWrapper auth={auth}>
						{auth ? (
							<div>
								<Link to={'/cart'}>
									<IconButton aria-label="show 4 new mails">
										<Badge badgeContent={counts} color="secondary">
											<ShoppingCartIcon
												style={{
													fontSize: '2.5rem',
													color: 'black',
												}}
											/>
										</Badge>
									</IconButton>
								</Link>
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
									<Link to="/invoice"
											style={{
												textDecoration: 'none',
												color: 'black',
											}}>
										<MenuItem
											style={{ fontSize: '1.5rem' }}
											onClick={handleClose}
										>
											Invoice
										</MenuItem>
									</Link>
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
								<ButtonOnNavbar to={'/signup'}>Daftar</ButtonOnNavbar>
							</div>
						)}
						<HamburgerIcon onClick={handleClick} />
					</NavbarIconWrapper>
				</NavbarWrapper2>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
