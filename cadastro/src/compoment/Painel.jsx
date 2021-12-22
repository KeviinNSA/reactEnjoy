import React from "react"
/*let url = window.location.href.split('/')
if(url[3] === 'painel'){
    import('bootstrap/dist/css/bootstrap.min.css')
    .then(resp => {

    })
}
*/
// Painel está por ser teminado em breve...............................................
export default class Painel extends React.Component{


    render(){
        return(
            <div>
            <div class="navbar navbar-inverse navbar-fixed-top cor-padrao" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Jupiter.Team</a>
                    </div>
                    <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav" id="menu-principal">
                        <li class="ative"><a ref_sys="sobre" href="#">Home</a></li>
                        <li><a ref_sys="cadastrar_equipe" href="#about">Cadastrar</a></li>
                        <li><a ref_sys="lista_equipe" href="#contact">Lista</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#logout"><span class="glyphicon glyphicon-off"></span> Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>

            <header id="header">
            <div class="container">
                <div class="row">
                <div class="col-md-6">
                    <p><span class="glyphicon glyphicon-cog"></span> Painel de Controle</p>
                </div>

                <div class="col-md-6">
                    <p class="text-right"><span class="glyphicon glyphicon-time"></span> Último login: 27-08-2020</p>
                </div>
                </div>
            </div>
            </header>

            <section class="bread">
            <div class="container">
                <ol class="breadcrumb">
                <li><a href="#">Home</a></li>
                </ol>
            </div>
            </section>

    <section class="principal">
        <div class="container">
            <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                <a href="#" ref_sys="sobre" class="list-group-item active"><span class="glyphicon glyphicon-home"></span>
                    Home
                </a>
                <a href="#" ref_sys="cadastrar_equipe" class="list-group-item"><span class="glyphicon glyphicon-pencil"></span> Cadastrar</a>
                <a href="#" ref_sys="lista_equipe" class="list-group-item"><span class="glyphicon glyphicon-pencil"></span> Lista<span class="badge">2</span></a>
                </div>
            </div>

            <div class="col-md-9">
                <div id="cadastrar_equipe_section" class="panel panel-primary">
                <div class="panel-heading">Cadastrar Produto</div>
                <div class="panel-body">
                    <form method="POST" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="">Nome Produtos</label>
                        <input type="text" class="form-control" name="nome"/>
                    </div>
                    <div class="form-group">
                        <label for="">Preço</label>
                        <input type="text" class="form-control" name="preco"/>
                    </div>
                    <div class="form-group">
                        <label for="">Qtd</label>
                        <input type="text" class="form-control" name="qtd"/>
                    </div>
                    <div class="form-group">
                        <label for="">Descrição</label>
                        <textarea name="descricao" class="form-control" rows="5"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Imagem</label>
                        <input type="file" name="img" />
                    </div>
                    <button type="submit" name="acao" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>

                <div id="lista_equipe_section" class="panel panel-primary">
                <div class="panel-heading">Produtos</div>
                <div class="panel-body">
                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <td>Nome do Produto</td>
                        <td>Preço</td>
                        <td>Qtd</td>
                        <td>Descrição</td>
                        <td>#</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td><button class="btn btn-danger deletar-membro"><span class="glyphicon glyphicon-trash"></span> Excluir</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </div>
        )
    }
}