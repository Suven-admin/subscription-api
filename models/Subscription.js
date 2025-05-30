import { Model } from 'objection';
import User from './User.js';
import SubscriptionPlan from './SubscriptionPlan.js';

class Subscription extends Model {
    static get tableName() {
        return 'subscriptions';
    }

    static get idColumn() {
        return 'id';
    }

    static get relationMappings() {

        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'subscriptions.user_id',
                    to: 'users.id',
                },
            },
            plan: {
                relation: Model.BelongsToOneRelation,
                modelClass: SubscriptionPlan,
                join: {
                    from: 'subscriptions.plan_id',
                    to: 'subscription_plans.id',
                },
            },
        };
    }
}

export default Subscription;
