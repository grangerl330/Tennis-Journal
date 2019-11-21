class MatchSerializer < ActiveModel::Serializer
  attributes :id, :date, :notes, :result, :round, :score, :time, :unforced_errors, :forced_errors, :winners, :double_faults, :aces, :tournament_id, :user_id

  belongs_to :tournament
  has_one :opponent
end
