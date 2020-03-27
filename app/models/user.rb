class User < ApplicationRecord
  has_many :tournaments
  has_many :matches
  has_many :rankings
  has_many :opponents, through: :matches

  has_secure_password

  validates :email, uniqueness: true

  def update_match_record
    win_count = self.matches.select {|match| match.result === "Won" }.count
    loss_count = self.matches.select {|match| match.result === "Lost" }.count
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

  def convert_month(month)
    case month
    when month === "Jan"
      1
    when month === "Feb"
      2
    when month === "Mar"
      3
    when month === "Apr"
      4
    when month === "May"
      5
    when month === "Jun"
      6
    when month === "Jul"
      7
    when month === "Aug"
      8
    when month === "Sept"
      9
    when month === "Oct"
      10
    when month === "Nov"
      11
    when month === "Dec"
      12
    end
  end

  def set_current_ranking
    sorted_by_year = self.rankings.sort_by{|rank| rank.year}
    sorted_by_month = sorted_by_year.sort_by{|rank| convert_month(rank.month)}
    self.update(current_ranking: sorted_by_month.last.rank)
  end

end
