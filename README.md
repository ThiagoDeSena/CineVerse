# 📽️ CineVerse - Sistema de Cadastro de Filmes

<img width="1919" height="881" alt="image" src="https://github.com/user-attachments/assets/2803990a-4408-434d-965d-2d91707617d7" />

## 🚀 Sobre o Projeto
O **CineVerse** é um mini sistema de cadastro de filmes/séries desenvolvido como parte de um desafio de programação em JavaScript. Permite gerenciar uma lista pessoal de filmes com armazenamento local.

## ✨ Funcionalidades
- **Cadastro completo**:
  - Título, ano, gênero e capa (URL)
  - Validação de campos obrigatórios
- **Armazenamento persistente** usando `localStorage`
- **Filtro por gênero** (Ação, Comédia, Terror, etc.)
- **Design responsivo** com Tailwind CSS
- **Exclusão** de itens individualmente

## 🛠️ Tecnologias
- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white)

## 🎯 Como Usar
1. Preencha o formulário
2. Clique em "Adicionar Filme/Série"
3. Visualize sua lista
4. Filtre por gênero quando necessário
5. Remova itens clicando no botão correspondente

## 📂 Estrutura do Código
```javascript
// Exemplo de função principal
function addMovie() {
  const movie = {
    id: Date.now(),
    title: document.getElementById('movie-title').value,
    year: document.getElementById('movie-year').value,
    genre: document.getElementById('movie-genre').value,
    image: document.getElementById('movie-image').value
  };
  
  // Adiciona ao array e atualiza localStorage
  moviesArray.push(movie);
  localStorage.setItem('movies', JSON.stringify(moviesArray));
  renderMovies();
}

```

## 🚧 Pré-requisitos
Navegador moderno com suporte a:
- JavaScript ES6+
- Web Storage API
- Flexbox/CSS Grid

## 📌 Melhorias Futuras
- [ ] Edição de filmes cadastrados
- [ ] Sistema de avaliação (1-5 estrelas)
- [ ] Busca por título
- [ ] Dark mode toggle

## 📄 Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para detalhes.

---

Desenvolvido por [Thiago De Sena](https://www.linkedin.com/in/thiago-de-sena-developer/)  
Como parte do Desafio JavaScript - Impulse CanPack
