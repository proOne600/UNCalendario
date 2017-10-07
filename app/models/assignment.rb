class Assignment < ApplicationRecord
    has_many :users
    belongs_to :roles
end
