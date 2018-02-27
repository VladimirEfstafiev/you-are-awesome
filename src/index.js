// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return propertyName};
const createNotEnumerableProperty = (propertyName) => {return Symbol(propertyName)};
const createProtoMagicObject = () => {
};

let value=0;
const incrementor = () => {
value++;
return incrementor;
};
Function.prototype.toString=()=>{
    return value;
};


const asyncIncrementor = () => {};

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
    setTimeout(()=>{resolve(param);},1052)
})};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
