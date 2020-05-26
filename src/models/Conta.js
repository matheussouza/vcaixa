const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Conta extends Model {

  static init(sequelize) {
    super.init({
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "E-mail já cadastrado."
        },
        validate: {
          notEmpty: {
            msg: "E-mail obrigatório."
          },
          notNull: {
            msg: "E-mail obrigatório."
          }
        }
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Senha obrigatória."
          },
          notNull: {
            msg: "Senha obrigatória."
          }
        }
      },
      saldo: DataTypes.DECIMAL
    }, {
      hooks: {
        beforeSave: (obj, opt) => (
          obj.senha = bcrypt.hashSync(obj.senha, 10)
        )
      },
      tableName: 'contas',
      timestamps: false,
      sequelize
    })
  }

  static dadoEmail(email) {
    return this.findOne({
      where: {
        email
      }
    });
  }

}

module.exports = Conta;
