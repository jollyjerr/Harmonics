class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.save
            token = JsonWebToken.encode({user_id: user.id})
            render json: {token: token}
        else
            puts user
        end
    end

    def login
        user = User.find_by(name: params["name"])
        if user.authenticate(params["password"])
            token = JsonWebToken.encode({user_id: user.id})
            render json: {token: token}
        else
            render status: :unauthorized
        end
    end

    def relogin
        header = request.headers["Authorization"]
        token = header.split(" ").last
        payload = JsonWebToken.decode(token)
        render json: payload
    end

    def destroy
        User.find(params[:id]).destroy
    end


    private

    def user_params
        params.permit(:name, :password)
    end
end
