const { Model, DataTypes } = require('sequelize');

class Categoria extends Model {

  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: 'nome',
          msg: 'Nome já cadastrado.'
        },
        validate: {
          notEmpty: {
            msg: "Nome obrigatório."
          },
          notNull: {
            msg: "Nome obrigatório."
          }
        }
      },
    }, {
      tableName: 'categorias',
      timestamps: false,
      sequelize
    })
  }

}

module.exports = Categoria;
