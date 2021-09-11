class UsersController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  before_action :authorize, only: [:show]


  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id 
      render json: user, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    if user.valid?
      render json: user, status: :accepted
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  def deposit
    user = User.find(params[:id])
    user.bank = user.bank + params[:amount].to_i
    user.save
    render json: user, status: :accepted
  end

  def withdraw
    user = User.find(params[:id])
    user.bank = user.bank - params[:amount].to_i
    if user.bank < 0
      render json: {errors: "You can only withdraw what you have in your bank!"}, status: :unauthorized
    elsif user.bank >= 0
      user.save
      render json: user, status: :accepted
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def render_not_found
    render json: {errors: "User not found"}, status: :not_found
  end

  def authorize
    render json: {errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end
end
