import React from "react";

class ContactInput extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            tag:'',
        }

        this.onNameChangeEventHandler = 
        this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = 
        this.onTagChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = 
        this.onSubmitChangeEventHandler.bind(this);
    }

    onNameChangeEventHandler(event){
        this.setState({
            name:event.target.value,
        });
    }
    onTagChangeEventHandler(event){
        this.setState({
            tag:event.target.value,
        })
    }
    onSubmitChangeEventHandler(event){
        event.preventDefault();
        this.props.addContact(this.state);
    }
    


    render(){
        return(
            <form className="contact-input" onSubmit={this.onSubmitChangeEventHandler}>
                <input type='name' placeholder='name' value={this.state.name} onChange={this.onNameChangeEventHandler}/>
                <input type='tag' placeholder='tag' value={this.state.tag} onChange={this.onTagChangeEventHandler}/>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}
export default ContactInput;