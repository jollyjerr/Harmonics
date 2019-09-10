class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.save
            render json: user
        else
            puts user
        end
    end

    def update
        user = User.all.find(params[:id])
        header = request.headers["Authorization"]
        token = header.split(" ").last
        payload = JsonWebToken.decode(token)

        if(user.id == payload.user_id.to_i)
            user.update(user_params)
        end
        if user.save
            render json: user
        else
            puts user
        end
    end


    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
