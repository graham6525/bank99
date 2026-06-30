import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  phonePassword: text('phone_password').notNull(), // Stocké de manière hachée
  
  // Étape 2 : Données personnelles
  title1: text('title1').notNull(),
  title2: text('title2'),
  firstname: text('firstname').notNull(),
  lastname: text('lastname').notNull(),
  birthdate: text('birthdate').notNull(),
  birthCountry: text('birth_country').notNull(),
  nationality: text('nationality').default('Autriche'),
  otherNationalities: text('other_nationalities').notNull(), // "Non" ou "Et"
  civilStatus: text('civil_status').notNull(),
  address: text('address').notNull(),
  postalCode: text('postal_code').notNull(),
  city: text('city').notNull(),
  mobile: text('mobile').notNull(),
  agreePrecontractual: integer('agree_precontractual', { mode: 'boolean' }).notNull(),

  // Étape 3 : Données financières
  monthlyNetIncome: real('monthly_net_income').notNull(),
  monthlyDeposits: text('monthly_deposits').notNull(),
  incomeSources: text('income_sources').notNull(), // Stocké sous forme de chaîne JSON sérialisée
  hasCar: text('has_car').notNull(),
  housingStatus: text('housing_status').notNull(),
  taxResidence: text('tax_residence').notNull(),

  // Étape 4 : Aspects juridiques
  pepStatus: text('pep_status').notNull(),
  acceptTerms: integer('accept_terms', { mode: 'boolean' }).notNull(),
  fatcaDeclaration: integer('fatca_declaration', { mode: 'boolean' }).notNull(),

  // Méta-données automatiques du compte
  createdAt: text('created_at').notNull(),
});