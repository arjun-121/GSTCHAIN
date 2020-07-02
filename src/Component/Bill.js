import React from 'react';

function Bill() {
  return (
    <div class="container">
        <div class="main-block">
            <div class="header-icon">
                <img src="./assets/grahak.jpeg" alt="grahak"/>
            </div>
            <form>
                <div class="input-container">
                    <label for="customer">Customer Name</label>
                    <input type="text" id="customer" name="customer"/>
                </div>
                <div class="input-container">
                    <label for="mobile">Customer Mobile No.</label>
                    <input type="tel" id="Cmobile" name="Cmobile"/>
                </div>
                <div class="input-container">
                    <label for="MUID">Merchant UID</label>
                    <input type="text" id="MUID" name="MUID"/>
                </div>
                <div class="input-container">
                    <label for="amount">Bill Amount</label>
                    <input type="text" id="amount" name="amount"/>
                </div>
                <div class="input-container">
                    <label for="item">Item Type</label>
                    <input type="text" id="item" name="item"/>
                </div>
                <div class="input-container">
                    <button type="submit">PAY BILL</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Bill;
