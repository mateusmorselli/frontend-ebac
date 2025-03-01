## Formulário de Cadastro com Validação e Máscaras

Este projeto implementa um formulário de cadastro com validação de campos, máscaras de entrada para telefone, CPF e CEP, e um carrossel de imagens. Além disso, inclui mensagens de erro e sucesso para um melhor feedback ao usuário.

### 📌 Funcionalidades
- **Carrossel de Imagens**: Imagens que mudam automaticamente com o uso do plugin **Slick**.
- **Máscaras de Entrada**:
  - Telefone: `(DDD) 12345-6789`
  - CPF: `123.456.789-00`
  - CEP: `012345-678`
- **Validação de Campos**:
  - Valida se todos os campos obrigatórios estão preenchidos.
  - Exibe mensagens de erro específicas para cada campo.
  - Após a submissão, exibe uma mensagem de sucesso e limpa o formulário.
- **Feedback de Erro**: Alerta o usuário quando algum campo obrigatório não é preenchido corretamente.

### 🛠️ Tecnologias
- **HTML**  
- **CSS**  
- **JavaScript (jQuery)**  
- **Slick Carousel**  
- **jQuery Mask Plugin**  
- **jQuery Validate Plugin**

### 🚀 Como usar
1. Preencha todos os campos obrigatórios do formulário (nome, e-mail, telefone, endereço, CPF, e CEP).
2. O telefone, CPF e CEP terão as máscaras de entrada automáticas.
3. Ao enviar o formulário, se os dados forem válidos, será exibido um alerta de sucesso e o formulário será resetado.
4. Caso algum campo esteja vazio ou incorreto, será exibido um alerta solicitando o preenchimento adequado.

