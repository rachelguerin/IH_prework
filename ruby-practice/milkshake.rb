class MilkShake
	def initialize
		@base_price = 3
		@ingredients = []
	end

	def add_ingredient(ingredient)
		@ingredients.push(ingredient)
	end

	def price_of_milkshake
		total_price_of_milkshake = @base_price
		#add ingredients
		@ingredients.each do |ingredient|
			total_price_of_milkshake += ingredient.price
		end
		#return total price of milkshake
		total_price_of_milkshake
	end
end

class Ingredient
	attr_reader :name, :price
	def initialize(name,price)
		@name = name
		@price = price
	end
end

class ShakeShop
	def initialize
		@milkshakes = []
	end

	def add_milkshake(milkshake)
		@milkshakes.push(milkshake)
	end

	def checkout
		total_cost_of_order = 0
		@milkshakes.each do |milkshake|
			total_cost_of_order += milkshake.price_of_milkshake
		end
		total_cost_of_order
	end
end

rachels_milkshake = MilkShake.new
banana = Ingredient.new("Banana",2)
chocolate_chips = Ingredient.new("Chocolate Chips",1)
strawberry = Ingredient.new("Strawberry",2)
yoghurt = Ingredient.new("Yoghurt",1.5)

rachels_milkshake.add_ingredient(banana)
rachels_milkshake.add_ingredient(chocolate_chips)
milkshake2 = MilkShake.new
milkshake2.add_ingredient(strawberry)
milkshake2.add_ingredient(yoghurt)

puts rachels_milkshake.price_of_milkshake
puts milkshake2.price_of_milkshake

rachels_order = ShakeShop.new
rachels_order.add_milkshake(rachels_milkshake)
rachels_order.add_milkshake(milkshake2)

puts rachels_order.checkout

