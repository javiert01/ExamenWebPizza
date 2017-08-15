/**
 * TipoIngredienteController
 *
 * @description :: Server-side logic for managing Tipoingredientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    crearPizza: function(req,res) {
    TipoIngrediente.find().exec(
    function(err, ingredientesEncontrados){
    if (err){
      return res.serverError(err);
    }else{
        return res.view('crearPizza',{ingredientes:ingredientesEncontrados})
      }

  }
)

}
};

