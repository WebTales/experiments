module.exports = function(Model, options) {
  // Model is the model class
  // options is an object containing the config properties from model definition
  Model.defineProperty('created', {type: Date});
  Model.defineProperty('modified', {type: Date});
  Model.observe('before save', function filterProperties(ctx, next) {
    if(ctx.isNewInstance&&ctx.instance){
      ctx.instance.created=new Date();
    }
    if(ctx.instance){
      ctx.instance.modified=new Date();
    }
    next();
  });
};
