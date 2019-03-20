'use strict';

var _ = require('lodash');

var authService = require('../../auth/auth.service');
var User = require('./user.model');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * @api {post} /users Create a new user
 * @apiVersion 0.1.0
 * @apiName CreateUser
 * @apiDescription Create a new user in the database.
 * @apiGroup User
 *
 * @apiParam {String} email user's email.
 *
 */
exports.create = function (req, res) {
  User.create(req.body, function (err, user) {
    if (err) { return handleError(res, err); }
    res.status(201).json({
      user: _.omit(user.toObject(), ['passwordHash', 'salt']),
      token: authService.signToken(user._id)
    });
  });
};

/**
 * @api {get} /users/me Get the logged user
 * @apiVersion 0.1.0
 * @apiName GetMe
 * @apiDescription Return the user matching the authenticated user.
 * @apiGroup User
 *
 */
exports.getMe = function (req, res) {
  User.findById(req.user._id, function (err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.json(401); }
    res.status(200).json(user);
  });
};

exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword')
  .populate('clients cases reviews subordinates')
  .exec(function (err, users) {
    if(err) return res.status(500).send(err);
    res.status(200).json(users);
  });
};
