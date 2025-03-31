import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: "",
    };

    componentDidCatch(error){
        this.setState({
            hasError: true,
            errorMessage: error.message,

        });
        console.log(error);
    }

    render(){
        if(this.state.hasError){
            return (
                <div style={{ textAlign: "center", padding: "50px" }}>
                <h1>Oops! Something went wrong.</h1>
                <p>We’re working to fix this. Please try refreshing the page.</p>
                <button onClick={() => window.location.reload()}>Reload Page</button>
              </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;