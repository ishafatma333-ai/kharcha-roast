class UserProfile:
    def __init__(self, name, monthly_salary, fixed_expenses):
        self.name = name
        self.monthly_salary = monthly_salary
        self.fixed_expenses = fixed_expenses
        self.roast_mode = "savage"
        self.food_budget_weekly = 2000

    def update_roast_mode(self, mode):
        allowed_modes = ["pyaar", "mild", "savage"]
        if mode in allowed_modes:
            self.roast_mode = mode
            return f"Roast mode updated to {mode}."
        return "Invalid mode."

    def get_profile_summary(self):
        return {
            "name": self.name,
            "salary": self.monthly_salary,
            "fixed_expenses": self.fixed_expenses,
            "mode": self.roast_mode
        }
