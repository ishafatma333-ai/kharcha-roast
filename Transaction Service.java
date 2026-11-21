package com.kharcharoast;

import android.app.IntentService;
import android.content.Intent;
import android.util.Log;

public class TransactionService extends IntentService {
    public TransactionService() {
        super("TransactionService");
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        String smsBody = intent.getStringExtra("sms_body");
        if (smsBody != null) {
            Log.d("TransactionService", "Processing transaction data: " + smsBody);
            // Logic to parse amount and merchant goes here
        }
    }
}
