/**
 * Created by Javier on 14/07/2017.
 */
// Vista/vistaOculta ???????
module.exports = {
  homepage: function (req, res) {
    var usuarioModelo = {
      nombres: "Javier",
      apellidos: "Tinoco",
      id: 1,
    };
    return res.view('homepage', {
      usuario: usuarioModelo
    });
  }


};
