import React, { Component, createRef } from 'react'
import './contacts.css';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.messageRef = createRef(); 
    this.state = {
      name: '',
      email: '',
     
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const message = this.messageRef.current.value; 
    const { name, email } = this.state;
    const formData = { name, email, message };
    console.log(formData);
    alert('Сообщение отправлено!');
    this.setState({ name: '', email: '' }); 
    this.messageRef.current.value = ''; 
  };

  render() {
    const { name, email } = this.state;

    return (
      <div className="Contacts">

        <div className="form-container">

          <h2>Обратная связь</h2>

          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Имя:</label>
              <input type="text" name="name" value={name} onChange={this.handleChange} className="form-control" />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={email} onChange={this.handleChange} className="form-control" />
            </div>

            <div className="form-group">
              <label>Сообщение:</label>
              <textarea ref={this.messageRef} className="form-control"></textarea> 
            </div>

            <button type="submit" className="submit-button">Отправить</button>
            
          </form>
        </div>

        <div className="contact-info">
          <h3>Контактная информация</h3>
          <p>Телефон: +7 (123) 456-78-90</p>
          <p>Email: info@example.com</p>
        </div>

      </div>
    );
  }
}