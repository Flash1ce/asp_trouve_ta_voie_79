"use strict";

const db = require("../models/dbSetup");
const validatorFct = require("../fctUtils/validations");
const Utilisateur = db.utilisateurs;

exports.getUserByEmail = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findOne({
            where: {courriel: req.params.courriel},
        });

        if (utilisateur) {
            res.status(200).json(utilisateur);
        } else {
            res.status(404).end();
        }
    } catch (e) {
        res.status(500).end();
    }
};

exports.changeUsername = async (req, res) => {
    // Permets de changer le nom d'utilisateur de lui qui est connecté.
    try {
        const nameIsValid = validatorFct.userNameIsValid(req.body.name);

        if (nameIsValid) {
            const user = await Utilisateur.findByPk(req.token.userId);

            if (user) {
                if (+user.id === +req.token.userId) {
                    // Modification du nom
                    await Utilisateur.update({
                        nom: req.body.name,
                    }, {where: {id: +req.token.userId}});

                    res.status(204).end();
                } else {
                    res.status(403).end();
                }
            } else {
                res.status(400).end();
            }
        } else {
            res.status(400).end();
        }
    } catch (e) {
        res.status(500).end();
    }
};

exports.allReq = async (req, res) => {
    res.status(405).end();
};
