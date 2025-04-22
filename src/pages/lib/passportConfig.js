const db = require('./helpers/utils/db');
const bcrypt = require('bcrypt');

const localStrategy = require('passport-local').Strategy;

module.exports = function(passport){
    passport.use(
        new localStrategy((username, password, done) => {
            const query = "SELECT * FROM login_register.task_databse where username = ?";
            db.query(query, [username], (err,result) => {
                if(result.length === 0){
                    return done(null, false)
                }
                bcrypt.compare(password, result[0].password, (err,response) => {
                    if(response === true){
                        return done (null, result[0]);
                    }
                    else{
                        return done(null,false);
                    }
                })
            })
        })
    )
}

passport.serializeUser((user,done) => {
    done(null, user.id);
})

passportdeserializeUser((id,done) => {
    const query = "SELECT * FROM newdb.task_databse where id = ?";
    db.query(query, [id], (err,result) => {
        const userInfo = {
            id: result[0].id,
            username: result[0].username
        }
        done(null, userInfo);
    })
})