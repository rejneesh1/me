import React, { Component } from 'react';
import Githubstats from '../components/Githubstats';
import Photo from '../components/Photo';
import Verticaldivider from '../components/Verticaldivider';

class Portfolio extends Component {
  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="flex flex-wrap items-center justify-center m-2">
          <Photo />
          <div className="md:ml-10">
            <h1 className="my-1 text-3xl text-red-700">
              Hello 👋, I'm <span className="text-4xl">Rejneesh Pillai</span>
            </h1>
            <h5 className="border-b-4 border-t text-red-100 text-xl">I'm a full-stack web developer 💻</h5>
          </div>
        </div>
        <div className="flex justify-center">
          <Verticaldivider />
        </div>
        <Githubstats />
      </>
    );
  }
}

Portfolio.propTypes = {};

export default Portfolio;
