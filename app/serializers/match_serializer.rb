class MatchSerializer < ActiveModel::Serializer
  attributes :id, :date, :notes, :result, :round, :score, :time, :tournament_id, :user_id

  belongs_to :tournament
end
