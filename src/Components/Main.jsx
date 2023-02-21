import React, { Component } from 'react';
import Addtodo from './Addtodo';

class Main extends Component {
    render() {
        return (
          <div>
            <div className="create_task">
              <h2>
                Add a task <span>+</span>
              </h2>
            </div>
            <Addtodo />
          </div>
        );
    }
}

export default Main;