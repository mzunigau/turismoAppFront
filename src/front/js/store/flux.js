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

			newUrl: "https://3001-emerald-tarsier-lsmk3bfk.ws-us03.gitpod.io/api",
			register: false
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
						localStorage.setItem("token", data);
						setStore({ email: email });
						console.log(email);
						window.location.reload();
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getToken: () => {
				let store = getStore();
				let token = localStorage.getItem("token");

				if (token && token.length > 0) {
					setStore({ login: true });
				} else {
					setStore({ login: false });
				}
			},

			registerInit: (email, username, password) => {
				const store = getStore();
				console.log(email, username, password, "estoy dentro");
				fetch(`${store.newUrl}/register`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					mode: "no-cors",
					body: JSON.stringify({ email: email, username: username, password: password })
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
			}
		}
	};
};

export default getState;
