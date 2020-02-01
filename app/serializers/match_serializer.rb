class MatchSerializer < ActiveModel::Serializer
  attributes :id, :round, :result, :score, :date, :time, :notes, :forehand_unforced_errors, :backhand_unforced_errors, :slice_unforced_errors, :forehand_volley_unforced_errors, :backhand_volley_unforced_errors, :overhead_unforced_errors, :forehand_forced_errors, :backhand_forced_errors, :slice_forced_errors, :forehand_volley_forced_errors, :backhand_volley_forced_errors, :overhead_forced_errors, :forehand_winners, :backhand_winners, :slice_winners, :forehand_volley_winners, :backhand_volley_winners, :overhead_winners, :double_faults, :aces, :tournament_id, :user_id

  belongs_to :tournament
  has_one :opponent
end
