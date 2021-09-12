import React, { Component } from 'react';
import Githubstats from '../components/Githubstats';
import Photo from '../components/Photo';
import Skills from '../components/Skills';
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
            <h1 className="my-1 text-3xl text-red-700 text-center">
              Hello 👋, I'm <span className="text-4xl">Rejneesh Pillai</span>
            </h1>
            <h5 className="border-b-4 border-t text-red-100 text-xl text-center">I'm a full-stack web developer 💻</h5>
          </div>
        </div>
        <div className="flex justify-center">
          <Verticaldivider />
        </div>
        <div className="m-10">
          <h3 className="font-fredoka underline text-2xl">Skills</h3>
          <Skills />
        </div>
        <div className="m-10">
          <h3 className="font-fredoka underline text-2xl">Github stats</h3>
          <Githubstats />
        </div>
      </>
    );
  }
}

Portfolio.propTypes = {};

export default Portfolio;
