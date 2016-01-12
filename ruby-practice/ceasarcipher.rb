def solve_cipher(cipher, shift=-3)
	cipher_array = cipher.chars

	for i in 0..cipher_array.length-1

		if cipher_array[i] != " "
			unciphered_ord = cipher_array[i].ord + shift
			if unciphered_ord < 97 
				unciphered_ord += 26
			elsif unciphered_ord > 122
				unciphered_ord -= 26
			end
			#puts "unciphered_ord after: #{unciphered_ord}"		
		cipher_array[i] = unciphered_ord.chr
		end
		
	end

	return_string = cipher_array.join
	return return_string
end

puts solve_cipher("ifmmp",25)
puts solve_cipher("pb uhdo qdph lv grqdog gxfn")

