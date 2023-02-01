<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="icon" type="image/png" href="img/uni_gray_xs.png">
  <title>UNI | EARPFIM</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <link rel="stylesheet" href="/css/login.css">
</head>

<body>


  <div class="wrapper fadeInDown">
    <div id="formContent">

      <div class="fadeIn first">
        <img src="img/uni_gray_xs.png" alt="" class="m-0 pl-1 pr-2" style="height:45px;">
      </div>

      <form method="post" id="demo-form" action="{{ route('iniciar-sesion') }}">
        @csrf
        <input type="text" id="usuario" class="fadeIn second" name="usuario" placeholder="Usuario">
        <input type="password" id="password" class="fadeIn third" name="password" placeholder="Contraseña" autocomplete="off">

        @error('message')
        <p class="rounded text-light bg-danger" id="error">{{ $message }}</p>
        @enderror

        <input type="submit" class="fadeIn fourth g-recaptcha" data-sitekey="6LforhkkAAAAAHzy3c4lGp5qI7DARypu9gGJwoQ3" data-callback='onSubmit' data-action='submit' value="Iniciar sesion">
      </form>

    </div>
  </div>
  <script src="https://www.google.com/recaptcha/api.js"></script>
  <script src="js/login.js"></script>
  <script>
    function onSubmit(token) {
      document.getElementById("demo-form").submit();
    }

    function storageChange (event) {
      if(localStorage.logeado=="true"){
        window.location.reload(true); //si el usuario se logueo
    }}
    window.addEventListener('storage', storageChange, true)
  </script>
  <script src="https://code.jquery.com/jquery-3.6.3.slim.js" integrity="sha256-DKU1CmJ8kBuEwumaLuh9Tl/6ZB6jzGOBV/5YpNE2BWc=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>