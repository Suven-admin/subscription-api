import express from 'express';
import SubscriptionPlan from '../models/SubscriptionPlan.js';
import User from '../models/User.js';
import Subscription from '../models/Subscription.js';
import Payment from '../models/Payment.js';

const router = express.Router();

// GET all subscription plans
router.get('/plans', async (req, res) => {
  try {
    const plans = await SubscriptionPlan.query();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.query();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all subscriptions
router.get('/list', async (req, res) => {
  try {
    const subscriptions = await Subscription.query()
      .withGraphFetched('[user, plan]');
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all payments
router.get('/payments', async (req, res) => {
  try {
    const payments = await Payment.query()
      .withGraphFetched('[user, subscription]');
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
