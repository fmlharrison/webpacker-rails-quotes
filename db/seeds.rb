# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Quote.delete_all

Quote.create! (
  [
    {
      text: "The things is, I don’t like really small things being crushed by really big things.",
      author: "Keeley"
    },
    {
      text: "Anyone want to draw Vladimir Putin?",
      author: "Paul"
    },
    {
      text: "I need to be squished by bodies of other men.",
      author: "Elliot"
    },
    {
      text: "Good touching action!",
      author: "Felix"
    },
    {
      text: "If you can dream it, you can do it on a computer.",
      author: "Alex"
    },
    {
      text: "Footballers are the worst people on earth.",
      author: "Paul"
    },
    {
      text: "You should start using P mate, it’ll change your life.",
      author: "Joe"
    },
    {
      text: "I just sit on the bathroom floor and cover myself in vaseline",
      author: "Smudge"
    },
    {
      text: "I’ve read everything now. I’ve read the whole internet.",
      author: "Marc"
    },
    {
      text: "Do you want to be my hype man Marc?",
      author: "Jiv"
    }
  ]
)
puts "Quotes seeded!"