const genMsg = function (from,text){
   return{
       from,
       text,
       createsAt:new Date().getTime(),
   }
};
genLocation = function(from,lat,lon){
    return{
        from,
        url:`https://www.google.com/maps?q=${lat},${lon}`,
        createsAt:new Date().getTime(),
    }  
}
module.exports = {genMsg,genLocation};