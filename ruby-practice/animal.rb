class Animal
	def initialize(name)
		@name = name
		@type = "animal"
	end

	def describe
		puts "This #{@type}'s name is #{@name}"
	end
end

class Dog < Animal
	def initialize(name)
		super(name)
		@type = "dog"
	end
end

class Cat < Animal
	def initialize(name)
		super(name)
		@type = "cat"
	end
end

class Human < Animal
	def initialize(name,salary)
		super(name)
		@salary = salary
		@type = "human"
	end
	def describe_with_salary
		puts "This #{@type}'s name is #{@name} and its salary is #{@salary}."
	end
end

dog = Dog.new "Foo"
cat = Cat.new "Fizzgig"
human = Human.new "Rachel Guerin", 12000

dog.describe
cat.describe
human.describe
human.describe_with_salary