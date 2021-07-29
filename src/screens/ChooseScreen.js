import React from 'react';
import Logo from '../components/Logo';
import {useStyles} from '../styles';
import { Card ,Typography , CardActionArea, CardContent , CardMedia, Fade, Box } from '@material-ui/core';
import { Store } from '../Store'
import { useContext } from 'react';
import { setOrderType } from '../actions';

export default function ChooseScreen( props ) {
    const styles = useStyles();
    const { dispatch } = useContext(Store);

    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        props.history.push('/order');
    };

    return (
        <div>
            <Fade in={true}>
                <Box className={[styles.root, styles.navy]}>
                    <Box className={[styles.main, styles.center]}>
                        <Logo large></Logo>
                        <Typography 
                            variant="h3" 
                            component="h3" 
                            className={styles.center} 
                            gutterBottom>
                            Where will you be eating today?
                        </Typography>
                        <Box className={styles.cards}>
                            <Card className={[styles.card, styles.space]}>
                                <CardActionArea onClick={()=> chooseHandler('Eat in')}>
                                    <CardMedia
                                    component="img"
                                    alt="Eat in"
                                    image="/images/eatin.png"
                                    className={styles.media}
                                    />
                                    <CardContent>
                                        <Typography
                                        gutterBottom
                                        variant="h4"
                                        color="textPrimary"
                                        component="p">
                                            Eat In
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={[styles.card, styles.space]}>
                                <CardActionArea onClick={()=> chooseHandler('Take out')}>
                                    <CardMedia
                                    component="img"
                                    alt="Eat in"
                                    image="/images/takeout.png"
                                    className={styles.media}
                                    />
                                    <CardContent>
                                        <Typography
                                        gutterBottom
                                        variant="h4"
                                        color="textPrimary"
                                        component="p">
                                            Take Out
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Box>
                    </Box>
                </Box>
            </Fade>
        </div>
    )
}
