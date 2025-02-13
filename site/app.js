document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.querySelector('.posts-grid');
    
    // Dados dos posts
    const posts = [
        {
            title: 'Aula de Estrutura de Dados',
            date: '2025-02-13',
            content: 'Introdução aos conceitos fundamentais de estruturas de dados.',
            tags: ['estrutura de dados', 'programação']
        },
        {
            title: 'Aula de POO em Java',
            date: '2025-02-12',
            content: 'Aprendendo sobre classes, objetos e herança em Java.',
            tags: ['POO', 'Java']
        }
    ];

    // Renderiza os posts
    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'card';
        
        article.innerHTML = `
            <h3>${post.title}</h3>
            <time datetime="${post.date}">
                ${new Date(post.date).toLocaleDateString('pt-BR')}
            </time>
            <p>${post.content}</p>
            <div class="tags">
                ${post.tags.map(tag => `
                    <span class="tag">${tag}</span>
                `).join('')}
            </div>
        `;
        
        postsContainer.appendChild(article);
    });
});