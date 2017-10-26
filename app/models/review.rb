class Review < ApplicationRecord
  belongs_to :event
  belongs_to :user

  validates :user, :rating, presence: true
end
