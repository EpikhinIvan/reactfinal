import React, { Component } from 'react';

const withDataLoader = (WrappedComponent, url) => {
  return class extends Component {
    state = {
      data: null,
      isLoading: true,
      error: null,
    };

    async componentDidMount() {
      try {
        const response = await fetch(url);// Отправляем запрос на указанный URL
        if (!response.ok) {
          throw new Error('Не могу найти!'); // Если ответ не успешен, выбрасываем ошибку
        }
        const data = await response.json();// Парсим JSON из ответа
        this.setState({ data: data.meals, isLoading: false }); // Устанавливаем данные и завершаем загрузку
      } catch (error) {
        this.setState({ error, isLoading: false });// В случае ошибки устанавливаем ошибку и завершаем загрузку
      }
    }

    render() {
      const { data, isLoading, error } = this.state;
      return <WrappedComponent data={data} isLoading={isLoading} error={error} {...this.props} />;
    }
  };
};
 
export default withDataLoader;
