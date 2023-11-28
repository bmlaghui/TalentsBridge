/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         token:
 *           type: string
 *         email:
 *           type: string
 *         mobile:
 *           type: string
 *         create_date:
 *           type: string
 *           format: date-time
 * 
 *     UserAuthentication:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 * 
 *     UserAdd:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         email:
 *           type: string
 *         mobile:
 *           type: string
 */


// Initialize express router
let router = require("express").Router();
// Set default API response
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Get All Users 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'  # Reference to the User schema
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       description: User data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserAdd'  # Reference to the User schema
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  # Reference to the User schema
 */

/**
 * @swagger
 * /api/user/{user_id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to retrieve
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  # Assuming you have a User schema
 *   patch:
 *     summary: Update a user by ID (partial update)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to update
 *     requestBody:
 *       description: Updated user data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'  # Assuming you have a User schema
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  # Assuming you have a User schema
 *   put:
 *     summary: Update a user by ID (full update)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to update
 *     requestBody:
 *       description: Updated user data
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'  # Assuming you have a User schema
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  # Assuming you have a User schema
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /api/user/authenticate:
 *   post:
 *     summary: Authenticate a user
 *     tags: [Users]
 *     requestBody:
 *       description: User credentials for authentication
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserAuthentication'  # Assuming you have a UserAuthentication schema
 *     responses:
 *       200:
 *         description: Authentication successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  # Assuming you have a User schema
 */
   

/**
 * @swagger
 * /api/user/changepassword/{user_id}:
 *   put:
 *     summary: Change password for a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to change password for
 *     requestBody:
 *       description: Request body for changing the user's password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: The user's current password
 *               newPassword:
 *                 type: string
 *                 description: The new password for the user
 *             required:
 *               - oldPassword
 *               - newPassword
 *     responses:
 *       200:
 *         description: Password changed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The status of the response (e.g., "success")
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the password change
 *       401:
 *         description: Authentication failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The status of the response (e.g., "error")
 *                 message:
 *                   type: string
 *                   description: A message indicating that the old password is incorrect
 */

router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!"
  });
});


// Import user controller
var userController = require("./controllers/users.controller");
// user routes
router
  .route("/users")
  .get(userController.index)
  .post(userController.new);
router
  .route("/user/:user_id")
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);
router.route("/user/authenticate").post(userController.authenticate);
router
  .route("/user/changepassword/:user_id")
  .put(userController.changePassword);

// Import Contact controller
var contactController = require("./controllers/contact.controller");
// Contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);
router
  .route("/contact/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

// Export API routes
module.exports = router;
