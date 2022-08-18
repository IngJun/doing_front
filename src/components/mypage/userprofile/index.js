// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function UserProfile() {
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="140"
//                 image="/static/images/cards/contemplative-reptile.jpg"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     Lizard
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">프로필 수정</Button>

//             </CardActions>
//         </Card>
//     );
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EditModal from '../EditModal';

function UserProfile(props) {
    // const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', width: '70%', margin: '50px auto', height: 300 }}>

                <CardMedia
                    component="img"
                    sx={{ width: 300, display: { xs: 'none', sm: 'block' } }}
                    image={"https://source.unsplash.com/random"}
                // alt={post.imageLabel}
                />
                <CardContent sx={{ flex: 1, padding: 10 }}>
                    <Typography component="h2" variant="h3">
                        {"유저 id"}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {"소개들이 들어갑니다"}
                    </Typography>
                    <EditModal />
                </CardContent>

            </Card>

        </Grid>
    );
}

// FeaturedPost.propTypes = {
//     post: PropTypes.shape({
//         date: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         imageLabel: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default UserProfile;