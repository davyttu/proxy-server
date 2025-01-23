const express = require('express');
const axios = require('axios');
const app = express();

app.get('/totalcoins', async (req, res) => {
  try {
    const apiUrl = 'https://api.basescan.org/api?module=stats&action=tokensupply&contractaddress=0x438f3e402Cd1eEe3d2Fb4Fb79f7900e8DAFCbFdf&apikey=E66W2NDIARK1GHHYKB1NT7GYY5ATGAKMV5';
    const response = await axios.get(apiUrl);
    if (response.data.status === '1') { // Vérifie si la réponse est OK
      res.send(response.data.result); // Retourne uniquement la valeur numérique
    } else {
      res.status(400).send('Error');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Proxy running on port 3000');
});
