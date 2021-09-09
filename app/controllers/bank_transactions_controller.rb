class BankTransactionsController < ApplicationController
  wrap_parameters format: []
  before_action :authorize, only: [:create]

  def index
    transactions = BankTransaction.all 
    render json: transactions
  end

  # def create 
  #   transaction = BankTransaction.create(transaction_params)
  #   user = User.find_by(id: session[:user_id])
  #   transaction.user_id = user.id
  #   if transaction.valid?
  #     if transaction.transaction_type == "Deposit"
  #       transaction.user.bank = user.bank + params[:amount].to_i
  #       transaction.user.save
  #     end
  #     if transaction.transaction_type == "Withdraw"
  #       # byebug
  #       transaction.user.bank = user.bank - params[:amount].to_i
  #         if transaction.user.bank < 0
  #           render json: {errors: "You dont have enough money to withdraw!"}, status: :unauthorized
  #         end
  #       if transaction.user.bank >= 0
  #         transaction.user.save
  #       end
  #     end
  #     render json: transaction
  #   else
  #     render json: {errors: transaction.errors.full_messages}, status: :unprocessable_entity
  #   end
  # end

  private
  def transaction_params
    params.permit(:amount, :transaction_type)
  end
  def authorize
    render json: {errors: "You must be logged in to see bank transactions!"}, status: :unauthorized unless session.include? :user_id
  end
end
