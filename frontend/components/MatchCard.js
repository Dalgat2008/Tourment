export default function MatchCard({ match }) {
  return (
    <div>
      <h3>{match.game} — {match.mode}</h3>
      <p>Участники: {match.players.length}/{match.maxPlayers}</p>
      <p>Вход: {match.entryFee} ₽</p>
    </div>
  );
}