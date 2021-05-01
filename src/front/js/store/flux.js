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

			newUrl: "https://3001-scarlet-hippopotamus-84nilml9.ws-us04.gitpod.io/api",
			register: false,
			categorias: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
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
						localStorage.setItem("token", data.token);
						setStore({ email: email });
						console.log(email);
						window.location.reload();
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			registerInit: (email, nombre, password) => {
				const store = getStore();
				console.log(email, nombre, password, "estoy dentro");
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

			getCharacters: async () => {
				await fetch(
					{ newURL },
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json"
						}
					}
				)
					.then(function(response) {
						return response.json();
					})
					.then(data => {
						setStore({ peoples: data.results });
						localStorage.setItem("people", JSON.stringify({ peoples: data.results }));
					});
			}
		}
	};
};

export default getState;
