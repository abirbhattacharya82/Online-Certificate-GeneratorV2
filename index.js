const express = require('express');
const pdfService = require('./service/certificate-generate');
const app=express();
const cors=require('cors');
app.use(cors());
const port=process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment;filename=invoice.pdf`,
  });
  pdfService.build(
    (chunk) => stream.write(chunk),
    () => stream.end(),
    [req.headers['Name'],req.headers['Title'],req.headers['Detail'],req.headers['Instructor'],req.headers['template']]
  );
});

app.listen(port);
