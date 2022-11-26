const apiURL = 'https://api.noroff.dev/api/v1';
export async function app() {
  const response = await fetch(`${apiURL}/api/v1/social/posts`, options);
  const data = await response.json();
  console.log('post Data', data);
}

//AUTHENTICATION
app.get('/login', (req, res) => {
  let flashMessage = '';
  res.render('login.ejs', { flashMessage });
});
app.get('/register', (req, res) => {
  res.render('register.ejs', { flashErrorMessage: '' });
});
app.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let userBody = {
    email: `${email}`,
    password: `${password}`,
  };

  //POST /api/v1/social/auth/login
  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userBody),
  };

  let flashMessage = '';
  fetch(`${baseUrl}/social/auth/login`, opts)
    .then(res => res.json())
    .then(resp => {
      console.log(resp);
      if (resp.errors) {
        flashMessage = resp.errors[0].message;
      }
      localStorage.setItem('token2', '2nd');
      localStorage.setItem('token', `${resp.accessToken}`);
      res.render('login.ejs', { flashMessage });
    });
});
app.post('/register', (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  let avatar = req.body.avatar;
  let banner = req.body.banner;

  let baseUrl = 'https://api.noroff.dev/api/v1';

  let userBody = {
    name: `${username}`,
    email: `${email}`,
    password: `${password}`,
    avatar: `${avatar}`,
    banner: `${banner}`,
  };

  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userBody),
  };

  let flashErrorMessage = '';
  let flashSuccessMessage = '';
  fetch(`${baseUrl}/social/auth/register`, opts)
    .then(res => res.json())
    .then(resp => {
      if (resp.errors) {
        flashErrorMessage = resp.errors[0].message;
      }

      res.render('register.ejs', { flashErrorMessage });
    });
});
