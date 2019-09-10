class AuthenticationController < ApplicationController
    def login
        @user = User.find_by(name: params[:name])
        if @user.authenticate(params[:password])
            token = JsonWebToken.encode({user_id: @user.id})
            render json: {token: token}
        else
            render status: :unauthorized
        end
    end
end
