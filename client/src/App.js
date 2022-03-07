import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './views/login';
import Main from './views/main';
import Write from './views/write';
import SignUp from './views/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [user, setLoginUser] = useState({})

	//const [wallet, setWallet] = useState({})
	/* useEffect( () => {
		async function connectWeb3() {
			if (typeof(window.ethereum) !== "undefined") {
				try {
					const web = new Web3(window.ethereum);
					setWeb3(web);
				} catch (err) {
					console.log(err);
				}
			}
		}
		connectWeb3();
	}, []);

	const connectWallet = async() => {
		var accounts = await window.ethereum.request({
			method: 'eth_requestAccounts'
		});

		setWallet(accounts[0]);
	} */
/* 	useEffect(() => {
		const userData = window.localStorage.getItem('user');
		setLoginUser(JSON.parse(userData));
	  }, []);
	
	useEffect(()=>{
		window.localStorage.setItem('user', JSON.stringify(user));
	}); */

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Login setLoginUser={setLoginUser}/>} />
				<Route exact path='signup' element={<SignUp />} />
				{/* <Route path='/main' element={<Main />} exact /> */}

				<Route 
				exact path='/main' 
				element = {user && user._id ? 
				<Main user={user} setLoginUser={setLoginUser}/>
				:<Login setLoginUser={setLoginUser}/>}
				/>

				<Route exact path='/write' element={<Write user={user} setLoginUser={setLoginUser}/>} exact />
				{/* <Route path='users/*' element={<Users />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
