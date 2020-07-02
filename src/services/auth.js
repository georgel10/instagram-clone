export function login() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'token_test',
        user: {
          name: 'test',
          email: 'test@test.com',
        },
      });
    }, 2000);
  });
}

export function register() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'token_test',
        user: {
          name: 'test',
          email: 'test@test.com',
        },
      });
    }, 2000);
  });
}
