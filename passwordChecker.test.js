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
  const result = passwordChecker('Valid1!?');
  console.log('Result for "Valid1!?":', result);
  expect(result).toBe(true);
});
