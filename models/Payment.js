import { Model } from 'objection';
import User from './User.js';
import Subscription from './Subscription.js';

class Payment extends Model {
    static get tableName() {
        return 'payments';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['user_id', 'subscription_id', 'payment_gateway', 'amount', 'status'],
            properties: {
                id: { type: 'integer' },
                user_id: { type: 'integer' },
                subscription_id: { type: 'integer' },
                payment_gateway: { type: 'string', maxLength: 50 },
                payment_reference: { type: ['string', 'null'], maxLength: 100 },
                amount: { type: 'number' },
                status: { type: 'string', maxLength: 20 },
                paid_at: { type: ['string', 'null'], format: 'date-time' },
                created_at: { type: ['string', 'null'], format: 'date-time' }
            }
        };
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'payments.user_id',
                    to: 'users.id'
                }
            },
            subscription: {
                relation: Model.BelongsToOneRelation,
                modelClass: Subscription,
                join: {
                    from: 'payments.subscription_id',
                    to: 'subscriptions.id'
                }
            }
        };
    }
}

export default Payment;
