import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QrScanner = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
    });

    scanner.render((decodedText, decodedResult) => {
      console.log("QR Code detected:", decodedText);
    });
  }, []);

  return <div id="qr-reader" style={{ width: "500px" }} />;
};

export default QrScanner;
