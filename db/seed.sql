INSERT INTO department (name)
VALUES ('HR'),
    ('Sales'),
    ('Engineering');
INSERT INTO roles (title, salary, department_id)
VALUES ('HR Team Lead', 195000, 1),
    ('HR generlist', 100000, 1),
    ('Sales Lead', 85000, 2),
    ('Salesperson', 65000, 2),
    ('Lead Engineer', 140000, 3),
    ('Engineer', 115000, 3);
INSERT INTO employee (
        first_name,
        last_name,
        role_id,
        manager_id,
        manager_confirm
    )
VALUES ('Michael', 'Chriton', 1, null, true),
    ('Joel', 'Hunt', 2, 1, false),
    ('Carley', 'Armstrong', 2, 1, false),
    ('Peter', 'Olson', 3, null, true),
    ('Whiskey', 'Armstrong', 4, 2, false),
    ('Miriah', 'Sifontest', 4, 2, false),
    ('Roger', 'Winger', 4, 2, false),
    ('Speed', 'Racer', 5, null, true),
    ('Hulk', 'Hogan', 6, 3, false),
    ('Trisha', 'Lauter', 6, 3, false);
INSERT INTO manager (first_name, last_name)
SELECT first_name,
    last_name
FROM employee
WHERE manager_confirm = 1;