class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :city, presence: true
    validates :password, length: { minimum: 8, allow_nil: true }
    after_initialize :ensure_session_token
    
    def self.find_user_by_credentials(username, password)
    end

    def password=(password)
    end

    def is_password?(password)
    end

    def reset_session_token!
    end

    def generate_session_token
    end

    def ensure_session_token
    end
end
