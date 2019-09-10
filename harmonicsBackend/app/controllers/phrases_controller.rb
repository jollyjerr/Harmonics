class PhrasesController < ApplicationController
    def index
        phrases = Phrase.all
        render json: phrases
    end

    def show
        phrase = Phrase.all.find(params[:id])
        render json: phrase
    end

    def create
        phrase = Phrase.create(phrase_params)
        if phrase.save
            render json: phrase
        else  
            puts phrase
        end
    end

    def update
        phrase = Phrase.all.find(params[:id])
        phrase.update(phrase_params)
        if phrase.save
            render json: phrase
        else    
            puts phrase
        end
    end

    def destroy
        Phrase.find(params[:id]).destroy
    end

    private

    def phrase_params
        params.require(:phrase).permit(:name, :content)
    end
end
