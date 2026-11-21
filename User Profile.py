import random

class HinglishRoastEngine:
    def __init__(self, mode="savage"):
        self.mode = mode

    def generate_roast(self, merchant, amount, safe_balance):
        if safe_balance < 1000:
            return f"Bhai emergency hai! {merchant} pe ₹{amount} uda diye? Ab paani pi ke din katenge kya? 💀"
        
        if amount > 2000:
            return f"Itna ameeri dikhane ki kya zaroorat thi? {merchant} pe ₹{amount} ka chuna lag gaya! 💸"

        if self.mode == "pyaar":
            return f"Dhyan se chalo dost, {merchant} pe ₹{amount} kharch ho gaye. Budget ka bhi socho! ❤️"
        elif self.mode == "mild":
            return f"Phir se kharche? {merchant} pe ₹{amount} uda diye. Thoda control karo boss! 🧐"
        else:
            return f"Zomato ho ya Myntra, tumhari aadat nahi badlegi! ₹{amount} waste kar diye. 🔥"
