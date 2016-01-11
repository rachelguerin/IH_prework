def word_sort(string_original)

	string1 = string_original.gsub(/[!.?]/,'')
	string_array_original = string1.split.sort
	string_array_sorted = string1.downcase.split.sort

	# print "string_array_sorted: #{string_array_sorted}\n"
	# print "string_array_original: #{string_array_original}\n"

	for i in 0..string_array_sorted.length-1
		for j in 0..string_array_original.length-1
			if string_array_sorted[i].downcase == string_array_original[j].downcase
				string_array_sorted[i] = string_array_original[j]
			end	
		end	
	end

	#print "string_array_sorted: #{string_array_sorted}\n"
	return string_array_sorted
end

print word_sort("Have a nice day.")
print word_sort("Fools fall for foolish follies.")
print word_sort("Ruby is a fun language!")
