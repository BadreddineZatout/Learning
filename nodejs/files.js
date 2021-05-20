const fs = require('fs');

// reading files

// fs.readFile('./blog12.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');

//writing files

// fs.writeFile('./blogs.txt', 'hello world!', () =>{
//     console.log('file was written');
// });

//directories

if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// deleting files

if (fs.existsSync('./blogs.txt')){
    fs.unlink('./blogs.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}