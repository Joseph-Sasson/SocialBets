class BankTransactionsController < ApplicationController
  wrap_parameters format: []
  before_action :authorize, only: [:create]

  def index
    transactions = BankTransaction.all 
    render json: transactions
  end

  def create 
    transaction = BankTransaction.new(transaction_params)
    user = User.find_by(id: session[:user_id])
    transaction.user_id = user.id
    transaction.save
    if transaction.valid?
      render json: transaction, status: :created
    else
      render json: {errors: transaction.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def transaction_params
    params.permit(:amount, :transaction_type)
  end
  def authorize
    render json: {errors: "You must be logged in to see bank transactions!"}, status: :unauthorized unless session.include? :user_id
  end
end
