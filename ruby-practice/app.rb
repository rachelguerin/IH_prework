class App
	name = ""
	author = ""
	op_sys = ""
	score = 0
	score_literal = ""

	def initialize(name,author,op_sys,score)
		@name = name
		@author = author
		@op_sys = op_sys
		@score = score
    	
    	literal_options = ["poor","good","very cool","awesome"]

    	case @score
    	when 0..4 then @score_literal = literal_options[0]
    	when 5..6 then @score_literal = literal_options[1]	
    	when 7..9 then @score_literal = literal_options[2]		
    	else @score_literal = literal_options[4]		
	end

	def description
		puts 
	end

	def evaluation(other_app)

	end
end