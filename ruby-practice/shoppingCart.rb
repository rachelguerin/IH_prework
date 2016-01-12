require 'date'
class ShoppingCart
	def initialize
		@items = []
	end
end

class Item
	attr_reader :name, :price
	def initialize(name,price)
		@name = name
		@price = price
	end

	def price
		@price
	end
end

class Houseware < Item
	def price
		if @price > 100
			@price - (@price * 0.05)
		else
			@price
		end
	end
end

class Fruit < Item
	def price
		if [0,6].index(Date.today.wday) == 1
			@price - (@price * 0.10)
		else 
			@price			
		end
	end
end

banana = Fruit.new("Banana",10)
orange_juice = Item.new("Orange Juice",10)
rice = Item.new("Rice",1)
vaccuum_cleaner = Houseware.new("Vaccuum Cleaner",150)
anchovies = Item.new("Anchovies",2)

puts "#{banana.name}: #{banana.price}€"
puts "#{orange_juice.name}: #{orange_juice.price}€"
puts "#{rice.name}: #{rice.price}€"
puts "#{vaccuum_cleaner.name}: #{vaccuum_cleaner.price}€"
puts "#{anchovies.name}: #{anchovies.price}€"