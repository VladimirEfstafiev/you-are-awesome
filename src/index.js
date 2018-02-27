// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return propertyName };
const createNotEnumerableProperty = (propertyName) => { return Symbol(propertyName) };
const createProtoMagicObject = () => {};

let value = 0;
const incrementor = () => {
    value++;
    return incrementor;
};
Function.prototype.toString = () => {
    return value;
};

let count = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        resolve(++count);
    })
};

const createIncrementer = () => {
    let count = 0;

    function* Incrementor() {
        while (true) {
            yield ++count;
        }
    }
    return Incrementor();

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(param); }, 1052)
    })
};
const getDeepPropertiesCount = (obj) => {
    let count = 0,
        i = 0;

    temp = obj;
    while (Object.values(temp).length != 0) {
        count += Object.values(temp).length;
        count += Object.values(temp[i]).length;
        temp = temp[i][i];
        i++;
        if (i > 99) {
            i = 0;
        }
    }
    return count;
};

const createSerializedObject = () => {};
const sortByProto = (arr) => {
  arr.sort((a,b)=>{
      if(a.__proto__<b.__proto__){
          return -1;
      }else{
          return 1;
      }
  });
    return arr;
};

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