def solve_cipher(cipher)
	cipher_array = cipher.chars

	for i in 0..cipher_array.length-1
		cipher_array[i] = (cipher_array[i].ord - 1).chr
	end
	return_string = cipher_array.join
	return return_string
end

puts solve_cipher("ifmmp")