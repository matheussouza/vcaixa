const { Model, DataTypes } = require('sequelize');

class Movimentacao extends Model {

  static init(sequelize) {
    super.init({
      data: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [['Entrada', 'Saída']],
            msg: 'Tipo deve ser Entrada ou Saída.'
          }
        }
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
           notNull: {
             msg: 'Descrição obrigatória.'
           },
           notEmpty: {
             msg: 'Descrição obrigatória.'
           }
         }
      },
      valor: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Valor Obrigatório.'
          },
          notEmpty: {
            msg: 'Valor obrigatório.'
          },
          isNumeric: {
            msg: 'Valor deve ser um número.'
          }
        }
      }
    }, {
      tableName: 'movimentacoes',
      timestamps: false,
      sequelize
    })
  }

}

module.exports = Movimentacao;
