import { Model } from 'objection';
import Subscription from './Subscription.js';

class SubscriptionPlan extends Model {
  static get tableName() {
    return 'subscription_plans';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      subscriptions: {
        relation: Model.HasManyRelation,
        modelClass: Subscription,
        join: {
          from: 'subscription_plans.id',
          to: 'subscriptions.plan_id',
        },
      },
    };
  }
}

export default SubscriptionPlan;
