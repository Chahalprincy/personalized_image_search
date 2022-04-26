import React, { useState, useEffect } from 'react'
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import theme from './styles';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Home from './components/Home';
import Button from '@material-ui/core/Button';
import NameForm from './components/NameForm';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { TextField } from '@material-ui/core';

const styles = theme => ({
  content: {
      margin: '0 auto',
      marginTop: '1.5em'
  },
  root: {
  },
  gridItem: {
      padding: theme.spacing(1.5),
  },
  sectionHeader: {
      marginTop: '0.15em',
  },
  container: {
      padding: theme.spacing(2),
  },
  footer: {
      marginTop: '0.15em',
      fontSize: 14,
  }
});

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      buttonPressed: "",
      testingData: ["IMG_0771.JPG", "IMG_0186.JPG"],
      masonryImages: [
        "assets/images/fox-g3526f56b8_640.jpeg",
        "assets/images/IMG_0771.JPG",
        "assets/images/9e902d92-1f9d-48ac-81b1-7a9c31495cee.jpg",
        "assets/images/IMG_1355.JPG",
        "assets/images/building-gac7f4c125_640.jpeg",
        "assets/images/IMG_5429.JPG",
        "assets/images/hut-gd0533f817_640.jpeg",
        "assets/images/IMG_5485.JPG",
      ],
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // state = {
  //   buttonPressed: "",
  //   testingData: ["IMG_0771.JPG", "IMG_0186.JPG"],
  //   masonryImages: [
  //     "assets/images/fox-g3526f56b8_640.jpeg",
  //     "assets/images/IMG_0771.JPG",
  //     "assets/images/9e902d92-1f9d-48ac-81b1-7a9c31495cee.jpg",
  //     "assets/images/IMG_1355.JPG",
  //     "assets/images/building-gac7f4c125_640.jpeg",
  //     "assets/images/IMG_5429.JPG",
  //     "assets/images/hut-gd0533f817_640.jpeg",
  //     "assets/images/IMG_5485.JPG",
  //   ],
  //   value: "",
  // };


  componentDidMount() {
    console.log("Component did mount", this.state.masonryImages)
  }

  componentDidUpdate() {
    console.log("Component did update", this.state.masonryImages)
  }

  onEnterPress(query_text) {
    console.log("------------------------");
    console.log("INSIDE onEnterPress");
    console.log(query_text);
    console.log("------------------------");
    // fetch("/members").then(
    //   res => res.json()
    // ).then(
    //   data => {
    //     this.setState({ masonryImages: data["members"]});
    //   }
    // )
    fetch("/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "search_query": query_text,
      })
    }).then(
      res => res.json()
    ).then(
      data => {
        this.setState({ masonryImages: data["members"]});
      }
    )
  }

  onSearchPress() {
    fetch("/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "search_query": this.state.value,
      })
    }).then(
      res => res.json()
    ).then(
      data => {
        this.setState({ masonryImages: data["members"]});
      }
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("********************************");
    console.log(this.state.value);
    // fetch("/members").then(
    //   res => res.json()
    // ).then(
    //   data => {
    //     this.setState({ masonryImages: data["members"]});
    //   }
    // )
    fetch("/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "search_query": this.state.value,
      })
    }).then(
      res => res.json()
    ).then(
      data => {
        this.setState({ masonryImages: data["members"]});
      }
    )
    console.log("********************************")
    event.preventDefault();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL + '/'}>
          <div className="App">
            <header className="App-header">
              <Header/>
            </header>

            <div>
              <Route path="/" exact component={Home} />
            </div>

            <TextField sx={{ m: 2 }}
              label="Enter Search Query"
              variant="outlined"
              onChange={ this.handleChange }
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  this.onEnterPress(e.target.value)
                }
              }}
            />

            {/* <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form> */}

            <br/>
            <br/>

            <Button
              variant="contained"
              color="primary"
              onClick={() => this.onSearchPress()}
            >
              Search
            </Button>

            <br/>
            <br/>

            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
              <Masonry columnsCount={3} gutter="10px">
                {this.state.masonryImages.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt=""
                    style={{width: "100%", display: "block", alignSelf: 'center'}}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>

          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)