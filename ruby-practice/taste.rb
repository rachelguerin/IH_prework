def taste(food)
#	puts "You are eating #{food}."
	if food == "spinach"
		puts "Urgh..."
	elsif food == "bacon"
		puts "Yummy!!! BACON!!!"
	else
		puts "Can I have some bacon on the side?"
	end
end

taste("spinach")
taste("bacon")
taste("pie")