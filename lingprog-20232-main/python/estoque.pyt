class ToyStore:
    def __init__(self):
        self.stock = {}

    def add_toy(self, toy_name, quantity):
        if toy_name in self.stock:
            self.stock[toy_name] += quantity
        else:
            self.stock[toy_name] = quantity

    def remove_toy(self, toy_name, quantity):
        if toy_name in self.stock:
            if self.stock[toy_name] >= quantity:
                self.stock[toy_name] -= quantity
                if self.stock[toy_name] == 0:
                    del self.stock[toy_name]
            else:
                print("Insufficient stock.")
        else:
            print("Toy not found in stock.")

    def check_stock(self, toy_name):
        if toy_name in self.stock:
            return self.stock[toy_name]
        else:
            return 0

# Example usage
store = ToyStore()
store.add_toy("Teddy Bear", 5)
store.add_toy("LEGO Set", 10)
store.remove_toy("Teddy Bear", 2)
print(store.check_stock("Teddy Bear"))  # Output: 3
print(store.check_stock("LEGO Set"))  # Output: 10
print(store.check_stock("Barbie Doll"))  # Output: 0
