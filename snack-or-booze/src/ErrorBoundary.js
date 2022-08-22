import {Component} from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import Menu from "./FoodMenu";
// const navigate = useNavigate()

export class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo){
        console.log('Logging', error, errorInfo)
    }

    render(){
        if(this.state.hasError){
            return   <Route path={'/items'} element={<Menu  title="Snacks" />} /> 
        }
        return this.props.children
    }
}

