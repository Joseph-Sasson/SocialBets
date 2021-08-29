puts "🌱 Seeding users..."

test = User.create(name: "test", email: "test@test.com", password: "flatiron", password_confirmation: "flatiron")
joseph = User.create(name: "joseph", email: "joseph@gmail.com", password: "flatiron", password_confirmation: "flatiron")

puts "✅ Done seeding!" 