import './App.css';
import Main from './components/Main/Main';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    common: {
      blueSpecial: "#001E62"
    },
    primary: {
      main: "#B8CCEA"
    },
    secondary: {
      main: "#001E62"
    },
    neutral: {
      main: "#FFFFFF"
    },
    black: {
      main: "#000000"
    }
  },
  typography: {
    fontFamily: ["Verdana"],
    h1: {
      fontSize: "30px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "25px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "17px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "14px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "10px",
      fontWeight: 600,
    },
  }

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
