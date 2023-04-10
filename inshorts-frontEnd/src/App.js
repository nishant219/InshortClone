import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";

//export components here
import Header from "./components/Header.jsx";
import InfoHeader from "./components/InfoHeader.jsx";
import Articles from "./components/Articles.jsx";

const useStyles = makeStyles({
  container: {
    marginTop: 110,
    width: '58%',
    margin:'0 auto'
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Box>
        
        <Header />

        <Box className={classes.container}>
          <InfoHeader />
         <Articles  />
        </Box>

      </Box>
    </div>
  );
}

export default App;
