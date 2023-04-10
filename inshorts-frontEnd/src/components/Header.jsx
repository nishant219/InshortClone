import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
//import { makeStyles } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import Menu from "@mui/icons-material/Menu";


//makeStyle is fun which takes obj as argument
const useStyles = makeStyles({
  //all header file css as follows
  header: {
    color: '#FFF',
    background: '#FFF',
    height: 70,
  },
  menu: {
    color: "#000",
  },
  logo: {
    height: 60,
    margin: "auto",
    paddingRight: 70,
  },
});


const Header = () => {
  //we are importing css here with name as classes
  const classes = useStyles();

  
//components are in self-closing tag
  return (
    <AppBar className={classes.header} style={{ backgroundColor: "white" }}>
      <Toolbar>
        <Menu className={classes.menu} />
        <img
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          alt="logo"
          height="60px"
          className={classes.logo}
        />
      </Toolbar>
    </AppBar>
  );
};


export default Header;
