/**
 * Main package entry file.
 * index.js
 *
 * @author Rajasegar Chandran <rajasegar>
 * @copyright Rajasegar Chandran, 2016.
 */

var List = require('./src/List.js');
var Stack = require('./dist/Stack.min.js');
var Queue = require('./dist/Queue.min.js');

module.exports = {
    List:List,
    Stack:Stack,
    Queue:Queue
};

