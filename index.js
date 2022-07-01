const express = require('express');
const pdfService = require('./service/certificate-generate');
const app=express();
const cors=require('cors');
app.use(cors());
const port=process.env.PORT || 3000;

const bodyparser=require('body-parser');
const encoder=bodyparser.urlencoded();

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/views/index.html');
});

app.post('/post', encoder,(req, res, next) => {

  var title=req.body.title_of_Certificate;
  var name=req.body.name_of_Candidate;
  var detail=req.body.details_of_Certificate;
  var instructor=req.body.name_of_Instructor;
  var i_inst='['+instructor+']';

  const arr=[name,title,detail,instructor,i_inst];

  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment;filename=certificate.pdf`,
  });
  pdfService.build(
    (chunk) => stream.write(chunk),
    () => stream.end(),
    arr
  );
  
});

app.listen(port);
