import React from 'react'
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
    return (
        <div className="user">
            <img className="user_avatar" src="./images/photocv.jpg" alt=""/>
            <h1 className="user_name">Hugo Zhang</h1>
            <p className="user_profession">Apprenti Ingénieur</p>
            <div className="user_infos">
                <p className="user_info">
                <HomeIcon />75008 Paris
                </p>
                <p className="user_info">
                <PhoneIcon /> <a href="tel:+33610527026">0610527026</a>
                </p>
                <p className="user_info">
                <MailIcon /> <a href="mailto:hugo.zhang@edu.esiee.fr">hugo.zhang@edu.esiee.fr</a>
                </p>
                <p className="user_info">
                <EventIcon /> Date de naissance: 27 Novembre 2000
                </p>
                <p className="user_info">
                <LocationOnIcon /> Lieu de naissance: Paris
                </p>
            </div>
        </div>
    )
}

export default User
