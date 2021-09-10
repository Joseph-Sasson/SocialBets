class MessagesController < ApplicationController
  wrap_parameters format: []
  before_action :authorize, only: [:create, :destroy]

  def index
    messages = Message.all 
    render json: messages
  end

  def create
    message = Message.new(message_params)
    user = User.find_by(id: session[:user_id])
    message.user_id = user.id
    message.save
    if message.valid?
      render json: message, status: :created
    else
      render json: {errors: message.errors.full_messages}
    end
   end

  def destroy
    message = Message.find(params[:id])
    message.destroy
    head :no_content
  end

  private
  def message_params
    params.permit(:message)
  end

  def authorize
    render json: {errors: "You must be logged in to place a bet!"}, status: :unauthorized unless session.include? :user_id
  end
end
