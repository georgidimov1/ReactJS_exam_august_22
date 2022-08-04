import React from 'react'

class ErrorBoundry extends React.Component {
constructor(props){
    super(props);
    this.state = {
        hasError: false
    }
}
componentDidCatch(error, errorInfo){
    console.log(error)
    console.log(errorInfo)
}
static getDerivedStateFromError(error){
    return {hasError: true}
}
render(){
    if(this.state.hasError){
        return <h1>'Something went wrong!'</h1>
    }
    return(
      this.props.children     
    );
}

}

export default ErrorBoundry;