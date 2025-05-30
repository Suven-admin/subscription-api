import knex from 'knex';
import { Model } from 'objection';
import config from './knexfile.js';

// Your DB connection config
const knexInstance = knex(config.development);

// Bind all Models to knex
Model.knex(knexInstance);

export default knexInstance;