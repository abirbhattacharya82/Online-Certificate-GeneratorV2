const PDFDocument = require('pdfkit');

function build(dataCallback, endCallback, data) {
  const doc = new PDFDocument({layout: 'landscape',size: 'A4',});

  doc.on('data', dataCallback);
  doc.on('end', endCallback);
  var temp=""+data[5];
  if(temp==='spring')
  {
    doc.image(__dirname+'/assets/image/temp_1.png',0,0,{width:850});
    doc.fillColor('white').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[1],330,130);
    doc.fillColor('pink').fontSize(60).font(__dirname+'/assets/fonts/MsMadi-Regular.ttf').text(data[0],240,240);
    doc.fillColor('black').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[2],250,370);
    doc.fillColor('black').fontSize(50).font(__dirname+'/assets/fonts/Babylonica-Regular.ttf').text(data[3],300,430);
    doc.fillColor('black').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[4],350,485);
  }
  else if(temp==='gold')
  {
    doc.image(__dirname+'/assets/image/temp_2.png',0,0,{width:850});
    doc.fillColor('#F5D182').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[1],340,130);
    doc.fillColor('#F5D182').fontSize(60).font(__dirname+'/assets/fonts/MsMadi-Regular.ttf').text(data[0],240,230);
    doc.fillColor('white').fontSize(15).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[2],240,300);
    doc.fillColor('#F5D182').fontSize(40).font(__dirname+'/assets/fonts/Babylonica-Regular.ttf').text(data[3],330,400);
    doc.fillColor('white').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[4],345,450);
  }
  else if(temp==='aura')
  {
    doc.image(__dirname+'/assets/image/temp_3.png',0,0,{width:850});
    doc.fillColor('#F5D182').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[1],170,150);
    doc.fillColor('#F5D182').fontSize(60).font(__dirname+'/assets/fonts/MsMadi-Regular.ttf').text(data[0],100,250);
    doc.fillColor('white').fontSize(15).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[2],100,330);
    doc.fillColor('#F5D182').fontSize(40).font(__dirname+'/assets/fonts/Babylonica-Regular.ttf').text(data[3],90,420);
    doc.fillColor('white').fontSize(20).font(__dirname+'/assets/fonts/PlayfairDisplay-Regular.ttf').text(data[4],90,470);
  }
  doc.end();
}

module.exports = { build };