<?php
use Illuminate\Support\Facades\Auth;
$name = Auth::check() ? Auth::user()->name : '';
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" type="image/png" href="img/uni_gray_xs.png">
    <title>@yield('tituloPag')</title>
    <link rel="stylesheet" href="css/boostrap/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/fontawesome/fontawesome.min.css">
    <link rel="stylesheet" href="css/datatables/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="css/general.css">
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/tablaAsistencia.css">
    <link href="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.3.122/web/pdf_viewer.min.css" rel="stylesheet">
    <!-- <link href="https://cdn.datatables.net/responsive/2.4.0/css/responsive.bootstrap4.min.css" rel="stylesheet" > -->
</head>
<body>
    
    <!-- jQuery CDN - Slim version (=without AJAX) -->
    <script src="js/jquery/jquery-3.6.3.slim.js"></script>
    <!-- Popper.JS -->
    <script src="js/popper/popper.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="js/boostrap/bootstrap.bundle.min.js"></script>
    <!-- Datatables -->
    <script src="js/jquery/jquery.dataTables.min.js"></script>
    <script src="js/jquery/dataTables.bootstrap4.min.js"></script>
    <script src="js/menu.js"></script>

    <div class="before-page" id="before-page">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
    <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar"  class="shadow">
            <div class="sidebar-header">
                <a href="/home">
                <div class="d-flex">
                    <img src="img/uni_gray_xs.png" alt="" class="m-0 pl-1 pr-2" style="height:45px;">
                    <div class="d-flex flex-column">
                        <span class="d-block">UNI EARPFIM</span>
                        <span class="d-block" style="font-size: 12px;">PRACTICANTE</span>
                    </div>
                </div>
                </a>
            </div>
            <ul class="list-unstyled">
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true" class="dropdown-toggle"><i class="fas fa-business-time mr-2"></i>General</a>
                    <ul class="list-unstyled show" id="homeSubmenu">
                        <li>
                            <a href="/practicante"><i class="fab fa-slack-hash mr-2"></i>Practicante</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- Page Content  -->
        <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button type="button" id="sidebarCollapse" class="btn text-light">
                    <i class="fa fa-bars"></i>
                    </button>
                    <span style="overflow:hidden;width:auto;white-space:nowrap;text-overflow:ellipsis"><?php echo $name ?></span>
                    <li class="nav-item dropdown menu-rol">
                        <a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="true">
                        <i class="fas fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right" style="left: inherit; right: 0px;" >
                            <span class="dropdown-header">Roles</span>
                            <a class="dropdown-item">Practicante</a>
                            <div class="dropdown-divider"></div>
                            <div class="dropdown-divider"></div>
                            <div class="dropdown-footer">
                                <a href="#" class="dropdown-item"> Mi informacion</a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">Reiniciar clave</a>
                                <div class="dropdown-divider"></div>
                                <a href="{{ route('logout') }}" onclick ="window.localStorage.setItem('logeado', false);" class="dropdown-item">Cerrar Sesión</a>
                            </div>
                        </div>
                    </li>
                </div>
            </nav>
           @yield('contenido')
        </div>
    </div>
    <script type="text/javascript">
        document.getElementById('before-page').setAttribute('style', 'display:none');

        window.userID = "{{ Auth::check() ? Auth::user()->cod_usuario : '' }}";
        window.userTOKEN = "{{ Auth::check() ? Auth::user()->remember_token : '' }}";

        window.localStorage.setItem('logeado', true);
        function storageChange (event) {
        if(localStorage.logeado=="false"){
            window.location.replace("/"); //si el usuario hizo logout
        }else
            window.localStorage.setItem('logeado', true);
        }
        window.addEventListener('storage', storageChange, false)
   </script>
   <script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.3.122/build/pdf.min.js"></script>
   <!-- <script src="https://cdn.datatables.net/responsive/2.4.0/js/dataTables.responsive.min.js"></script> -->
</body>

</html>