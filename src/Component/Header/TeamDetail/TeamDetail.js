import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDetail.css';
import male from '../../../picture/male.jpg';
import facebookPic from '../../../picture/Facebook.jpg'
import youtubePic from '../../../picture/download.png';
import TwitterPic from '../../../picture/Twitter.jpg';
import female from '../../../picture/female.jpg';

const TeamDetail = () => {
    const { teamId } = useParams();
    const [details, setDetails] = useState({})
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [])
    return (
        <div>
            <div className="container">
                <img className="photo" src={details.strTeamBadge}>
                </img>
            </div>
            <div>
                <div class="detailsRow">
                    <div class="col-7 ">
                        <h3>Founded:   {details.intFormedYear}</h3>
                        <h4>Country:   {details.strCountry}</h4>
                        <h4>Sport Type:   {details.strSport}</h4>
                        <h4>Gender:  {details.strGender}</h4>
                    </div>

                    <div className="genderPic">
                        <div class="col-5">
                            <img src={
                                details.strGender?.toLowerCase() === 'female' ? female : details.strGender?.toLowerCase
                                    () === "mixed" ? details.mixed : male}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu maximus mauris, id bibendum quam. In facilisis ligula ligula, vel tincidunt dolor dictum vel. Phasellus lobortis pellentesque ex, eget euismod nibh accumsan eget. Mauris pharetra metus ac vulputate cursus. Suspendisse nec ligula lectus. Pellentesque id volutpat lectus, sed feugiat tellus. Fusce vitae massa vel massa consectetur pretium sed non sem. Mauris quis dolor purus. Proin ultricies dapibus sem vitae dictum. Nunc congue auctor vulputate. Mauris dapibus tortor vel vestibulum blandit. Curabitur odio mauris, feugiat eu suscipit euismod, fermentum non nunc. Quisque quis tempus purus. Morbi vehicula eu nunc id mattis. Vivamus eu condimentum ipsum. Aenean viverra, turpis in hendrerit finibus, urna odio porttitor lorem, in maximus dui orci vel nulla.
                        <div />
                        <br />
                        Proin nec aliquam nisl, at laoreet tellus. Morbi sed nisi blandit ex euismod vulputate in id ex. Etiam massa risus, cursus ac fringilla nec, facilisis vel nulla. Sed augue metus, porta in euismod et, ultrices malesuada nunc. In pulvinar, nibh vitae vehicula consequat, felis dui dignissim magna, et rutrum mi felis eget eros. Donec eget egestas dui. Integer eu ex in tellus condimentum molestie. Etiam sit amet semper dolor, id volutpat risus. Cras euismod pretium leo, sed porta magna tempor sit amet. Suspendisse potenti. Quisque nec elit non tellus commodo ultricies vitae quis urna. Donec finibus tincidunt luctus. Nulla consectetur enim lacus, non tempus eros aliquet gravida. Quisque euismod viverra odio eu rhoncus. Sed et risus id turpis tempus cursus. Praesent malesuada nec ex et consequat.
                </div>

                </div>
                <div className="footer">
                    <a href={`https://${details.strFacebook}`}><img src={facebookPic}></img></a>
                    <a href={`https://${details.strYoutube}`}><img src={youtubePic}></img></a>
                    <a href={`https://${details.strTwitter}`}><img src={TwitterPic}></img></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;