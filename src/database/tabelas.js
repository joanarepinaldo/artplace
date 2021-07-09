class Tabelas{
    init(conexao){
        this.conexao = conexao
        
        this.criarTabelaLojas()

    }

    criarTabelaLojas(){
        const sql = 'CREATE TABLE IF NOT EXISTS lojas2 (id int NOT NULL AUTO_INCREMENT, lat varchar(255),lng varchar(255),name varchar(255),about varchar(255),whatsapp varchar(255),images varchar(255),hours varchar(255), instructions varchar(255),open_on_weekends varchar(255),PRIMARY KEY (id) )'

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro)
            }else{
                console.log("Criou tabela")
            }
        })
    }

}

module.exports = new Tabelas