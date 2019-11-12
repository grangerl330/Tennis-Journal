class User < ApplicationRecord
  has_many :tournaments
  has_many :matches
  has_many :opponents, through: :matches

  has_secure_password

  validates :email, uniqueness: true

  def update_match_record
    total_count = self.matches.count
    win_count = self.matches.select {|match| match.result === "Won" }.count
    loss_count = total_count - win_count
    record = "#{win_count} - #{loss_count}"
    self.update(match_record: record)
  end

  def update_points
    all_points = self.tournaments.map {|tournament|
      if !tournament.points
        0
      else
        tournament.points
      end
    }
    self.update(points: all_points.sum)
  end
end
