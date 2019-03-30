class Review < ApplicationRecord
    validates :user_id, uniqueness: { scope: :event_id, message: 'Sorry, only one review per event' }
    validates :rating, inclusion: { in: (1..5) }
    validates :body, presence: true

    belongs_to :user
    belongs_to :event
end
