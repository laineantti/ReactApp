import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <Link sx={{ color: 'inherit', textDecoration: 'inherit' }} href={props.url} target="_blank">
                <CardHeader
                    /* avatar={
                        <Avatar sx={{ textAlign: "center", width: "150px", height: "150px",bgcolor: red[500] }} aria-label="recipe">
                            {props.author}
                        </Avatar>
                    } */
                    /* action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    } */
                    title={props.title}
                    subheader={props.author + " ~ " + props.publishedAt}
                />
            </Link>
            <a target="_blank" href={props.urlToImage} rel="noreferrer">
                < CardMedia
                    component="img"
                    height="194"
                    image={props.urlToImage}
                    alt={props.title}
                />
            </a>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> */}
                <IconButton target="_blank" href={props.url} aria-label="share">
                    <LinkIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.content.substring(0, props.content.indexOf('[+'))} <Link href={props.url}>Continue reading</Link>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
}
