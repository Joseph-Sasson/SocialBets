# SocialBets
SocialBets is an interactive sports betting website with a social side.

## Description
SocialBets allows users to place bets on sports as well as chat with friends and collegues about which bets they like and which they don't. A user will have access to a messenger which they can choose who to chat with. A user can deposit money into their account and withdraw from there account when done.

## Application Information

### Tables
* Users
* Bets
* Betslip
* bank_transaction

### MVP
* User should be able to see available bets on home page
* User should be able to check how much money is in the bank
* User should be able to add bet to betslip
* User should be able to see active and settled bets from betslip
* User should be able to add/remove money to/from bank
* User should be able to see bank transaction history
* User bank should add when a bet is won

### Stretch goal
* Add messenger to users to communicate with other users

 ### Stretch tables
 * Messenger
 * Messages

 ### Models
 * User
    * Has many betslips
    * Has many bets through betslips
    * Has many bank transactions
 * Bets
    * Has many betslips
    * Has many users through betslips
 * Betslip
    * Belongs to user
    * Belongs to bet
 * Bank Transaction
    * Belongs to user

 ### Validations
 * User
    * Must have a name
    * Must have a unique email
    * Password confirmation and must match password
 * Betslip
    * Must have a wager

 ### Stretch Models
 * Message
 * Messenger

 ### Stretch Validations
 * Message
 * Messenger