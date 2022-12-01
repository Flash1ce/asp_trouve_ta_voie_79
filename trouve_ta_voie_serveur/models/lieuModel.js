"use strict";

const {DataTypes} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("lieux", {
        titre: {
            type: DataTypes.STRING(50),
            unique: true,
            validate: {
                len: [3, 50]
            }
        },
        description: {
            type: DataTypes.STRING(500),
            validate: {
                len: [3, 500]
            }
        },
        directives: {
            type: DataTypes.STRING(500),
            validate: {
                len: [3, 500]
            }
        },
        // edit: Verifié si les co sont valide dans la bd genre qu'il manque pas de chiffre
        latitude: {
            type: DataTypes.FLOAT(4, 18)
        },
        longitude: {
            type: DataTypes.FLOAT(4, 18)
        }
    });
};
