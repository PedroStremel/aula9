import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { users } from '../../data';
const Details = () => {
    const parameters = useParams();
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        const { id } = parameters;
        console.log(id);
        const result = users.find((users) => users.id === id);
        if(result) {
            setUser(result);
        }
    }, [parameters]);

    return (
        <div>
            <h1>Details</h1>
            {user && (
            <div>
                <img src={user.image.src} alt={user.image.alt} />
                <h2>{user.name}</h2>
                <p>{user.description}</p>
            </div>
            )}
        </div>

        
    );
};

export default Details ;
