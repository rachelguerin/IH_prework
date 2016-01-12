def word_sort(string_original)

	#remove punctuation
	string1 = string_original.gsub(/[^A-Za-z ]/,'')
	
	#split string into an array
	string_array = string1.split
	
	#sort array
	string_array.sort! { |x,y| x.downcase <=> y.downcase}

	return string_array
end



print word_sort("Have a nice day.")
print "\n"
print word_sort("Fools fall for foolish follies.")
print "\n"
print word_sort("Ruby is a fun language!")
print "\n"
