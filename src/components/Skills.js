import React, { Component } from 'react';

class Skills extends Component {
  skills = ['javascript', 'angular', 'react', 'ionic', 'node', 'mongodb', 'bootstrap', 'tailwind'];
  randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}6b`;
  }
  render() {
    return (
      <div>
        <div className="flex flex-wrap">
          {this.skills.map((skill) => {
            return (
              <div
                style={{ backgroundColor: this.randomColor() }}
                className="border-2 border-white capitalize m-3 p-1.5 rounded-full text-center w-36"
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Skills;
