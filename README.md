# cordova-plugin-adder

## install in cordova

```shell
cordova plugin add cordova-plugin-adder
```

## how to use

add

```js
// Test my plugin
// add this code block in receivedEvent: function
function success(result){
  alert("Joe plugin result:" + result);
}

setTimeout(function(){
  cordova.exec(success, null, "Adder", "performAdd", [10, 20]);
});
```

in js/index.js

### use add function

```js
cordova.plugins.Adder.add([1,2],function(msg){console.log(msg);},null);
```