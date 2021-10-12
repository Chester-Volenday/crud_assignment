const user = require('../models/user');

class Users {

    async index(req, res) {
        const users = await user.list_users();
        res.render('index', {'error': "", 'users': users});
    }

    async new_user(req, res) {
        const result = user.validate_user(req.body);
        if(result == "valid_input") {
            user.create_user(req.body);
            res.redirect('/');
        } else {
            const users = await user.list_users();
            res.render('index', {'error': result, 'users': users});
        }
    }

    user_info(req, res) {
        res.render('update', {'error': "", 'data': req.body});
    }

    delete_user(req, res) {
        user.delete_user(req.query);
        res.redirect('/');
    }

   update_user(req, res) {
    const result = user.validate_user(req.body);
    if(result == "valid_input") {
        user.update_user(req.body);
        res.redirect('/');
    } else {
        res.render('update', {'error': result, 'data': req.body});
    }
   }
}

module.exports = new Users();