import React, { Component } from 'react';
import './contacts.css';

export default class Contacts extends Component {
  
    state = {
      name: '',
      email: '',
      message: '', 
    };
  

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state;

    if (!name || !email || !message) {
      alert('Заполните все поля формы.'); 
      return;
    }

    const formData = { name, email, message };
    console.log(formData);

    alert('Сообщение отправлено!');
    this.setState({ name: '', email: '', message: '' });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="contacts">
        <div className='background-contacts'><h1>Свяжитесь с нами</h1></div>

        <div className='container-contacts'>

          <div className="form-container">

            <h2>Обратная связь</h2>

            <form className='form-contacts' onSubmit={this.handleSubmit}>

              <div className="form-group">
                <input
                  type="text"
                  name="name" 
                  value={name}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder='Name'

                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder='E-mail'

                />
              </div>

              <div className="form-group">
                <textarea
                  name="message" 
                  value={message}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder='Message'
                ></textarea>
              </div>

              <button type="submit" className="submitbutton">
                Отправить
              </button>
              
            </form>
          </div>

          <div className='iframe'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.201464723316!2d-70.32401468451076!3d43.685574858354606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb29b08b2fab279%3A0x18b32384eda545bc!2sThe+Fitness+Factory+(24%2F6.5)!5e0!3m2!1sen!2sus!4v1547175575160" width="550" height="400" frameborder="0" allowfullscreen=""></iframe>
          </div>

        </div>

      </div>
    );
  }
}
