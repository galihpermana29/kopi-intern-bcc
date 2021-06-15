import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './Auth';

function PrivateRoute({ component: Component, ...rest }) {
	const { authTokens } = useAuth();
	return (
		<Route
			{...rest}
			render={(props) =>{
				return authTokens ? <Component {...props} /> : <Redirect to="/login" />
         }}
		/>
	);
}

export default PrivateRoute;


/*

!Route

<Route path="/tes" component={Tes}>

jika ada match dengan /tes, maka component Tes akan di render. untuk merender component bila path nya cocok ada 3 cara
1. Component
2. Render
   <Route 
      exact path=”/items” 
      render={props => <Items {…props} data={cat}/>}
   />

   menggunakan render, kita mrender menggunakan function seperti contoh diatas. function tersebut mempunyai props. yang mana berisi properti :

   history: {length: 15, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
   location: {pathname: "/", search: "", hash: "", state: undefined, key: "z8u8en"}
   match: {path: "/", url: "/", isExact: true, params: {…}}
   staticContext: undefined
   __proto__: Object

3. Children


!Membuat custom route

seperti pada file ini, ini merupakan file custom route.

function PrivateRoute({ component: Component, ...rest }) {
	const { authTokens } = useAuth();
	return (
		<Route
			{...rest}
			render={(props) =>{
				return authTokens ? <Component {...props} /> : <Redirect to="/login" />
         }}
		/>
	);
}

export default PrivateRoute;

function PrivateRoute ini mempunyai parameter component yang diubah jadi Component dengan C besar. dan spread ...rest. ini seperti props, jadi ketika pada App.js

<PrivateRouter path="/home" component={Home}></PrivateRouter>

nah function itu menerima props component yang diubah jadi Component, dan props lain speerti path, diterima dengan rest parameter ...rest 

Tujuan dari PrivateRoute di file ini, untuk meredirect ketika user belum melakukan login, tetapi ingin mengakses halaman lain yang membutuhkan login.

jadi function ini mereturn ini
return (
		<Route
			{...rest}
			render={(props) =>{
				return authTokens ? <Component {...props} /> : <Redirect to="/login" />
         }}
		/>
);

dia mereturn tag <Route {...rest} render={}></Route>

jadi sebenarnya custom router ini mereturn tag Route seperti biasanya juga, cuma diberikan customisasi pada proses rendering componentnya. perhatikan bahwa props ...rest yang berisi path yang dikirimkan App.js di kirimkan lagi sebagai props pada tag Route nya, lalu kita render menggunakan cara render yang menggunakan function, dimana melakukan pengecekan, ada gak sih authTokens nya? kalau ada maka 

<Component {...props} />

apa maksudnya? jadi props component yang tadi dikirimkan melalui App.js

<PrivateRouter path="/home" component={Home}></PrivateRouter> 

itu, yang home. kan di terima tuh sama parameter component yang diubah jadi Component. nah tujuannya diubah jadi huruf kapital itu biar berubah jadi tag Home. jadi maksudnya itu gini 

<Home {...props} />

dengan kata lain, kalau authTOkens dah ada, render component yang dikirimkan dari App.js sesuai routingnya.

kalau belum ada authTokennya
<Redirect to="/login" />

balikkan lagi ke login page

*/