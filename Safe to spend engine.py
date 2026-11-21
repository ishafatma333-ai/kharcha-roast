class SafeToSpendEngine:
    def __init__(self, monthly_salary, fixed_expenses):
        self.balance = monthly_salary - fixed_expenses

    def deduct_expense(self, amount):
        self.balance -= amount
        return self.balance

    def get_safe_balance(self):
        return self.balance
