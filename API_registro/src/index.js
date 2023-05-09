const express = require("express");
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(app.get('port'), () => {
    console.log(`Server on port http://localhost:${app.get('port')}/`);
});
