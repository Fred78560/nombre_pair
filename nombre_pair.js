exports.action = function (data) {
try{

var phrase=JarvisIA.reco
console.log("on envoie : ",phrase)
var foo = phrase
var nbr=foo.match(/\d+/g).join('')
console.log(nbr)

var rep = "";
  
function nbr_pair_impair(rep) {
      if (data.rep !== undefined) {

var valeur = nbr;
  if(valeur%2 == 0) { JarvisIASpeech(valeur+" est un nombre pair"); }
  else { JarvisIASpeech(valeur+" est un nombre impair"); }
    }
  }

  console.log(rep)
  nbr_pair_impair(rep)
}catch(err){console.log(err);return }
}