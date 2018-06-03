gotoUrl = function(url){
    parent.postMessage({action: 'goto', url: url},'http://localhost:4200');
}