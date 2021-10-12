const Model = require('./model');

class User extends Model {

    create_user(post) {
        const bday = new Date().getTime() - new Date(post.birthday).getTime();
        const age = Math.floor(bday / (1000 * 60 * 60 * 24 * 365.25));
        this.query = this.mysql.format(`
            INSERT INTO users(first_name, last_name, gender, birthday, age, created_at, updated_at)
            VALUES(?, ?, ?, ?, ?, NOW(), NOW());`, [post.first_name, post.last_name, post.gender, post.birthday, age]);

        this.db.query(this.query);
    }

    list_users() {
        return new Promise((resolve, reject) => {
            this.db.query('SELECT * FROM users ORDER BY id DESC;', function(err, result) { 
                resolve(result);
            });
        })
    }

    delete_user(get) {
        this.db.query('DELETE FROM users WHERE id = ?;', [get.id]);
    }

    update_user(post) {
        const bday = new Date().getTime() - new Date(post.birthday).getTime();
        const age = Math.floor(bday / (1000 * 60 * 60 * 24 * 365.25));
        this.query = this.mysql.format(`
            UPDATE users SET first_name = ?, last_name = ?, gender = ?, birthday = ?, age = ?, updated_at = NOW()
            WHERE id = ?`, [post.first_name, post.last_name, post.gender, post.birthday, age, post.id]);

        this.db.query(this.query);
    }

    validate_user(post) {
        if(post.first_name == "" || post.last_name == "" || post.gender == "" || post.birthday == "") {
            return "All fields are required";
        } else {
            return "valid_input";
        }
    }
} //end class

module.exports = new User();