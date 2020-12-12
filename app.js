  
window.onload = function() {
  let pronoun = ["the","my","our"];
  let adj = ["great", "black", "different", "important" ];
  let noun = ["jogger","racoon", "parade", "socks"];
  let extension = [".com", ".net", ".us", ".io"]

  
  for (i = 0; i < pronoun.length; i++){
      for (j = 0; j < adj.length; j++){
          for (k = 0; k < noun.length; k++){
              for (l = 0; l < extension.length; l++){
                console.log(pronoun[i]+adj[j]+noun[k]+extension[l]);
              }
          }
      }
  }
}