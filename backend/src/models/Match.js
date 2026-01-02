import mongoose from 'mongoose';

const MatchSchema = new mongoose.Schema({
  game: String,
  mode: String,
  entryFee: Number,
  maxPlayers: Number,
  players: [String],
  status: { type: String, default: 'waiting' },
  winner: String
}, { timestamps: true });

export default mongoose.model('Match', MatchSchema);