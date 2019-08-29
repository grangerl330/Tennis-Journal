class OpponentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :handedness, :notes, :strengths, :weaknesses, :utr, :match_id

  belongs_to :match, serializer: MatchSerializer
end
