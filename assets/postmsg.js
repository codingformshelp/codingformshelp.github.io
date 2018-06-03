gotoUrl = function(args){
    parent.postMessage({action: 'goto', args:args},'http://localhost:4200');
}