const passwordChecker = require('./passwordChecker');

test('Un mot de passe doit contenir au moins 8 caractères', () => {
  expect(passwordChecker('short')).toBe(false);
});

test('Un mot de passe doit contenir au moins un caractère spécial', () => {
  expect(passwordChecker('password123')).toBe(false);
});

test('Un mot de passe doit contenir au moins un chiffre', () => {
  expect(passwordChecker('password!')).toBe(false);
});

test('Un mot de passe ne doit pas contenir la chaîne "IPL" (insensible à la casse)', () => {
  expect(passwordChecker('PassIPLword1!')).toBe(false);
});

test('Un mot de passe valide', () => {
  expect(passwordChecker('Valid1!')).toBe(true);
});
