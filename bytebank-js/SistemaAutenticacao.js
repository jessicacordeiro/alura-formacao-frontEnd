/*
Ser autenticável significa ter o método autenticar.
Duck type - cabe para liguagens fracamente tipadas. Isso significa que não interessa o tipo mas sim o método que você vai querer usar.
Polimorfismo
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.auth(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static auth(autenticavel) {
      return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}