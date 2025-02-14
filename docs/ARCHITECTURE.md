# Documentação de Arquitetura e Boas Práticas

## Estrutura do Projeto

### Organização de Diretórios
```
udf-computacao-noturno/
├── index.html             # Página principal
├── pages/                 # Páginas específicas das disciplinas
│   ├── poo.html
│   ├── estrutura.html
│   ├── banco.html
│   ├── calculo.html
│   └── sistema.html
├── assets/               # Recursos estáticos
│   ├── css/
│   ├── js/
│   └── img/
├── components/          # Componentes reutilizáveis
│   ├── header.html
│   ├── footer.html
│   └── nav.html
├── logs/               # Arquivos de conteúdo em Markdown
└── docs/              # Documentação
```

## Melhorias Planejadas

### 1. Componentização
- Extrair elementos comuns (header, footer, nav) para componentes reutilizáveis
- Implementar um sistema simples de templates
- Usar JavaScript para carregar componentes dinamicamente

### 2. Organização do CSS
- Adotar metodologia BEM para nomes de classes
- Separar estilos por componentes
- Criar variáveis para cores e medidas comuns

### 3. Sistema de Logs
- Criar uma estrutura de diretórios por semestre
- Implementar um sistema de tags para categorização
- Adicionar metadados (data, autor, versão)

### 4. Build e Deploy
- Adicionar sistema de build (ex: Webpack)
- Minificação de CSS e JavaScript
- Otimização de imagens
- Pipeline de CI/CD

## Padrões de Código

### HTML
- Usar tags semânticas (header, nav, main, section, article)
- Manter estrutura consistente entre páginas
- Documentar seções complexas

### CSS
```css
/* Variáveis globais */
:root {
  --primary-color: #1a365d;
  --secondary-color: #2b6cb0;
  --text-color: #2d3748;
}

/* Exemplo de componente usando BEM */
.card {}
.card__title {}
.card__content {}
.card--featured {}
```

### JavaScript
```javascript
// Carregar componentes
async function loadComponent(name, target) {
  try {
    const response = await fetch(`/components/${name}.html`);
    const html = await response.text();
    document.querySelector(target).innerHTML = html;
  } catch (error) {
    console.error(`Error loading component ${name}:`, error);
  }
}
```

### Markdown (Logs)
```markdown
# Título da Aula

## Metadados
- Data: YYYY-MM-DD
- Professor: Nome
- Local: Sala/Lab

## Conteúdo
- Tópico 1
  - Subtópico
  - Exemplos
- Tópico 2

## Recursos
- Links
- Bibliografia
- Ferramentas
```

## Próximos Passos

1. **Fase 1: Organização**
   - Reorganizar arquivos na nova estrutura
   - Criar templates base
   - Documentar padrões

2. **Fase 2: Componentização**
   - Implementar sistema de componentes
   - Refatorar páginas existentes
   - Criar biblioteca de componentes comuns

3. **Fase 3: Build System**
   - Configurar ferramentas de build
   - Implementar otimizações
   - Automatizar deploy

4. **Fase 4: Melhorias**
   - Sistema de busca
   - Navegação entre conteúdos relacionados
   - Modo escuro
   - PWA

## Guia de Contribuição

1. **Branches**
   - main: produção
   - develop: desenvolvimento
   - feature/*: novas funcionalidades
   - fix/*: correções

2. **Commits**
   - feat: nova funcionalidade
   - fix: correção de bug
   - docs: documentação
   - style: formatação
   - refactor: refatoração
   - test: testes

3. **Pull Requests**
   - Usar template padrão
   - Incluir descrição clara
   - Referenciar issues relacionadas

## Observações

- Manter documentação atualizada
- Seguir padrões estabelecidos
- Testar em diferentes dispositivos/navegadores
- Priorizar performance e acessibilidade