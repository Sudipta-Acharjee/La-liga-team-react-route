import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.teams;
    return (
        <div className="row">
            <div className="column">
                <div class="card teamCart ">
                    <img className="card-img-top " src={strTeamBadge} alt="wait"></img>
                    <div className="teamCart">
                        <h2>{strTeam}</h2>
                        <br />
                        <h6>Sports Type: {strSport}</h6>
                        <button className="btn btn-warning"><Link to={`/team/${idTeam}`}>Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;