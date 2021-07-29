import { StylesProvider } from '@material-ui/core'
import React from 'react';
import {useStyles} from '../styles'

export default function Logo(props) {
    const styles = useStyles();

    return (
        <div>
            <img 
            src="/images/logo.png" 
            alt="Food order" 
            className={props.large?styles.largeLogo: styles.logo}/>
        </div>
    )
}
