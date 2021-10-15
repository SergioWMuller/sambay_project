import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function ProdutoDetalhe({ itemObj }) {
  return (
    <div className="detalhado">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={itemObj.image}
            alt="Zequinha"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {itemObj.title}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {itemObj.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {itemObj.prazo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {itemObj.tipo}
            </Typography>
          </CardContent>
          <CardActions onClick={}>

          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

