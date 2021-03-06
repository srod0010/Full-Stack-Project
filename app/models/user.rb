# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  city            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, :city, presence: true
    validates :password, length: { minimum: 8, allow_nil: true }
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :hosted_events,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :Event

    has_many :joins,
        foreign_key: :user_id,
        class_name: :Join

    has_many :reviews,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Review
    
    def self.find_user_by_credentials(username, password)
        user = User.find_by(username: username)
        
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save
        self.session_token
    end
end
