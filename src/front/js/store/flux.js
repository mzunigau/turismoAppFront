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
			tempPassword: null
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
