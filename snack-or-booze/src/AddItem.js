import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import dataContext from './CreateContext'
import './AddItem.css'


export const AddItem = () => {



    const initial = {
        id:'',
        name: '',
        recipe: '',
        serve:''
    }
    const [state, setState] = useState(initial)
    // const {drinksArray, snacksArray} = useContext(dataContext)
    const {drinksArray, addDrink, addSnack} = useContext(dataContext)
    const navigate = useNavigate()
    // console.log(drinksArray, addDrink, addSnack)


    function handleChange(e){
        const {name, value} = e.target;
        setState(data => ( {
            ...data,
            [name]: value
        }))
    }
    function handleDrink(e){
        e.preventDefault()
        console.log(state, 'drink')
        addDrink(state)
        navigate('/')
    }
    function handleSnack(e){
        e.preventDefault()
        console.log(state,'snack')
        addSnack(state)
        navigate('/')
    }

    return (
        <div className='AddItem'>
        <form >
        <input name='id' value={state.id} type='text' onChange={handleChange} placeholder='id' />
        <input name='name' value={state.name} type='text' onChange={handleChange} placeholder='item' />
        <textarea 
            name='recipe' 
            value={state.recipe} 
            type='text' 
            onChange={handleChange}   
            rows="3" cols="60" 
            placeholder='recipe'
            id='TITLE'></textarea>
        <input name='serve' value={state.serve} onChange={handleChange} placeholder='serve' />
        <div>
            <button onClick={handleDrink} >DRINK</button>
            <button onClick={handleSnack} >SNACK</button>
        </div>
        
        
        </form>
          
        </div>
    )
}
