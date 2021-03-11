import { useEffect, useState } from 'react';
import Header from '../Header';
import Team from '../Team/Team';


const Home = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])

    return (
        <div>
            <Header></Header>
            {
                team.map(teams => <Team teams={teams}></Team>)
            }
        </div>
    );
};

export default Home;