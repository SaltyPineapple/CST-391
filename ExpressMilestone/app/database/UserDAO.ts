import { User } from "../models/User";
import * as mysql from "mysql";
import * as util from "util";

export class UserDAO
{
    private host:string = "";
    private port:number = 3306;
    private username:string = "";
    private password:string = "";
    private schema:string = "cst391";
    private pool = this.initDbConnection();
    
    /**
     * Non-default constructor.
     * 
     * @param host Database Hostname
     * @param username Database Username
     * @param password Database Password
     */
    constructor(host:string, port:number, username:string, password:string)
    {
        // Set all class properties
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.pool = this.initDbConnection();
    }

    public getAllUsers(callback: any){
        let users:User[] = [];
        
        this.pool.getConnection(function(err:any, connection:any){
            // Throw error if an error
            if (err) throw err

            // Run query    
            connection.query('SELECT * FROM USERS', function (err:any, rows:any, fields:any) 
            {
                // Release connection in the pool
                connection.release();

                // Throw error if an error
                if (err) throw err
    
                // Loop over result set and save the Artist Name in the List of Artists
                for(let x=0;x < rows.length;++x)
                {
                    users.push(new User(rows[x].id, rows[x].name, rows[x].password, rows[x].email));
                }
    
                // Do a callback to return the results
                callback(users);
            });
        });
    }

    public getUserById(userId:number, callback:any){
        this.pool.getConnection(async function(err: any, connection:any){
            connection.release();
            if (err) throw err;
            
            connection.query = util.promisify(connection.query);
            let queryResult = await connection.query('SELECT * FROM USERS WHERE ID=?', [userId]);
            if(queryResult.length != 1){
                callback(null);
            }
            let user = new User(queryResult[0].id, queryResult[0].name, queryResult[0].password, queryResult[0].email);
            
            callback(user);
        });
    }

    public createUser(user:User, callback:any){
        this.pool.getConnection(async function(err:any, connection:any){
            connection.release();
            if (err) throw err

            connection.query = util.promisify(connection.query)
            let queryResponse = connection.query('INSERT INTO USERS (name, password, string) VALUES (?,?,?)', [user.Name, user.Password, user.Email]);
            let userId = queryResponse.insertId;
            callback(userId);
        })
    }

    public deleteUser(userId:number, callback:any){
        this.pool.getConnection(async function(err:any, connection:any){
            connection.release();
            if (err) throw err

            let changes = 0;
            connection.query = util.promisify(connection.query);
            let queryResponse = await connection.query("DELETE FROM USERS WHERE ID = ?", [userId]);
            changes = changes + queryResponse.affectedRows;

            callback(changes);
        });
    }

    private initDbConnection():any
    {
        return mysql.createPool({host: this.host, port: this.port, user: this.username, password: this.password, database: this.schema, connectionLimit: 10});
    }
}