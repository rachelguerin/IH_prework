n = 1
for n in 1..100 
	result = ""
	if n % 3 == 0
		result << "Fizz"
	end
	if n % 5 == 0
		result << "Buzz"
	end
	if n.to_s[0] == "1"
		result << "Bang"
	end 
	if result==""
		result << n.to_s
	end
		
	puts result
end