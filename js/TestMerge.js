const merge = require('easy-pdf-merge');
merge(['/Beesda2/NodeJS/productie/MergePDF/PDF/VBL01063025.pdf', '/Beesda2/NodeJS/productie/MergePDF/PDF/OFF010000630251.pdf','/Beesda2/NodeJS/productie/MergePDF/PDF/VBL01063025.pdf'], '/Beesda2/NodeJS/produktie/MergePDF/PDF/File Ouput2.pdf', function(err) {
  if(err) {
    return console.log(err)
  }
  console.log('Successfully merged!')
});