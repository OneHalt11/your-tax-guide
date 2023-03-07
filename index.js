const express = require('express')
const path = require("path")
const fs = require('fs')

require('./db/mongoose')

const emailRouter = require('./routers/email')
const clickRouter = require('./routers/click')

const app = express()


app.get('/video', function (req, res) {
  const filePath = path.join(__dirname, 'videos', 'HRA Exemption.mp4');

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;

  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
});


app.use(express.static('public'));
app.use(express.json())

const PORT = process.env.PORT || 3000

const filePath = path.join(__dirname, "public", "index.html")

const apiRoute = "/api"

app.use(apiRoute, emailRouter)
app.use(apiRoute, clickRouter)

app.get("/*", (req, res) => {
  res.sendFile(filePath)
})

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
})