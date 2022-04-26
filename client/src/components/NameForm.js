// import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';


// const styles = theme => ({
//     content: {
//         margin: '0 auto',
//         marginTop: '1.5em'
//     },
//     root: {
//     },
//     gridItem: {
//         padding: theme.spacing(1.5),
//     },
//     sectionHeader: {
//         marginTop: '0.15em',
//     },
//     container: {
//         padding: theme.spacing(2),
//     },
//     footer: {
//         marginTop: '0.15em',
//         fontSize: 14,
//     }
// });

// // function App() {
// //   const [data, setData] = useState([{}])

// //   useEffect(() => {
// //     fetch("/members").then(
// //       res => res.json()
// //     ).then(
// //       data => {
// //         setData(data)
// //         console.log(data)
// //       }
// //     )
// //   }, [])

// //   return (
// //     <div>

// //       {(typeof data.members === 'undefined') ? (
// //         <p>Loading...</p>
// //       ) : (
// //         data.members.map((member, i) => (
// //           <p key={i}>{member}</p>
// //         ))
// //       )}

// //     </div>
// //   )
// // }



// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
  
//     render() {
//         const [data, setData] = useState([{}])

//         return (
//             <form onSubmit={this.handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//             </label>
//             <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

// NameForm.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(NameForm);