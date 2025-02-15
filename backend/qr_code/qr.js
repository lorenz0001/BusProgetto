const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);   //indirizzo sito(per generare codice qr rimpiazzare localhost con proprio indirizzo rete)
});

codici = ["mappa"];  //lista delle pagine  

app.get('/:name', (req, res) => {
    const name = req.params.name;
    if(name == "null" || !codici.includes(name)){
        res.send("<center><h1>Il codice della fermata non esiste</h1></center>");
    } else {
        res.sendFile("C:/Users/filof_x9l28ad/Desktop/pcto/sito_locale/mappa.html");
    }
});


