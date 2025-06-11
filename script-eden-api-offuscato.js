// ===============================================
// EDEN - script.js (con chiavi API offuscate - Base64)
// ===============================================

// ⚠️ Le chiavi sono offuscate solo per evitare visibilità immediata
// 🔐 Per maggiore sicurezza usare variabili ambiente o gestione lato server

function decodeBase64(str) {
  try {
    return atob(str);
  } catch (e) {
    console.error("Errore nella decodifica Base64:", e);
    return '';
  }
}

const CONFIG = {
  ALPACA_API_KEY: decodeBase64("UEs1SFhBN1IwUjZJNUFLRkdWUEQ="),
  ALPACA_SECRET_KEY: decodeBase64("N05SdFpaMnVwRVNGajl5OHJMZlFDckh1UWFkMjdad1hZOEppa3FHbQ=="),
  BASE_URL: 'https://paper-api.alpaca.markets'
};

function connectToAlpaca() {
  if (!CONFIG.ALPACA_API_KEY || !CONFIG.ALPACA_SECRET_KEY) {
    alert("⚠️ Le chiavi API non sono valide.");
    return;
  }

  fetch(`${CONFIG.BASE_URL}/v2/account`, {
    method: "GET",
    headers: {
      "APCA-API-KEY-ID": CONFIG.ALPACA_API_KEY,
      "APCA-API-SECRET-KEY": CONFIG.ALPACA_SECRET_KEY
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log("✅ Account Alpaca:", data);
    alert("Connessione Alpaca riuscita!");
  })
  .catch(err => {
    console.error("❌ Errore Alpaca:", err);
    alert("Errore nella connessione ad Alpaca.");
  });
}

document.getElementById("connectButton")?.addEventListener("click", connectToAlpaca);