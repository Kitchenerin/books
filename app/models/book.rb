class Book < ActiveRecord::Base
  validates :title, presence: true
  validates :title, uniqueness: true
  belongs_to :author
end
