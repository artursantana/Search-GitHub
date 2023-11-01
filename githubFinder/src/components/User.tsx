import classes from './User.module.css'

import { UserProps } from "../types/User"
import { MdLocationPin } from 'react-icons/md'

import { Link } from "react-router-dom"

export const User = ({avatar_url,login,followers,following,location}: UserProps) => {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location && (<p className={classes.location}>
    <MdLocationPin />
    <span>{ location }</span>
        </p>)}
        <div className={classes.container}>
            <div className={classes.stats}>
                <p>Followers</p>
                <p className={classes.number}>{ followers }</p>
            </div>
            <div className={classes.stats}>
                <p>Following</p>
                <p className={classes.number}>{ following }</p>
            </div>
        </div>
    <Link to={`/repor/${login}`}> See better project</Link>
    </div>
  )
}
