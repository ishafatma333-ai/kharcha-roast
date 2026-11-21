import unittest
from UpiParser import parse_upi_sms
from SafeToSpendEngine import SafeToSpendEngine

class TestKharchaRoast(unittest.TestCase):
    def test_sms_parser(self):
        sms = "INR 500 debited via UPI to zomato@okaxis"
        result = parse_upi_sms(sms)
        self.assertEqual(result["amount"], 500)
        self.assertEqual(result["merchant"], "Zomato")

    def test_safe_balance_calculation(self):
        engine = SafeToSpendEngine(50000, 20000)
        engine.deduct_expense(1500)
        self.assertEqual(engine.get_safe_balance(), 28500)

if __name__ == '__main__':
    unittest.main()
