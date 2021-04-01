import React, { useState } from 'react';
import QRCode from 'qrcode';
import styled from 'styled-components';

const GenerateButton = styled.button`
  display: block;
  margin-top: 10px;
`;

const Field = styled.div`
  label {
    width: 200px;
    display: inline-block;
    margin-bottom: 10px;
  }
`;

function QRGenerator () {
  const [deviceCode, setDeviceCode] = useState('');
  const [ssid, setSsid] = useState('');
  const [wifiPass, setWifiPass] = useState('');
  const [sendEmail, setSendEmail] = useState(false);
  const [email, setEmail] = useState('');

  function generateQRCode (e) {
    e.preventDefault();

    // if (!deviceCode || !ssid || !wifiPass) {
    //   window.alert('Please fill out all of the fields');
    //   return;
    // }

    QRCode.toCanvas(document.getElementById('qrcodecanvas'), JSON.stringify({
      deviceCode,
      ssid,
      password: wifiPass,
      "SEND_EMAIL": sendEmail,
      "RECEPIENT_EMAIL": email
    }), { width: 500 }, function (err) {
      if (err) window.alert('Failed to create QR Code');
      else console.log('QRCode created successfully');
    });
  }

  return (
    <div>
      <h1>WiFi QR Generator</h1>
      <p>Submit the following information to generate a QR code which will allow your ADD Video device to connect to a WiFi access point:</p>
      <Field>
        <label htmlFor='device-code'>ADD Video Device Code</label>
        <input type='text' id='device-code' name='device code' value={deviceCode} onChange={(e) => setDeviceCode(e.target.value)} />
      </Field>
      <Field>
        <label htmlFor='ssid'>WiFi SSID</label>
        <input type='text' id='ssid' name='wifi ssid' value={ssid} onChange={(e) => setSsid(e.target.value)} />
      </Field>
      <Field>
        <label htmlFor='wifipass'>WiFi Password</label>
        <input type='password' id='wifipass' name='wifi password' value={wifiPass} onChange={(e) => setWifiPass(e.target.value)} />
      </Field>
      <Field>
        <label htmlFor='sendemail'>Send Email on Activation</label>
        <input type='checkbox' id='sendemail' name='sendemail' value={sendEmail} onChange={(e) => setSendEmail(e.target.checked)} />
      </Field>
      <Field>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </Field>
      <GenerateButton onClick={generateQRCode}>Generate</GenerateButton>
      <canvas id='qrcodecanvas' />
    </div>
  );
}

export default QRGenerator;
