// Sistema de Gerenciamento de Logs
class LogManager {
    constructor() {
        this.subjects = {
            'poo': 'POO',
            'estrutura': 'Estrutura de Dados',
            'banco': 'Banco de Dados',
            'calculo': 'Cálculo',
            'sistema': 'Sistemas'
        };
    }

    formatLogEntry(entry) {
        const { date, subject, content } = entry;
        const { title, topics = [], code_examples = [], homework = [], notes = [] } = content;
        
        let markdown = `\n## Aula - ${date}\n\n`;
        markdown += `### ${title}\n\n`;
        
        if (topics.length > 0) {
            markdown += '#### Principais Tópicos\n';
            topics.forEach(topic => markdown += `- ${topic}\n`);
            markdown += '\n';
        }
        
        if (code_examples.length > 0) {
            markdown += '#### Códigos Desenvolvidos\n';
            code_examples.forEach(code => {
                markdown += '```java\n' + code + '\n```\n\n';
            });
        }
        
        if (homework.length > 0) {
            markdown += '#### Atividades/Tarefas\n';
            homework.forEach(task => markdown += `- ${task}\n`);
            markdown += '\n';
        }
        
        if (notes.length > 0) {
            markdown += '#### Anotações Pessoais\n';
            notes.forEach(note => markdown += `- ${note}\n`);
            markdown += '\n';
        }
        
        markdown += '---\n';
        return markdown;
    }

    async addEntry(entry) {
        const { subject } = entry;
        if (!this.subjects[subject.toLowerCase()]) {
            throw new Error(`Disciplina inválida: ${subject}`);
        }

        const markdown = this.formatLogEntry(entry);
        
        // Aqui você implementaria a lógica para:
        // 1. Ler o arquivo MD atual
        // 2. Inserir o novo conteúdo após o cabeçalho
        // 3. Salvar o arquivo atualizado
        
        return markdown;
    }
}

// Exemplo de uso:
const manager = new LogManager();

const newEntry = {
    date: '2025-02-14',
    subject: 'poo',
    content: {
        title: 'Aula sobre Encapsulamento',
        topics: [
            'Modificadores de acesso',
            'Getters e Setters',
            'Encapsulamento na prática'
        ],
        code_examples: [
            `public class Conta {
    private double saldo;
    
    public double getSaldo() {
        return saldo;
    }
    
    public void depositar(double valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    }
}`
        ],
        homework: [
            'Implementar classe ContaBancaria com encapsulamento',
            'Exercícios do livro: páginas 45-48'
        ],
        notes: [
            'Revisar conceitos de private vs public',
            'Praticar mais exemplos de encapsulamento'
        ]
    }
};