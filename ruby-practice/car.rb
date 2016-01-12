class Car
	attr_accessor :color

	def initialize(color)
		@color = color
	end

	def honk
		puts "Beeep!"
	end

	# def print_color
	# 	puts @color
	# end
end

my_car = Car.new "yellow"
other_car = Car.new "brown"

my_car.color = "grey"
# my_car.print_color
# other_car.print_color
puts my_car.color
puts other_car.color

# puts my_car.class
# puts "cosa".class
# puts 4.class