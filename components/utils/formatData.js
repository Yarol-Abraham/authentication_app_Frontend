export const formatData = function (data, ...allowFields) {
    let newData = {};
      Object.keys(data).forEach(el =>{
        if( allowFields.includes(el) ) newData[el] = data[el];
      });
      return newData;
};