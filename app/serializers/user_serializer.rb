class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :utr, :match_record, :current_ranking, :points, :short_term_goal, :mid_term_goal, :long_term_goal, :strengths, :weaknesses, :notes

  has_many :rankings
end
