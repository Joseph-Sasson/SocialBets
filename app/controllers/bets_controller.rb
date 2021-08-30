class BetsController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  # before_action :authorize, only: [:show]

  def index
    @@data = File.read("/home/josephsasson/Development/Code/phase5/SocialBets/client/db.json")
    render json: @@data
  end

  private

  def render_not_found
    render json: {errors: "User not found"}, status: :not_found
  end

  def authorize
    render json: {errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end

end
