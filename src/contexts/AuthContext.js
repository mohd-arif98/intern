import React from 'react';

const AuthContext = React.createContext();

class AuthContextProvider extends React.Component
{
    state =  
        {
            authToken: null,
            signOut: null,
            productPurchased: [],
            cartItems: [],
        }

    addToCart = (product) =>
    {
        this.setState({cartItems: [...this.state.cartItems, product]});
    }

    render()
    {
        return(
            <AuthContext.Provider value={{...this.state, addToCart: this.addToCart}} >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;
