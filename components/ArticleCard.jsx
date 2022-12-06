import Image from 'next/image';
import EyeIcon from '../components/icons/EyeIcon';
import HeartIcon from '../components/icons/HeartIcon';
import CommentIcon from '../components/icons/CommentIcon';
import styles from '../styles/ArticleCard.module.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const ArticleCard = ({ article }) => {
  return (
    <a

      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >

      <div className={styles.content}>
        <h3 className={styles.title}>{article.name}</h3>
        <p className={styles.subtitle}>{article.description}</p>

        {article.skills.map((project) => (
            project == "pinta" ?
            <StarIcon sx={{color:'yellow', fontSize:'13px'}} /> : <StarIcon sx={{fontSize:'13px'}} /> 
        ))}

    
      </div>

      {/* <Card sx={{ minWidth: 675 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>*/}


    </a>
  );
};

export default ArticleCard;
