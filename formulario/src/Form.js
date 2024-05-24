//import { render } from 'react';
import React, { Component } from 'react';


class Form extends Component {  state = {name: '' }

handleSumit = (e) => {  e.preventDefault()
let { name } = this.state  
name = name

console.log('funcionou', name)
}

handleInputChange = (e) => {  this.setState({name: e.target.value})}

render() {
    const { name } = this.state  
return (
    <section>
        <form onSubmit={this.handleSumit}>
            <label>  nome:
                <input onChange={this.handleInputChange} type='text' placeholder='Nome' />
            </label>

            <button type='submit'>Enviar</button>
        </form>
        <h3>{ name } </h3>
    </section>
    )
}
}

export default Form
