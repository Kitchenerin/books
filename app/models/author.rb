class Author < ActiveRecord::Base
  validates :name, presence: true
  validates :name, length: {minimum: 2}
  has_many :books, dependent: :destroy
  validates_associated :books
  accepts_nested_attributes_for :books, allow_destroy: true
end