class User < ApplicationRecord
  has_many :tournaments
  has_many :matches
  has_many :rankings
  has_many :opponents, through: :matches

  has_secure_password

  validates :email, uniqueness: true

  def update_match_record
    if self.matches.length === 0
      record = "0 - 0"
    else
      win_count = self.matches.select {|match| match.result === "Won" }.count
      loss_count = self.matches.select {|match| match.result === "Lost" }.count
      record = "#{win_count} - #{loss_count}"
    end

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

  def convert_month_to_integer(month)
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

  def convert_month_to_string(num)
    case num
    when 1
      "Jan"
    when 2
      "Feb"
    when 3
      "Mar"
    when 4
      "Apr"
    when 5
      "May"
    when 6
      "Jun"
    when 7
      "Jul"
    when 8
      "Aug"
    when 9
      "Sept"
    when 10
      "Oct"
    when 11
      "Nov"
    when 12
      "Dec"
    end
  end

  def set_current_ranking
    current_rank = self.find_current_rank

    self.update(current_ranking: current_rank.rank)
  end

  def find_current_rank
    rank = self.rankings.find{|rank| rank.year === Date.current.year.to_s() && rank.month === convert_month_to_string(Date.current.month)}

    if rank
      rank
    else
      self.rankings.new(month: convert_month_to_string(Date.current.month), year: Date.current.year.to_s())
    end
  end

end
