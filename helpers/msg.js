const moment=require('moment');



const genMsg = function (from,text){
   return{
       from,
       text,
       createsAt:moment().valueOf()
   }
};
const genLocation = function(from,lat,lon){
    return{
        from,
        url:`https://www.google.com/maps?q=${lat},${lon}`,
        createsAt:moment().valueOf()
        }  
}
module.exports = {genMsg,genLocation};