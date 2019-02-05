# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  host_id     :integer          not null
#  description :text             not null
#  location    :string           not null
#  city        :string           not null
#  date        :string           not null
#  open        :boolean          default(TRUE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
    validates :name, :host_id, :description, :location, :city, :date, presence: true
    

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    has_many :joins,
    foreign_key: :event_id,
    class_name: :Join
    
end
