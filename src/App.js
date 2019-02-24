import React, { Component } from 'react';
import SlidingTilePuzzle from "react-sliding-tile-puzzle";
import { Button, Segment } from "semantic-ui-react";
import logo from './logo.svg';
import gordis from './gordis.jpeg';
import fati from './fatiYJuampi.jpeg';
import loli from './loliYfran.jpeg';
import maru from './maruYsanti.jpeg';
import anita from './anitaYsimon.jpeg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solvePuzzle: false,
      newPuzzle: false,
      activeImage: gordis
    };
  }

  handleClickSolvePuzzle = () => {
    this.setState({ solvePuzzle: !this.state.solvePuzzle });
  };

  handleClickNewPuzzle = () => {
    this.setState({ newPuzzle: !this.state.newPuzzle });
  };
  render() {
    const { activeImage, solvePuzzle } = this.state;
    return (
      <div className="App">
        <div style={{ width: 130 * 2, margin: '25px auto', }}>
          <div
            onClick={() => { this.setState({ activeImage: gordis }); this.handleClickNewPuzzle() }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <img style={{ width: '30px', height: '30px', borderRadius: 50 }} src={gordis} alt="lta" />
            <h3 style={{ margin: 0, marginLeft: 10 }}>Ichu y Robert</h3>
          </div>
          <div
            onClick={() => { this.setState({ activeImage: fati }); this.handleClickNewPuzzle() }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <img style={{ width: '30px', height: '30px', borderRadius: 50 }} src={fati} alt="lta" />
            <h3 style={{ margin: 0, marginLeft: 10 }}>Fati y Juampi</h3>
          </div>
          <div
            onClick={() => { this.setState({ activeImage: loli }); this.handleClickNewPuzzle() }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <img style={{ width: '30px', height: '30px', borderRadius: 50 }} src={loli} alt="lta" />
            <h3 style={{ margin: 0, marginLeft: 10 }}>Loli y Fran</h3>
          </div>
          <div
            onClick={() => { this.setState({ activeImage: maru }); this.handleClickNewPuzzle() }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <img style={{ width: '30px', height: '30px', borderRadius: 50 }} src={maru} alt="lta" />
            <h3 style={{ margin: 0, marginLeft: 10 }}>Maru y Santi</h3>
          </div>
          <div
            onClick={() => { this.setState({ activeImage: anita }); this.handleClickNewPuzzle() }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <img style={{ width: '30px', height: '30px', borderRadius: 50 }} src={anita} alt="lta" />
            <h3 style={{ margin: 0, marginLeft: 10 }}>Anita y Simon</h3>
          </div>
          <Segment>
            <Button fluid onClick={this.handleClickNewPuzzle}>
              Nuevo Juego
            </Button>
          </Segment>
          <SlidingTilePuzzle
            solvePuzzle={solvePuzzle}
            newPuzzle={this.state.newPuzzle}
            maxIterations={300}
            image={activeImage}
            size={130 * 2}
          />
        </div>
      </div>
    );
  }
}

export default App;
