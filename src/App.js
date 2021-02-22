// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar'
import AppBar from './components/Appbar'
import Second from './components/Second'
import About from './components/About'
import Employers from './components/Employers'
import Executives from './components/Executives'
import Clients from './components/Clients'
import Articles from './components/Articles'
// import Theme from './components/Theme'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Paper } from '@material-ui/core';
import doctorImg from './images/doctor.jpg';
import handImg from './images/hand.jpg';

const styles = {
  paperContainer: {
    minHeight: '100vh',
    backgroundImage: `url(${doctorImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // backgroundColor: '#000000',
    // opacity: 0.8,  
  },
  paperContainerSecond: {
    minHeight: '70vh',
    backgroundImage: `url(${handImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: '-10px',
    // backgroundColor: 'rgba(128, 128, 128, .4)' 
    position: "absolute",
        opacity: 0.8,  

    }
};

// const useStyles = makeStyles((theme) => ({
//     root: {
//         minHeight: '100vh',
//         backgroundImage: `url(${doctorImg})`,
//         backgroundPosition: 'center', 
//         backgroundSize: 'cover', 
//         backgroundRepeat: 'no-repeat',
//         // margin: 'auto',
//         // height: '25vh',
//         // width: 'calc(20vw * 0.54 - 2%)',
//         borderRadius: 8,
//         display: 'flex',
//         // marginLeft: '10px',
//         // marginTop: '10px'
// zIndex: 1000,

//     },
// }));


function App() {
  // const classes = useStyles();

  return (
    <div className="App">
      {/* <div className={classes.root}> 
            <CssBaseline /> */}
      <Paper style={styles.paperContainer}>
        <AppBar />
      </Paper>
      <div style={{position: "relative"}}>
      <Paper style= {styles.paperContainerSecond}>
        <Second/>
      </Paper>
      <About/>
      <Employers/>
      <Executives/>
      <Clients/>
      <Articles/>
    </div>

    // <Navbar/>
    // </div>
  );
}

export default App;
