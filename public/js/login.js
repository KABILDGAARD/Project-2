let handleCreateAccount = () => {
    event.preventDefault();
  
    let username = $('#createUsername').val().trim();
    let name = $('#name').val().trim();
    let password = $('#createPassword').val();
    let location = $('#location').val().trim();
  
    addUser({
      username: username,
      name: name,
      password: password,
      location: location,
    });
  
  
  }
  
  let addUser = (userData) => {
    $.post('/create-account', userData);
  }
  
  $('#createAccount').on('click', handleCreateAccount);