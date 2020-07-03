import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { Container } from './styles'; 

interface RepositorieProp {
    name: string;
    full_name: string;
    description:string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<RepositorieProp[]>([]);
    const [inputValue, setInputValue] = useState('');

    async function getUserByValue() {
    const user = await api.get(`/users/${inputValue}/repos`);
    setRepositories(user.data);
    };

    return (
        <Container>
            <input type="text" onChange={(event) => setInputValue(event.target.value)} />
            <button type="button" onClick={getUserByValue}>search</button>

            <div>
                {repositories.map( (repositorie) =>
                ( repositorie.name )
                )}
            </div>
        </Container>
    )
}

export default Dashboard;