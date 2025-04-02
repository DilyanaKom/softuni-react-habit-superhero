import { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
}  

componentDidCatch(error){
    this.setState({
        hasError: true
    })
        console.log(error);
    }

    render(){
        if(this.state.hasError){
            return (
                <div style={{ textAlign: "center", padding: "50px" }}>
                <h1>Oops! Something went wrong. Please try refreshing the page.</h1>
              </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;