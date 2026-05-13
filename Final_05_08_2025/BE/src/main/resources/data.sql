-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.
-- ⚠️ Advertencia: No modificar este archivo.

INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (1, 'alice@example.com', 'Alice', 'Smith', 1500.00, true);
INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (2, 'bob@example.com', 'Bob', 'Johnson', 1200.00, true);
INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (3, 'carol@example.com', 'Carol', 'Williams', 3000.00, true);
INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (4, 'dave@example.com', 'Dave', 'Brown', 450.00, false);
INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (5, 'eve@example.com', 'Eve', 'Jones', 2500.00, true);
INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (6, 'frank@example.com', 'Frank', 'Garcia', 600.00, false);
INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (7, 'grace@example.com', 'Grace', 'Miller', 800.00, true);
INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (8, 'heidi@example.com', 'Heidi', 'Davis', 3500.00, true);
INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (9, 'ivan@example.com', 'Ivan', 'Martinez', 100.00, true);
INSERT INTO users (id, email, first_name, last_name, balance, is_active) VALUES (10, 'judy@example.com', 'Judy', 'Lopez', 1800.00, true);

INSERT INTO auctions (id, title, description, start_date, end_date, max_amount, highest_bidder_id)
VALUES (
   1001,
   'Subasta de arte renacentista',
   'Pinturas originales del siglo XVI.',
   '2025-08-02 10:00:00',
   '2025-08-06 10:00:00',
   1200.00,
   3
);

INSERT INTO auctions (id, title, description, start_date, end_date, max_amount, highest_bidder_id)
VALUES (
   1002,
   'Subasta de autos clásicos',
   'Vehículos restaurados de los años 60s y 70s.',
   '2025-08-03 08:00:00',
   '2025-08-10 08:00:00',
   1200.00,
   8
);

INSERT INTO auctions (id, title, description, start_date, end_date, max_amount, highest_bidder_id)
VALUES (
    1003,
   'Subasta de tecnología vintage',
   'Computadoras y consolas de videojuegos antiguas.',
   '2025-08-01 09:00:00',
   '2025-08-04 09:00:00',
   800.00,
   1
);