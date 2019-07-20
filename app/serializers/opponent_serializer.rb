class OpponentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :handedness, :notes, :utr, :match_id

  belongs_to :match
end
