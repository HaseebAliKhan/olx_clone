import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    margin:"10px"
  },
  media: {
    height: 140,
    width: 140,
    position: "relative",
    left: "69px"
  },
  flot:{
      float:"right ",
      fontSize:"12px",
      padding:"5px"
  },
  flot1:{
    float:"left ",
    fontSize:"12px",
    padding:"5px"
},
  
});

function Adcard(props) {
    const classes = useStyles();

    if ("cardss" in props) {
        return (
            <div>
            <Card className={classes.root}>
      <CardActionArea>
      <CardActions className={classes.flot}  disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <CardMedia 
          className={classes.media}
          image="https://images.caricos.com/f/ferrari/2019_ferrari_488_pista/images/2560x1440/2019_ferrari_488_pista_3_2560x1440.jpg"
          title="Contemplative Reptile"
        >
         
      </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rs 46,947,600
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Brand New Ferrari F8 Tributo 2020
          </Typography>
        </CardContent>
        
        <Typography variant="body3" color="textSecondary"  component="p" className={classes.flot1}>
        Gulshan-e-Maymar, Karachi, Sindh
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p" className={classes.flot} >
            12/10/2020
          </Typography>
      
      </CardActionArea>
    </Card>
            </div>
        )
    }


}

export default Adcard;
