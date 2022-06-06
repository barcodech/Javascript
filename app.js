async function loadFile(){
  const promise = new Promise((resolve , reject) =>{
    let fileLoaded  = false;

    if(fileLoaded){
      resolve("File loaded");
    }
    else{
      reject("File NOT loaded");
    }
  })
  try{
  document.getElementById("myH1").innerHTML = await promise;
  }
  catch(error){
    document.getElementById("myH1").innerHTML = error;
  }
}

loadFile();