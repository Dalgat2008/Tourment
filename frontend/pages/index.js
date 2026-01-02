import { useEffect, useState } from 'react';
import api from '../services/api';
import MatchCard from '../components/MatchCard';

export default function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.get('/match').then(res => setMatches(res.data));
  }, []);

  return (
    <div>
      <h1>Активные матчи</h1>
      {matches.map(m => <MatchCard key={m._id} match={m} />)}
    </div>
  );
}