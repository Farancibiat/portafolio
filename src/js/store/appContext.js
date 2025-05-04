import React, { useState, useEffect, startTransition } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the context value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore => {
					// Usar startTransition para actualizar el estado, similar a lo que hará React Router v7
					startTransition(() => {
						setState({
							store: Object.assign(state.store, updatedStore),
							actions: { ...state.actions }
						});
					});
				}
			})
		);

		useEffect(() => {
			// Esta función es el equivalente a "window.onLoad", se ejecuta una sola vez en toda la vida de la aplicación
			// Aquí puedes hacer tus peticiones ajax o fetch api. No uses setState() para guardar datos en el store.
		}, []);
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;