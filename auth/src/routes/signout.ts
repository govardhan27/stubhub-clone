import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
	res.send('from sign out');
});

export { router as signoutRouter };
