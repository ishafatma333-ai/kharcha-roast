package com.kharcharoast;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.telephony.SmsMessage;
import android.util.Log;

public class SmsReceiver extends BroadcastReceiver {
    private static final String SMS_RECEIVED = "android.provider.Telephony.SMS_RECEIVED";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (SMS_RECEIVED.equals(intent.getAction())) {
            Bundle bundle = intent.getExtras();
            if (bundle != null) {
                Object[] pdus = (Object[]) bundle.get("pdus");
                if (pdus != null) {
                    for (Object pdu : pdus) {
                        SmsMessage smsMessage = SmsMessage.createFromPdu((byte[]) pdu);
                        String sender = smsMessage.getDisplayOriginatingAddress();
                        String messageBody = smsMessage.getMessageBody();
                        
                        // Filter for bank/UPI alerts
                        if (messageBody.toLowerCase().contains("debited") || messageBody.toLowerCase().contains("upi")) {
                            Log.d("SmsReceiver", "UPI Alert detected from " + sender + ": " + messageBody);
                            // Pass data to TransactionService
                        }
                    }
                }
            }
        }
    }
}
       
