import "./css/main.css";
import "./css/rain.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <meta charSet="UTF-8" />
      <link rel="stylesheet" href="css/rain.css" />
      <link rel="stylesheet" href="css/main.css" />
      <div className="content-main">
        <h1>root@igna.rocks</h1>
        <br />
        <p>
          {" "}
          Hi, I'm Ignacio, a 13-year-old developer who likes anime and code
          stuff
        </p>
        <br />
        <div className={classes.root}>
          <Button
            variant="contained"
            color="secondary"
            href="https://discord.com/users/888960947438370837"
          >
            Discord
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://e.rip/dolor"
          >
            Bio
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="https://steamcommunity.com/id/nulIed"
          >
            Steam
          </Button>
        </div>
      </div>
      <p />
    </div>
  );
}

export default App;
