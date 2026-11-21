import re

def parse_upi_sms(sms_text):
    amt_match = re.search(r"(?:Rs\.?|INR|₹)\s*([\d,]+(?:\.\d{1,2})?)", sms_text, re.I)
    vpa_match = re.search(r"(?:to|VPA)\s+([a-zA-Z0-9.\-_]+@[a-zA-Z]+)", sms_text, re.I)
    
    if amt_match and vpa_match:
        amount = float(amt_match.group(1).replace(",", ""))
        vpa = vpa_match.group(1).lower()
        merchant = vpa.split("@")[0].title()
        return {"amount": amount, "merchant": merchant}
    return None
