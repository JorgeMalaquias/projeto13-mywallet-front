# My Wallet

# Sobre
Consiste numa aplicação para controle financeiro de entradas e saídas de dinheiro na carteira do usuário.

# Tecnologias empregadas
- React JS
- Javascript

# Uso da aplicação(front-end)

## Tela Cadastro
![Tela Cadastro](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20cadastro(forms%20vazio).png)  
É a tela onde se realiza o cadastro de um usuário. Caso o usuário já esteja cadastrado, pode clicar em "Já tem uma conta? Entre agora!" para ser redirecionado.  
![Tela Cadastro exemplo](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20cadastro(forms%20preenchido).png)  
Para o cadastro, basta preencher os campos do formulário com dados válidos e clicar em "Cadastrar". Caso algum dado seja de formato inválido, será exibido aviso no campo do dado inválido.  
![Tela Cadastro popup](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20cadastro(pop%20up).png)  
Se o cadastro for feito com sucesso será exibido um pop-up informando isto. Caso ocorra algum erro no registro (ex: email informado já foi cadastrado), isso será informado também via pop-up.

## Tela Login
![Tela login](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20login%20(form%20vazio).png)  
É a tela inicial da aplicação. Caso o usuário não esteja cadastrado pode clicar em "Primeira vez? Cadastre-se!" e será redirecionado para a tela de cadastro.  
![Tela login exemplo](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20login%20(forms%20preenchido).png)  
Sendo o usuário já cadastrado, basta informar nos campos os dados pedidos, de acordo com os dados que foram informados no momento do cadastro.
Se o login for feito com sucesso, o usuário será redirecionado para a tela geral. Se ocorrer algum erro no login, será informado via pop-up.

## Tela Geral
![Tela Geral vazia](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20geral%20usuario.png)  
É a tela onde o usuário visualiza sua informações de fluxo de dinheiro. Se não houver nenhum registrado, será exibido uma mensagem informando isto. Abaixo há dois botões, para realizar o registro de movimentações de dinheiro, tanto de entradas, quanto de saídas. Clicando em "Nova entrada" o usuário será redirecionado para a tela de cadastro de entradas, assim como será redirecionado para tela de cadastro de saídas se clicar em "Nova saída".  
![Tela Geral 1 info](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20geral%20com%201%20entrada.png)  
Após 1 registro feito.  
![Tela Geral 2 infos](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20geral%20com%20duas%20infos.png) 
Após 2 registros feitos.  

## Tela Registro de Entradas

![Tela Registro de Entradas](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20entradas.png)  
É a tela onde o usuário registra uma entrada de dinheiro. Basta preencher os campos com informações válidas. "Valor" deve ser um número, podendo ser inteiro ou não. Em números não inteiros deve ser utilizado ".".  
![Tela Registro de Entradas exemplo](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20entradas%20forms%20preenchidos.png)  
Após preencher as informações é clicar em "Salvar entrada" e se o registro for criado com sucesso, o usuário será redirecionado para a tela geral, com as informações sendo atualizadas. Se ocorrer algum erro e o registro não for criado, será avisado via pop-up.  

## Tela Registro de Saídas
![Tela Registro de Saídas](https://github.com/JorgeMalaquias/assets/blob/main/mywallet/tela%20saida.png)  
Seu fluxo é exatamente o mesmo da tela de entradas, scom a única diferença de que realiza o registro de um saída.

#Rodando aplicação
#Rodando testes
#Rodando via docker (se for o caso)

#Autor
*incluir informações de contato*

#Agradecimentos(opcional)
*agradecer colegas, instituições e qualquer um que eventualmente tenha contribuido para a criação da aplicação*
