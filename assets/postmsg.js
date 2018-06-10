var parentUrl = 'http://localhost:4200';

gotoUrl = function(args){
    parent.postMessage({action: 'goto', args:args}, parentUrl);
};

showRefIndex = function(args){
    parent.postMessage({action: 'showRefIndex', args: args}, parentUrl);
};
