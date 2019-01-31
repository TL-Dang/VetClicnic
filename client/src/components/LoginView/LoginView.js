import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PetsIcon from '@material-ui/icons/Pets'

// local style
import './LoginView.css'

const styles = theme => ({
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  card: {
    minWidth: 200,
    maxHeight: 620,
    [theme.breakpoints.down('sm')]: {
      margin: '30px 40px 0px 40px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '90px 40px 0px 40px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '120px 40px 0px 40px',
    },  
    opacity: '0.8',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '40px'
  },
  loginTitle:  {
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '50px',
    },
    color: 'blue',
    margin: '0px 0px 10px 30px',
  },
  loginSubtitle : {
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '30px',
    },
    color: 'gray',
    margin: '0px 0px 30px 30px'
  },
  userError : {
    color: 'red',
  }
})

class LoginView extends Component {

  render() {

    const { classes } = this.props;

    return (
      <>
      <Grid  className={classes.mainContainer} spacing={0}>
      <Grid item>
      <Card className={classes.card}>       
        <CardContent> 
          
         <Typography className={classes.loginTitle}>
              SORIN
          </Typography>
          <Typography className={classes.loginSubtitle}>
              Surgical Operation Reference and Interface Network
          </Typography>

          <Grid container spacing={0}>       
              <Grid item>
                <img className="logingImage imgRnd10 imageShadow imageRotate" 
                     src="./images/IMG_9465.JPG" 
                     alt="Veterinary" />
              </Grid>
              <Grid item>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                      required
                      id="standard-name"
                      label="User Name"
                      className={classes.textField}
                      name='userName'
                      value={this.userName}
                      onChange={this.props.handleInputChange}
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
      
                    <TextField
                      required
                      id="standard-password-input"
                      label="Password"
                      className={classes.textField}
                      name='userPwd'
                      type="password"
                      autoComplete="current-password"
                      value={this.userPwd}
                      onChange={this.props.handleInputChange}
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PetsIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CardActions>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.props.handleLogingAction}>
                      Login
                    </Button>
                    </CardActions> 
                  </form>
                  <p className={classes.userError}>{this.props.userError}</p>
              </Grid>       
            </Grid>

          </CardContent>
      </Card> 
      </Grid>
      </Grid>

      </>
    )
  }
}

LoginView.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginView)
