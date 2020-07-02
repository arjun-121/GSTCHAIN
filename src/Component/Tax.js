import React from 'react';

function Tax() {
  return (
        <div class="container">
            <div class="main-block">
                <div class="header-icon">
                    <img src="./assets/return.jpeg" alt=""/>
                </div>
                <form>
                    <div class="input-container">
                        <label for="gst">GST Number</label>
                        <input type="text" id="gst" name="gst"/>
                    </div>
                    <div class="input-container">
                        <label for="pan">PAN Number</label>
                        <input type="text" id="pan" name="pan"/>
                    </div>
                    <div class="input-container">
                        <label for="ac-no">Account Number</label>
                        <input type="text" id="ac-no" name="ac-no"/>
                    </div>
                    <div class="input-container">
                        <label for="tax-paid">Total Tax Paid</label>
                        <input type="text" id="tax-paid" name="tacx-paid"/>
                    </div>
                    <div class="input-container">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <div class="input-container">
                        <button type="submit">file return</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Tax;