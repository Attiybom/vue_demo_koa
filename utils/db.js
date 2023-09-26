const mysql = require('mysql');

// 连接池
const pool = mysql.createPool({
  host: 'locallhost',
  post: 3333,
  database: 'vueDB',
  user: 'root',
  password: 'root'
})


// 对数据库进行增删改查操作的基础
function queryFromVueDB(sql, callback) {
  // 创建链接
  pool.getConnection((err, connection) => {
    connection.query(sql, (err, rows) => {
      callback(err, rows)
      connection.release() //中断链接
    })
  })
}


exports.query = queryFromVueDB
