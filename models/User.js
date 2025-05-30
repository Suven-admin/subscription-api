import { Model } from 'objection';
import Subscription from "./Subscription.js";

class User extends Model {
    static get tableName() {
        return 'users';
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
                    from: 'users.id',
                    to: 'subscriptions.user_id',
                },
            },
        };
    }
}

export default User;
