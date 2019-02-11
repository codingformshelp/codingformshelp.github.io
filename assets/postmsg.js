var parentUrl = 'https://www.codingforms.com';

gotoUrl = function(args){
    parent.postMessage({action: 'goto', args:args}, parentUrl);
};

showRefIndex = function(args){
    parent.postMessage({action: 'showRefIndex', args: args}, parentUrl);
};

// actions - goto, showRefIndex, showTopicDetails
postMsg = function(action, args){
    parent.postMessage({action: action, args: args}, parentUrl);
};
