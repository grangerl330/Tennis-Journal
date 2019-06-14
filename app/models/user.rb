class User < ApplicationRecord
  has_many :tournaments
  has_many :matches
  has_many :opponents, through: :matches

end
