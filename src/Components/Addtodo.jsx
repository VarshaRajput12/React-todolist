import React, { Component } from 'react';
import { TextField, Button} from '@mui/material';

class Addtodo extends Component {
    render() {
        return (
          <div className="container">
            <div className="modal">
              <TextField id="outlined-basic" label="Title" variant="outlined" />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={6}
              />
              <div className="btns">
                <Button variant="contained" color="success">
                  Add
                </Button>
                <Button variant="outlined" color="error">
                  Close
                </Button>
              </div>
            </div>
          </div>
        );
    }
}

export default Addtodo;