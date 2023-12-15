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
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Не могу найти!');
        }
        const data = await response.json();
        this.setState({ data: data.meals, isLoading: false }); 
      } catch (error) {
        this.setState({ error, isLoading: false });
      }
    }

    render() {
      const { data, isLoading, error } = this.state;
      return <WrappedComponent data={data} isLoading={isLoading} error={error} {...this.props} />;
    }
  };
};

export default withDataLoader;
