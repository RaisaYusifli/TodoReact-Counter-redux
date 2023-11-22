import React from "react";

export class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false};
    }
    //error boundry
    static getDerivedStateFromError(error){
        console.log("getDerivedStateFromError",error);
        return {hasError:true}
    }

    componentDidCatch(error){
        console.log(error)
    }

    render(){
        const {hasError}=this.state;
        const {children}=this.props;

        if(hasError){
            return <p>Someting went wrong. Please refresh page!</p>
        }

        return children;
    }
}