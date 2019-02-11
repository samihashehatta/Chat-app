const genMsg = function (from,text){
   return{
       from,
       text,
       createsAt:new Date().getTime(),
   }
};
module.exports = {genMsg};