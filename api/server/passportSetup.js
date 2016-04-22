
var setup = function(knex){
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var knex = require('./db').knex;
  var bcrypt = require('bcrypt');

  // Configure the local strategy for use by Passport.
  //
  // The local strategy require a `verify` function which receives the credentials
  // (`username` and `password`) submitted by the user.  The function must verify
  // that the password is correct and then invoke `cb` with a user object, which
  // will be set at `req.user` in route handlers after authentication.

  // passport.use(new Strategy(
  //   function(username, password, cb) {
  //     db.users.findByUsername(username, function(err, user) {
  //       if (err) { return cb(err); }
  //       if (!user) { return cb(null, false); }
  //       if (user.password != password) { return cb(null, false); }
  //       return cb(null, user);
  //     });
  //   }));

  passport.use(new LocalStrategy(
    function(username, password, done) {
      knex.select('*').from('users').where({username: username}).then(function(rows){
        console.log("rows: "+rows);
        if(rows.length===0){
            return done(null, false, { message: 'Incorrect username.' });
        }
        if(rows.length>1){
            return done(null, false, { message: 'Multiple usernames exist in database!' });
        }
        if(!checkPassword(password,rows[0].password)){
            return done(null, false, { message: 'Incorrect password.' });
        }
      return done(null, rows[0]);
      });
    }
  ));

function checkPassword(enteredPassword, realPassword){
  return bcrypt.compareSync(enteredPassword, realPassword);
}

  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.
  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  // passport.deserializeUser(function(id, cb) {
  //   db.users.findById(id, function (err, user) {
  //     if (err) { return cb(err); }
  //     cb(null, user);
  //   });
  // });


  passport.deserializeUser(function(id, cb) {
    knex.select('*').from('users').where({username: username}).then(function(rows){
      if(rows.length>1){
          return cb("More than one username returned!");
      }

      cb(null, rows[0]);
    });

    // db.users.findById(id, function (err, user) {
    //   if (err) { return cb(err); }
    //   cb(null, user);
    // });
  });

}

module.exports = {setup: setup};
