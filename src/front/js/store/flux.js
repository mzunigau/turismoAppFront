const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			recovery: false,
			resetRecovery: false,
			emailRecovery: null,
			resetUserId: null,
			newPassword: null,
			tempPassword: null,
			newUrl: "https://3001-lavender-aardwolf-o55smrfq.ws-us03.gitpod.io/api",
			register: false,
			categorias: [],
			logOut: true,
			setProfile: null,
			sitios: [],
			sitiosID: null,
			categID: null,
			usuario: {}
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			logOut: () => {
				localStorage.removeItem("token");
				localStorage.removeItem("usuario");
				const store = getStore();
				store.logOut = false;
			},

			loginInit: (email, password) => {
				const store = getStore();
				fetch(`${store.newUrl}/login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						store.logOut = true;
						localStorage.setItem("token", data.token);
						localStorage.setItem("usuario", JSON.stringify(data.usuario));
						setStore({ email: email });
						setStore({ usuario: data.usuario });
						console.log(store.usuario, "por favooor!");
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			registerInit: (email, nombre, password) => {
				const store = getStore();
				fetch(`${store.newUrl}/usuarios`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, nombre: nombre, password: password })
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ register: true });
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getToken: () => {
				let store = getStore();
				let token = localStorage.getItem("token");
				console.log(token, "este es el token");
				if (token && token.length > 0) {
					setStore({ login: true });
				} else {
					setStore({ login: false });
				}
			},

			getCategorias: () => {
				const store = getStore();
				let token = localStorage.getItem("token");
				fetch(`${store.newUrl}/categorias`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data, "Marco");
						setStore({ categorias: data.result.categorias });
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getUsuario: () => {
				const store = getStore();
				let token = localStorage.getItem("token");
				let usuario = JSON.parse(localStorage.getItem("usuario"));
				console.log("getUsuario", usuario);
				fetch(`${store.newUrl}/usuarios/${usuario.id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data, "Marco");
						setStore({ usuario: data });
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getSitios: () => {
				const store = getStore();
				let token = localStorage.getItem("token");
				fetch(`${store.newUrl}/sitios`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data, "Marco");
						setStore({ sitios: data });
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getSitiosID: id => {
				const store = getStore();
				let token = localStorage.getItem("token");
				fetch(`${store.newUrl}/sitios/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data, "Marco");
						setStore({ sitiosID: data });
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getCategID: id => {
				const store = getStore();
				let token = localStorage.getItem("token");
				fetch(`${store.newUrl}/categorias/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data, "Marco");
						setStore({ categID: data });
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			usuarioUpdated: () => {
				const store = getStore();
				let token = localStorage.getItem("token");
				fetch(`${store.newUrl}/usuarios/${store.usuario.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					},
					body: JSON.stringify(store.usuario)
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ usuario: data });
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			addFavoritos: () => {
				const store = getStore();
				let token = localStorage.getItem("token");
				fetch(`${store.newUrl}/usuarios/${store.usuario.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer	${token}`
					},
					body: JSON.stringify(store.usuario)
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ usuario: data });
					})

					.catch(err => {
						console.log("error", err);
					});
            },
            setEmail: email => {
				setStore({ emailRecovery: email });
				return true;
			},
			setUserId: id => {
				setStore({ resetUserId: id });
				return true;
			},
			setTempPass: temp => {
				setStore({ tempPassword: temp });
				return true;
			},
			setNewPass: newPss => {
				setStore({ newPassword: newPss });
				return true;
			},
			recoveryEmail: () => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/email", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: store.emailRecovery })
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log("DATA DEL RECOVERY ", data);
						if (data == "OK") {
							setStore({ recovery: true });
							return true;
						}
					})

					.catch(err => {
						console.log("error", err);
					});
			},
			resetPassword: id => {
				const store = getStore();
				fetch(process.env.BACKEND_URL + "/api/reset", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						id: id,
						password: store.newPassword,
						temp: store.tempPassword
					})
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log("DATA DEL RECOVERY ", data);
						if (data == "OK") {
							setStore({ resetRecovery: true });
						}
						return true;
					})

					.catch(err => {
						console.log("error", err);
					});
			}
		}
	};
};

export default getState;
