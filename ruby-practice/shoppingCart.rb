require 'date'
class ShoppingCart
	def initialize
		@items = []
	end
	def add_item(item)
		@items.push(item)
	end
	def checkout
		total_cost_of_order = 0
		@items.each do |item|
			total_cost_of_order += item.price
		end
		#apply multiple items discount
		if @items.count >= 5
			total_cost_of_order = total_cost_of_order - (total_cost_of_order * 0.10)
		end
		puts "Your total today is #{total_cost_of_order}€. Have a nice day!"
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
		if [0,6].index(Date.today.wday)
			@price - (@price * 0.10)
		else 
			@price			
		end
	end
end

banana = Fruit.new("Banana",10)
oj = Item.new("Orange Juice",10)
rice = Item.new("Rice",1)
vaccuum_cleaner = Houseware.new("Vaccuum Cleaner",150)
anchovies = Item.new("Anchovies",2)

 # puts "#{banana.name}: #{banana.price}€"
 # puts "#{oj.name}: #{oj.price}€"
 # puts "#{rice.name}: #{rice.price}€"
 # puts "#{vaccuum_cleaner.name}: #{vaccuum_cleaner.price}€"
 # puts "#{anchovies.name}: #{anchovies.price}€"

joshs_cart = ShoppingCart.new
joshs_cart.add_item(oj)
joshs_cart.add_item(rice)
joshs_cart.add_item(banana)
joshs_cart.add_item(anchovies)
joshs_cart.add_item(vaccuum_cleaner)

joshs_cart.checkout