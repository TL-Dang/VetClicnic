import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import GradientIcon from '@material-ui/icons/Gradient'
import Input from "./inputs"
import Auto from "./autocomplete"
import APImeds from '../../utils/APImeds'

const styles = {
  avatar: {
    margin: ' 10px 0px 0px 50px'
  },
  pageHead : {
    color:'white',
    margin: '7px 0px 0px 20px'
  },
}

class Calc extends Component {
   
  state = {
    meds: []
  }

  componentDidMount() {
    this.loadMeds()
  }

  loadMeds = () => {
    APImeds.getMeds()
      .then(res => {
        this.setState({ meds: res.data })
        console.log(this.state)
      })
      .catch(err => console.log(err))
  }

  render() {

    const { classes } = this.props
    return (
      <>
       <Grid container spacing={0}>    
            <Grid item> 
              <Avatar className={classes.avatar}>
                <GradientIcon /> 
              </Avatar>
            </Grid>
            <Grid item> 
              <h1 className={classes.pageHead}>Dosage Calculator</h1>
              <Input/>
              <Auto/>
            </Grid>
          </Grid>
      </>
    )
  }
}

Calc.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Calc)
