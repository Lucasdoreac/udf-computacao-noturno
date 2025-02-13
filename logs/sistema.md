# Diário de Bordo - Sistema Cliente&Servidor

## Módulo 1 - Fundamentos

### 1. Introdução à Arquitetura Cliente-Servidor

#### Principais Tópicos
- Conceitos básicos
- Protocolos de comunicação
- Modelos de arquitetura

#### Exemplos Práticos
```javascript
// Exemplo de servidor HTTP simples
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});
```

#### Links Úteis
- [Material Online](link_do_material)
- [Exercícios Práticos](link_dos_exercicios)

#### Anotações Pessoais
- Revisar: protocolos TCP/IP
- Próximo tópico: WebSockets

---

## Organização do Curso

### Avaliações
- Prova 1: Data a definir
- Projeto prático: API REST

### Bibliografia Recomendada
1. Redes de Computadores - Tanenbaum
2. HTTP: The Definitive Guide

### Ferramentas Utilizadas
- Postman
- Node.js
- Express
