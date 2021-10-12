class Model {
    constructor() {
        this.mysql = require('mysql');

        this.db = this.mysql.createConnection({
            'host': 'localhost',
            'user': 'root',
            'password': 'root101',
            'database': 'crud',
            'port': 3308
        });

        this.db.connect(err => {
            if(err) throw err;
        });
    }
}

module.exports = Model;