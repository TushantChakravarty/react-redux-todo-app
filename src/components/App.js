import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../actions';
import { Button } from 'react-bootstrap';

const App = ({ qty, dispatch }) => {
    let input, item;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) { return }
        item = {
            text: input.value
        }
        dispatch(addItems(item));
        input.value = '';
    };

    return (
         <center> <div className={'wrapper'}>
           <h5>To Do List</h5>
            <form onSubmit={handleSubmit} >
                <div className={'div-wrapper'}>
                  <label>Todo: </label>
                    <input style={{height:'7vh'}} type="text" name="name" ref={node => (input = node)} />
                </div>
                <div className={'div-wrapper'}>
                    <label>&nbsp;</label> 
                   
                   <Button variant="primary" style={{width:'12vw'}} type='submit' value='Submit'>Add</Button>
                </div>
            </form>
        </div> </center>
    )
}

export default connect()(App)