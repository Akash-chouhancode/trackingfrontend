const mysql = require('../backend/node_modules/mysql2/promise');

async function fix() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'tracking'
    });

    console.log('Connected to database.');

    const sql = "ALTER TABLE tracking_updates MODIFY COLUMN status ENUM('Delivered','Out for delivery','In process','Booking','Cancelled','In Process','Out for Delivery') NOT NULL";
    console.log('Executing:', sql);
    
    await connection.execute(sql);
    console.log('Database schema updated successfully.');
    
    await connection.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

fix();