class User < ApplicationRecord
    validates :name, presence: true
    validates :name, uniqueness: true

    has_secure_password

    has_many :phrases
end
