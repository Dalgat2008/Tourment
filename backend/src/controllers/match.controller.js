import Match from '../models/Match.js';

export const createMatch = async (req, res) => {
  const match = await Match.create(req.body);
  res.json(match);
};

export const joinMatch = async (req, res) => {
  const match = await Match.findById(req.params.id);
  if (match.players.length >= match.maxPlayers)
    return res.status(400).json({ error: 'Match full' });

  match.players.push(req.user.id);
  await match.save();
  res.json(match);
};