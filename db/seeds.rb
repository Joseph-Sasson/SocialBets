puts "🌱 Seeding users..."

test = User.create(name: "Test", email: "test@test.com", password: "flatiron", password_confirmation: "flatiron")
joseph = User.create(name: "Joseph", email: "joseph@gmail.com", password: "flatiron", password_confirmation: "flatiron")

puts "🌱 Seeding bets..."

one = Bet.create(sports_title: "US Open", date: "Monday August 30th", home_team: "Andy Murray", away_team: "Stefanos Tsitsipas", home_odds: 750, away_odds: -1250)
two = Bet.create(sports_title: "US Open", date: "Monday August 30th", home_team: "Mikhail Kukushkin", away_team: "Pablo Andujar", home_odds: -200, away_odds: 170)
Bet.create(sports_title: "US Open", date: "Monday August 30th", home_team: "Daniil Medvedev", away_team: "Richard Gasquet", home_odds: -3000, away_odds: 1000)
Bet.create(sports_title: "US Open", date: "Monday August 30th", home_team: "Nick Kyrgios", away_team: "Roberto Bautista Agut", home_odds: 150, away_odds: -200)
Bet.create(sports_title: "US Open", date: "Monday August 30th", home_team: "Brandon Nakashima", away_team: "John Isner", home_odds: 140, away_odds: -160)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Alexander Bublik", away_team: "Yannick Hanfmann", home_odds: -500, away_odds: 350)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Nikoloz Basilashvili", away_team: "Sebastian Korda", home_odds: 200, away_odds: -250)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Alexander Zverev", away_team: "Sam Querrey", home_odds: -2000, away_odds: 900)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Reilly Opelka", away_team: "Soonwoo Kwon", home_odds: -350, away_odds: 240)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Kei Nishikori", away_team: "Salvatore Caruso", home_odds: -800, away_odds: 550)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Jannik Sinner", away_team: "Max Purcell", home_odds: -1400, away_odds: 760)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Jan-Lennard Struff", away_team: "Tallon Griekspoor", home_odds: -350, away_odds: 260)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Karen Khachanov", away_team: "Lloyd Harris", home_odds: -225, away_odds: 185)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Aslan Karatsev", away_team: "Jaume Munar", home_odds: -400, away_odds: 275) 
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Denis Shapovalov", away_team: "Federico Delbonis", home_odds: -1100, away_odds: 675)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Jeremy Chardy", away_team: "Matteo Berrettini", home_odds: 650, away_odds: -1200)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Fabio Fognini", away_team: "Vasek Pospisil", home_odds: -150, away_odds: 120)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Novak Djokovic", away_team: "Holger Vitus Nodskov Rune", home_odds: -5000, away_odds: 1700)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Jack Sock", away_team: "Yoshihito Nishioka", home_odds: 100, away_odds: -130)
Bet.create(sports_title: "US Open", date: "Tuesday August 31st", home_team: "Taylor Fritz", away_team: "Alex de Minaur", home_odds: 120, away_odds: -150)
Bet.create(sports_title: "NFL Football", date: "Thursday September 10th", home_team: "Tampa Bay Buccaneers", away_team: "Dallas Cowboys", home_odds: -370, away_odds: 300)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Tennessee Titans", away_team: "Arizona Cardinals", home_odds: -150, away_odds: 130)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Buffalo Bills", away_team: "Pittsburgh Steelers", home_odds: -300, away_odds: 240)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Kansas City Chiefs", away_team: "Cleveland Browns", home_odds: -250, away_odds: 215)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "New York Giants", away_team: "Denver Broncos", home_odds: 110, away_odds: -130)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "New Orleans Saints", away_team: "Green Bay Packers", home_odds: 130, away_odds: -150)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "New England Patriots", away_team: "Miami Dolphins", home_odds: -160, away_odds: 130)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Houston Texans", away_team: "Jacksonville Jaguars", home_odds: -120, away_odds: 100)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Atlanta Falcons", away_team: "Philadelphia Eagles", home_odds: -190, away_odds: 160)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Carolina Panthers", away_team: "New York Jets", home_odds: -210, away_odds: 175)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Indianapolis Colts", away_team: "Seattle Seahawks", home_odds: -140, away_odds: 120)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Washington Football Team", away_team: "Los Angeles Chargers", home_odds: -120, away_odds: 100)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Detroit Lions", away_team: "San Francisco 49ers", home_odds: 300, away_odds: -400)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Cincinnati Bengals", away_team: "Minnesota Vikings", home_odds: 150, away_odds: -180)
Bet.create(sports_title: "NFL Football", date: "Sunday September 12th", home_team: "Los Angeles Rams", away_team: "Chicago Bears", home_odds: 270, away_odds: -335)
Bet.create(sports_title: "NFL Football", date: "Monday September 13th", home_team: "Las Vegas Raiders", away_team: "Baltimore Ravens", home_odds: 190, away_odds: -225)

puts "🌱 Seeding betslip..."

Betslip.create(user_id: test.id, bet_id: one.id, wager: 100, winnings: 750, odds:'home')
Betslip.create(user_id: test.id, bet_id: two.id, wager: 100, winnings: 170, odds:'away')

puts "✅ Done seeding!" 