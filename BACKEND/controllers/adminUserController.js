const pool = require('../db');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
      const result = await pool.query('SELECT id, first_name, middle_name, last_name, contact_number, address, email, dob, gender, profile_picture, role FROM users ORDER BY id DESC');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ message: 'Failed to fetch users', error: err });
    }
  };
  

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: 'Failed to delete user', error: err });
  }
};
