import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QrScanner = () => {
  const [decodedText, setDecodedText] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
    });

    scanner.render((text, result) => {
      console.log("QR Code detected:", text);
      setDecodedText(text); // Update the state
    });

    // Optional cleanup if component unmounts
    return () => {
      scanner.clear().catch(error => {
        console.error("Failed to clear scanner", error);
      });
    };
  }, []);

  return (
    <div>
      <div id="qr-reader" style={{ width: "500px" }}></div>
      <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        Decoded Text: {decodedText || "No QR code scanned yet."}
      </div>
    </div>
  );
};

export default QrScanner;
