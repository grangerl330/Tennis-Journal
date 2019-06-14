class User < ApplicationRecord
  has_many :tournaments
  has_many :matches
  has_many :opponents, through: :matches

  has_secure_password

  validates :email, uniqueness: true
end
