# dealers_choice_react

CURRENT ISSUES:
- can't get monthId and customerId on seeded order data

QUESTIONS:
 - Babel loader: where is it installed?
 - doing SPA with React?


 RESOLVED ISSUES:
 - originally wrote const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:3000/kb_creamery_2', { logging: false });
 NOTE: the port is 5432 for pg! Silly syntax mistake was made


Goal:
KB Creamery order site:
Months are listed, and there's an order form field to input customer name and the month they are placing an order for.

Table Associations:
- Months
  - ice cream types

- Order
  - orderMade: Bool
  - customer_id
  - month_id

- Customer
  - name
  - email
  - id
