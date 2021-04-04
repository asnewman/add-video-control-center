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

function EntryQRGenerator () {
  const [deviceCode, setDeviceCode] = useState('');
  const [pass, setPass] = useState('');

  function generateQRCode (e) {
    e.preventDefault();

    if (!deviceCode || !pass) {
      window.alert('Please fill out all of the fields');
      return;
    }

    QRCode.toCanvas(document.getElementById('entrycodecanvas'), JSON.stringify({
      "DEVICE_CODE": deviceCode,
      "DEVICE_PASSWORD": pass
    }), { width: 500 }, function (err) {
      if (err) window.alert('Failed to create QR Code');
      else console.log('QRCode created successfully');
    });
  }

  return (
    <div>
      <h1>Entry QR Generator</h1>
      <p>Enter your device code and password to generate a QRCode that will grant you access:</p>
      <Field>
        <label htmlFor='device-code'>ADD Video Device Code</label>
        <input type='text' id='device-code' name='device code' value={deviceCode} onChange={(e) => setDeviceCode(e.target.value)} />
      </Field>
      <Field>
        <label htmlFor='pass'>Password</label>
        <input type='password' id='pass' name='password' value={pass} onChange={(e) => setPass(e.target.value)} />
      </Field>
      <GenerateButton onClick={generateQRCode}>Generate</GenerateButton>
      <canvas id='entrycodecanvas' />
    </div>
  );
}

export default EntryQRGenerator;
