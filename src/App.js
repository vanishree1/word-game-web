import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      file : {}
    }
  }
  

  onChangeFile = (e) => {

    console.log('here', e.target.files[0])

    this.setState({
      file: e.target.files[0]
    })
  }

  upload = () => {
    const { file } = this.state;
    console.log('submit file', file)
    let data = {
      word: 'abdicate',
      meaning: 'Give up throne or authority',
      antonym: '',
      synonym: ['reject', 
                  'renounce',
                  'quit',
                  'abandon',
                  'resign',
                  'give up', 
                  'forsake',
              'relinquish'],
      sentence: 'Spain cannot abdicate the responsibility it has taken on in Iraq',
      image: file
  }

  console.log('data', data.image)
  fetch('http://localhost:3001/add-word', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:data 
        }).then(res => {
            console.log('success')
        }).catch(err => {
            console.log('error', err)
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span> Image </span>
          <input type="file" onChange={this.onChangeFile} />
          <button onClick={this.upload}> Upload </button>
        </header>
      </div>
    );
  }
  
}

export default App;
