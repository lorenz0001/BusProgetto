const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

codici = ["1","2","3","4"];

app.get('/:name', (req, res) => {
    const name = req.params.name;
    if(name == "null" || !codici.includes(name)){
        res.send("<center><h1>Il codice della fermata non esiste</h1></center>");
    } else {
        res.send("<center><h1>Ecco le informazioni sulla fermata " + name + ":</h1></center><br><iframe width='425' height='350' src='https://www.openstreetmap.org/export/embed.html?bbox=15.378112792968752%2C41.5553524924245%2C16.020812988281254%2C41.90585436043303&amp;layer=mapnik' style='border: 1px solid black'></iframe><br/><small><a href='https://www.openstreetmap.org/#map=11/41.7308/15.6995'>Visualizza mappa ingrandita</a></small>");
    }
});