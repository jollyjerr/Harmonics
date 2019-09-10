class JsonWebToken
    SECRET = Rails.application.secrets.secret_key_base.to_s
    def self.encode(payload)
        payload[:exp] = 24.hours.from_now.to_i
        JWT.encode(payload, SECRET)
    end

    def self.decode(token)
        JWT.decode(token, SECRET)[0]
    end
end