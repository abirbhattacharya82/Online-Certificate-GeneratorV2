const PDFDocument = require('pdfkit');

function build(dataCallback, endCallback, data) {
  const doc = new PDFDocument({layout: 'landscape',size: 'A4',});

  doc.on('data', dataCallback);
  doc.on('end', endCallback);

  console.log(data);

  
    doc.image(__dirname+'/assets/image/temp_1.png',0,0,{width:850});
    doc.fillColor('white').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[1],330,130);
    doc.fillColor('pink').fontSize(60).font(__dirname+'/assets/fonts/MsMadi-Regular.ttf').text(data[0],240,240);
    doc.fillColor('black').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[2],250,370);
    doc.fillColor('black').fontSize(50).font(__dirname+'/assets/fonts/Babylonica-Regular.ttf').text(data[3],300,430);
    doc.fillColor('black').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[3],350,485);
 
  
  
  doc.end();
}

module.exports = { build };