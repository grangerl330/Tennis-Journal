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
    when "Jan"
      1
    when "Feb"
      2
    when "Mar"
      3
    when "Apr"
      4
    when "May"
      5
    when "Jun"
      6
    when "Jul"
      7
    when "Aug"
      8
    when "Sept"
      9
    when "Oct"
      10
    when "Nov"
      11
    when "Dec"
      12
    end
  end

  def set_current_ranking
    filtered_by_current_year = self.rankings.select{|rank| rank.year === Date.current.year.to_s()}
    sorted_by_month = filtered_by_current_year.sort_by{|rank| convert_month(rank.month)}
    current_rank = sorted_by_month.last.rank
    self.update(current_ranking: sorted_by_month.last.rank)
  end

end
